import SearchCustomToken from "@/app/addCoin/SearchCustomToken";
import {revalidatePath} from "next/cache";
import TokenIcon from "./TokenIcon";
import {refreshSupportedCoins} from "@/backend/cryptoList";
import SearchStableCoin from "@/app/addCoin/SearchStableCoin";
import CoinManager from "@/app/addCoin/CoinManager";
import {restartMarketCapWs} from "@/app/addCoin/actions";
import {ssr} from "@/utils/ssr";


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
					<div className="flex flex-col gap-5 w-full">
						{tokens.map((token, i) => (
							<CoinManager key={i} coin={ssr(token)} table={"customToken"} />
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
						<CoinManager key={i} coin={ssr(coin)} table={'coin'} />
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
								<input name={'value'} defaultValue={balances[coin.symbol] || 0} />
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
