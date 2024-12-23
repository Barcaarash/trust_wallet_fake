import {ApiRoutes, SupportedCoins} from "@/vars";

export async function getBalanceOf(crypto: typeof SupportedCoins[number]) {
	return (await prisma.balance.findUnique({
		where: {
			symbol: crypto.symbol
		},
		select: {
			value: true
		}
	}).catch(()=>undefined))?.value || 0;
}
