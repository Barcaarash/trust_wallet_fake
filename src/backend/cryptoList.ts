'use server';

import {updateSupportCoin} from "@/vars";

export async function refreshSupportedCoins(restartWs: boolean = false) {
	let final: typeof global.SupportedCoins = [];

	const [tokens,coins] = await Promise.all([
		prisma.customToken.findMany(),
		prisma.coin.findMany()
	])

	final = tokens.map(o => (
		{
			id: +o.id,
			name: o.name,
			symbol: o.symbol,
			icon: o.image + "",
			isDex: true,
			network: o.networkId ? +o.networkId:undefined,
			display: true
		}
	))
	final = [
		...final,
		...coins.map(o => ({
			id: +o.id,
			name: o.name,
			symbol: o.symbol,
			icon: o.image + "",
			isDex: false,
			network: o.networkId ? +o.networkId:undefined,
			display: true
		}))
	]

	if (restartWs) global.LMCWs?.close();
	updateSupportCoin(final);
	return final;
}
