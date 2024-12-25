'use server';

export async function searchForCustomTokenInMarketCap(name: string) {
	return await fetch(`https://api.coinmarketcap.com/dexer/v3/dexer/search/main-site?keyword=${encodeURIComponent(name)}&all=false`, {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9,fa-IR;q=0.8,fa;q=0.7"
		}
	}).then(async e=> await e.json() as ({
		"data": {
			"total": 50,
			"pairs": [
				{
					"platformId": 14,
					"platformName": "BSC",
					"baseTokenSymbol": "ELXR",
					"quoteTokenSymbol": "BUSD",
					"liquidity": "634.2844837364696",
					"pairContractAddress": "0x39ff46910913f6442238e7391785d3b3d7853fa2",
					"platFormCryptoId": 1839,
					"exchangeId": 1344,
					"poolId": "19635",
					"baseTokenName": "Elixir Token",
					"marketCap": "1304.512737930848237259",
					"priceUsd": "0.000103292528660983",
					"priceChange24h": "-0.0094067702",
					"baseToken": {
						"name": "Elixir Token",
						"address": "0xcc7bee57ec7b52edbf6c8fc696e4b62617078103",
						"symbol": "ELXR",
						"decimals": 18
					},
					"quoteToken": {
						"name": "BUSD Token",
						"address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
						"symbol": "BUSD",
						"decimals": 18
					},
					"volume24h": "4.300449758113425",
					"volumeQuote24h": "4.29614564088508"
				}
			]
		},
		"status": {
			"timestamp": "2024-12-22T19:04:51.901Z",
			"error_code": "0",
			"error_message": "SUCCESS",
			"elapsed": "0",
			"credit_count": 0
		}
	})).then(e=>e['data']['pairs']).catch((e)=>{console.error(e); return [];});
}

export async function searchForStableCoinInMarketCap(name: string) {
	return await fetch("https://api.coinmarketcap.com/gravity/v4/gravity/global-search", {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"cache-control": "no-cache",
			"content-type": "application/json",
		},
		"body": JSON.stringify({"keyword":name,"scene":"community","limit":5}),
		"method": "POST",
	}).then(async e=> await e.json() as ({
		"data": {
			"suggestions": [
				{
					"type": "token",
					"tokens": [
						{
							"id": 1958,
							"name": "TRON",
							"symbol": "TRX",
							"slug": "tron",
							"category": "COIN",
							"is_active": 1,
							"is_listed": 0,
							"rank": 10
						},
						{
							"id": 9220,
							"name": "StrikeX",
							"symbol": "STRX",
							"slug": "strikecoin",
							"category": "TOKEN",
							"is_active": 1,
							"is_listed": 0,
							"rank": 809
						},
						{
							"id": 34628,
							"name": "MATRIX",
							"symbol": "MTRX",
							"slug": "matrix-solana",
							"category": "TOKEN",
							"is_active": 1,
							"is_listed": 0,
							"rank": 6261
						},
						{
							"id": 20346,
							"name": "Metarix",
							"symbol": "MTRX",
							"slug": "metarix",
							"category": "TOKEN",
							"is_active": 1,
							"is_listed": 0,
							"rank": 8578
						},
						{
							"id": 28407,
							"name": "Venus TRX",
							"symbol": "vTRX",
							"slug": "venus-trx",
							"category": "TOKEN",
							"is_active": 1,
							"is_listed": 0,
							"rank": 9843
						}
					]
				}
			]
		}
	})).then(e=>e['data']['suggestions'].find(o=>o.type === 'token')?.tokens || []).catch(()=>[]);
}


export async function restartMarketCapWs() {
	global.LMCWs?.close();
}
