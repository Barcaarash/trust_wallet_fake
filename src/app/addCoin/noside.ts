import {searchForCustomTokenInMarketCap, searchForStableCoinInMarketCap} from "@/app/addCoin/actions";
import {PrismaType} from "@/backend/database";

export function convertCustomTokenSearchDataToCustomToken(results: Awaited<ReturnType<typeof searchForCustomTokenInMarketCap>>): PrismaType<'customToken'>[] {
	if (!results) return [];

	return results.map(o => ({
		id: o.poolId,
		name: o.baseTokenName,
		symbol: o.baseTokenSymbol,
		image: 'id' in o?.baseToken ? `https://s2.coinmarketcap.com/static/img/coins/64x64/${o.baseToken.id}.png`:null,
		extra: o
	}))
}


export function convertStableCoinSearchToStableCoin(results: Awaited<ReturnType<typeof searchForStableCoinInMarketCap>>): PrismaType<'coin'>[] {
	if (!results) return [];

	return results.map(o => ({
		id: o.id+"",
		name: o.name,
		symbol: o.symbol,
		image: `https://s2.coinmarketcap.com/static/img/coins/64x64/${o.id}.png`,
		extra: o
	}))
}
