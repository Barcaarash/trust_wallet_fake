import {devMode, SupportedCoins} from "@/vars";
import {PrismaType} from "@/backend/database";
import {searchForCustomTokenInMarketCap} from "@/app/addCoin/actions";
import {convertCustomTokenSearchDataToCustomToken} from "@/app/addCoin/noside";
import {refreshSupportedCoins} from "@/backend/cryptoList";

declare global {
	var LMCData: typeof LastMarketCapData;
	var LMCEvents: typeof _events;
	var LMCWs: WebSocket;
	var LMCPassiveThread: ReturnType<typeof setInterval>;
	var LMCPassiveRunning: boolean
}

type SingleCryptoData = {
	[k in keyof typeof keyMap]: number
};

export let LastMarketCapData: {
	[k: number]: SingleCryptoData
} = global.LMCData || {};
global.LMCData ||= LastMarketCapData;

const keyMap = {
	id: "id",
	price: "p",
	percentChange1h: "p1h",
	percentChange24h: "p24h",
	percentChange7d: "p7d",
	percentChange30d: "p30d"
} as const;

let _events: {
	[k: string]: Parameters<typeof addCryptoChangeEvent>[0]
} = global.LMCEvents || {};
global.LMCEvents = _events;

export function addCryptoChangeEvent(event: ((o:typeof LastMarketCapData)=>any)) {
	const u = crypto.randomUUID();
	global.LMCEvents[u] = event;
	return u;
}

export function removeCryptoChangeEvent(u: string) {
	delete _events[u];
}

async function handleWSData(obj: any) {
	const data: {
		[k: string]: number
	} = Object.entries(obj).find(([_,v]) => typeof v === 'object')?.[1] as any;
	if (!data) return;

	let finalObject: SingleCryptoData;

	if (data.poolId) {

		const typedData = data as unknown as ({
			"poolId": "7281441",
			"priceChange24h": -0.0027664536,
			"priceUsd": 0.24267971812361103,
			"volumeQuote24h": 137691885.11177495,
			"volume24h": 137618529.66076046,
			"priceQuote": 0.2428430471126906
		});

		const token = await prisma.customToken.findUnique({
			where: {
				id: typedData.poolId
			}
		})
		if (!token) return;



		const wrapped = global.LMCData[token.extra?.platFormCryptoId || -1];
		if (!wrapped) return;

		console.log("Updated",token.symbol, typedData)
		console.log("Wrapped", wrapped)

		finalObject = {
			...wrapped,
			id: +typedData.poolId,
			percentChange1h: typedData.priceChange24h / 24,
			percentChange7d: typedData.priceChange24h * 7,
			percentChange30d: typedData.priceChange24h * 30,
			percentChange24h: typedData.priceChange24h,
			price:  wrapped.price * typedData.priceUsd
		}
	} else {
		finalObject = Object.fromEntries(
			Object.entries(keyMap).map(([key, value]) => ([key,data[value]]))
		) as SingleCryptoData
	}

	global.LMCData[finalObject.id] = finalObject;
	triggerAllMarketCapChangeEvents();
}

function triggerAllMarketCapChangeEvents() {
	for (let [u, event] of Object.entries(global.LMCEvents)) {
		try {
			event(global.LMCData)?.catch?.(console.error);
		} catch(e) {
			console.error(`Error in LMC Event(${u})`,e)
		}
	}
}

let ws: WebSocket | undefined = global.LMCWs;
global.LMCWs = ws;

let canAddNew = true;
export async function initMarketCapWebsocket() {
	if (ws || typeof window !== 'undefined') return;
	ws = new WebSocket("wss://push.coinmarketcap.com/ws?device=web&client_source=home_page");
	global.LMCWs = ws;
	console.log("INITILIZE")
	ws.onopen = async ()=>{
		console.log("MarketCap WS IS STABLE")

		await refreshSupportedCoins().catch(console.error);
		handleCryptoSetEvents();
		updateCustomTokens().catch(console.error);
		canAddNew = false;
	};
	const thread = setInterval(()=>{
		ws?.send("ping");
	}, 10000);
	const event = ()=>{
		canAddNew = true;
		console.log("MarketCap WS IS CLOSED, Reconnecting...");
		ws = undefined;
		clearInterval(thread);
		initMarketCapWebsocket().catch(console.error);
	};
	ws.onerror = event;
	ws.onclose = event;
	ws.onmessage = (e)=>{
		const data = JSON.parse(e?.data || "{}");
		handleWSData(data);
	}
}

function handleCryptoSetEvents() {
	if(!ws) throw("Websocket not defined");
	ws.send(JSON.stringify({
		"method": "RSUBSCRIPTION",
		"params": [
			"main-site@crypto_price_15s@{}@normal",
			global.SupportedCoins.filter(o=>!o.isDex).map(o=>o.id).join(",")
		]
	}))
}

global.LMCPassiveThread = setInterval(updateCustomTokens,2 * 60000);
export async function updateCustomTokens() {
	if (global.LMCPassiveRunning) return;
	global.LMCPassiveRunning = true;

	try {
		const tokens = await prisma.customToken.findMany();
		for (let token of tokens) {
			if (!token.extra) continue;

			const result = await searchForCustomTokenInMarketCap(token.extra?.pairContractAddress+"").then(e=>e[0] || undefined).catch(()=>undefined);
			if (!result || result.pairContractAddress !== token.extra.pairContractAddress) continue;

			global.LMCData[+result.poolId] = {
				id: +result.poolId,
				percentChange30d: (+result.priceChange24h) * 30,
				percentChange24h: +result.priceChange24h,
				price: +result.priceUsd,
				percentChange7d: +result.priceChange24h * 7,
				percentChange1h: +result.priceChange24h / 24
			}

			if (devMode) console.log("Custom token updated",token.symbol);
		}
	} catch (e) {
		console.error(e)
	}
	triggerAllMarketCapChangeEvents();
	global.LMCPassiveRunning = false;
}
