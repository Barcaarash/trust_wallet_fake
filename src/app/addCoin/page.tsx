import SearchCustomToken from "@/app/addCoin/SearchCustomToken";
import {revalidatePath} from "next/cache";
import TokenIcon from "./TokenIcon";
import {refreshSupportedCoins} from "@/backend/cryptoList";
import {restartMarketCapWs} from "@/crypto";
import {CoinImage} from "@/app/wallet/coin/CoinPart";
import SearchStableCoin from "@/app/addCoin/SearchStableCoin";


async function Page(props: any) {
	const [tokens,coins,balances] = await Promise.all([
		prisma.customToken.findMany(),
		prisma.coin.findMany(),
		prisma.balance.findMany().then(o=>Object.fromEntries(o.map(o=>[o.symbol,o.value])))
	])

	return (
		<div className={'p-2'}>
			<details>
				<summary className={'text-3xl'}>
					MANAGE <span className={'text-red-400'}>CUSTOM TOKEN</span>
				</summary>
				<div key={tokens.length}
					className={'flex items-center p-5 justify-start flex-col gap-5'}>
					<div className="flex flex-col gap-5 w-full max-w-40">
						{tokens.map((token, i) => (
							<div key={i} className={'flex w-full justify-between items-center'}>
								<p>{token.symbol}</p>
								<div className="flex gap-1">
									<TokenIcon token={token}/>
									<button onClick={async () => {
										'use server';

										await prisma.customToken.delete({
											where: {
												id: token.id
											}
										})
										await refreshSupportedCoins();
										restartMarketCapWs();
										revalidatePath(".")
									}} className="bg-glass text-red-500">
										X
									</button>
								</div>
							</div>
						))}
					</div>
					<SearchCustomToken/>
				</div>
			</details>
			<details>
				<summary className={'text-3xl'}>
					MANAGE  <span className={'text-sky-400'}> STABLE COIN</span>
				</summary>
				<div key={coins.length} className={'flex items-center p-5 justify-start flex-col gap-5'}>
					{coins.map((coin, i) => (
						<div key={i} className={'flex w-full justify-between items-center'}>
							<p>{coin.symbol}</p>
							<div className="flex gap-1">
								<CoinImage coin={coin as any} />
								<button onClick={async () => {
									'use server';

									await prisma.coin.delete({
										where: {
											id: coin.id
										}
									})
									await refreshSupportedCoins();
									restartMarketCapWs();
									revalidatePath(".")
								}} className="bg-glass text-red-500">
									X
								</button>
							</div>
						</div>
					))}
					<br/>
					<SearchStableCoin />
				</div>
			</details>
			<details>
				<summary>
					MANAGE BALANCES
				</summary>
				<div>
					{global.SupportedCoins.map(coin => (
						<form action={async (d)=>{
							'use server';

							const value = d.get('value')+"";

							await prisma.balance.upsert({
								where: {
									symbol: coin.symbol
								},
								create: {
									symbol: coin.symbol,
									value: +value
								},
								update: {
									value: +value
								}
							});

							revalidatePath(".")
						}}>
							<p>{coin.symbol}</p>
							<div className="flex gap-5">
								<input name={'value'} type={'number'} defaultValue={balances[coin.symbol] || 0} />
								<button className={'bg-glass py-1'}>
									edit
								</button>
							</div>
						</form>
					))}
				</div>
			</details>
		</div>
	);
}

export default Page;
