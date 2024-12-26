import {SupportedCoins} from "@/vars";
import {getCurrentWalletInfo} from "@/utils/ssr";
import ActionButtons from "@/app/wallet/ActionButtons";
import Transactions from "@/app/wallet/coin/Transactions";
import {getBalanceOf} from "@/utils/shortHand";
import {CoinImage} from "@/app/wallet/coin/CoinPart";
import {IconAngleDown, IconArrowDown, IconArrowRight, IconBell, IconCoins, IconInfo, IconSettings} from "@/app/icons";
import Link from "next/link";
import PageTitle from "@/utils/page";
import React from "react";
import DynamicValue from "@/app/wallet/coin/DynamicValue";


async function Page(props: any) {
	const symbol = (await props.searchParams).symbol || "TRX";
	const coin = SupportedCoins.find(s => s.symbol === symbol) || undefined;
	const coinChange = global.LMCData[(coin?.id || -1)];
	const [info, transactions] = await Promise.all([
		getCurrentWalletInfo(),
		prisma.transaction.findMany({
			where: {
				symbol: coin?.symbol || "UNKNOWN"
			}
		})
	]);
	if (!coin || !info || !coinChange) return <div>token not found</div>;

	const balance = await getBalanceOf(coin);
	const change = +coinChange.percentChange24h.toFixed(2);
	const isUp = change > 0;

	return (
		<div className="bg-background min-h-screen text-white" data-theme="dark">

			{/* Header */}
			<div className={`flex justify-between items-center mb-3 z-20 !pb-5 p-4 !pt-0 bg-background relative`}>
				<Link href={'/wallet'} className={'z-50'}>
					<IconArrowRight className="text-gray-400 rotate-180 w-5 h-5"/>
				</Link>
				<div className={'flex flex-col justify-center items-center flex-grow absolute left-0 right-0 mx-auto -top-1'}>
					<h1 className="text-lg relative">{coin.symbol}</h1>
					<p className={'text-xs text-textThird flex items-center gap-2 relative '}>
						<span className={'absolute right-3'}>COIN</span>
						<span>|</span>
						<span className={'absolute left-3 w-20 truncate'}>{coin.name}</span>
					</p>
				</div>

				<div className={'flex items-center gap-5'}>
					<IconBell/>
					<IconInfo/>
				</div>
			</div>
			<div>
				<div className={'flex flex-col items-center justify-center gap-5 relative'}>
					<div className={'absolute left-4 top-0 flex gap-1'}>
						<img src={'/icons/gas.png'} alt={'gas'} className={'w-4 object-contain'}/>
						<p className={'text-sm'}>
							$<DynamicValue default={'7.5'} localKey={`gas${symbol}`}/>
						</p>
					</div>
					<CoinImage coin={coin} className={'w-[50px] h-[50px]'}/>
					<div>
						<h3 className={"text-2xl font-bold tracking-wide"}>{balance} {coin.symbol}</h3>
						<p className={'opacity-50 text-xs tracking-widest text-center'}>${(+(balance * coinChange.price).toFixed(coinChange?.price < 1 ? 6 : 2)).toLocaleString()}</p>
					</div>
				</div>
				<br/>
				<ActionButtons single symbol={coin.symbol}/>
				<hr/>
				<Transactions transactions={transactions}/>
				<Link href={`/transactions?symbol=${coin.symbol}`}>
					<div className={'fixed bottom-0 flex justify-between gap-2 left-0 w-full h-[50px] border-t border-glass p-2 text-xs z-10 bg-background'}>
						<div>
							<p className={'opacity-50'}>Current {coin.symbol} price</p>
							<div className="flex gap-2">
								<p>${(+coinChange.price.toFixed(6)).toLocaleString()}</p>
								<p className={`${isUp ? "text-primary" : "text-red-500"}`}>{isUp && "+"}{change}%</p>
								{!coin.isDex && (
									<img
										className={'h-5 w-20'}
										loading={'lazy'}
										src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coin.id}.svg`}
										style={{
											filter: isUp ? "hue-rotate(85deg) saturate(80%) brightness(0.85)" : "hue-rotate(300deg) saturate(210%) brightness(0.7) contrast(170%)"
										}}
									/>
								)}
							</div>
						</div>

						<div className={'h-full flex justify-center items-center'}>
							<IconAngleDown className={'rotate-180 text-white/50'}/>
						</div>

					</div>
				</Link>
			</div>
		</div>
	);
}

export const generateMetadata = async (props: any) => ({
	title: (await props?.searchParams)?.symbol
})

export default Page;
