

import {SupportedCoins} from "@/vars";
import {getCurrentWalletInfo} from "@/utils/ssr";
import ActionButtons from "@/app/wallet/ActionButtons";
import Transactions from "@/app/wallet/coin/Transactions";
import {getBalanceOf} from "@/utils/shortHand";
import {CoinImage} from "@/app/wallet/coin/CoinPart";


async function Page(props: any) {
	const symbol = (await props.searchParams).symbol || "TRX";
	const coin = SupportedCoins.find(s=>s.symbol === symbol) || undefined;
	const coinChange = global.LMCData[(coin?.id || -1)];
	const info = await getCurrentWalletInfo();
	if (!coin || !info || !coinChange) return <div>token not found</div>;

	const balance = await getBalanceOf(coin);
	const change = +coinChange.percentChange24h.toFixed(2);
	const isUp = change > 0;

	return (
		<div>
			<div className={'flex flex-col items-center justify-center gap-5 '}>
				<CoinImage coin={coin} className={'w-[70px] h-[70px]'} />
				<div>
					<h3 className={"text-2xl font-bold tracking-wide"}>{balance} {coin.symbol}</h3>
					<p className={'opacity-50 text-xs tracking-widest text-center'}>${(+(balance * coinChange.price).toFixed(coinChange?.price < 1 ? 6:2)).toLocaleString()}</p>
				</div>
			</div>
			<br/>
			<ActionButtons single symbol={coin.symbol}/>
			<hr/>
			<Transactions init={info}/>
			<div className={'fixed bottom-0 flex gap-2 left-0 w-full h-[50px] border-t border-glass p-2 text-xs z-10 bg-background'}>
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

			</div>
		</div>
	);
}

export const generateMetadata = async (props: any) => ({
	title: (await props?.searchParams)?.symbol
})

export default Page;
