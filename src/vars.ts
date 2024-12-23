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
