'use client';

import {useState} from "react";
import {PrismaType} from "@/backend/database";
import {useRouter} from "next/navigation";
import {searchForStableCoinInMarketCap} from "@/app/addCoin/actions";
import {convertStableCoinSearchToStableCoin} from "@/app/addCoin/noside";
import {refreshSupportedCoins} from "@/backend/cryptoList";
import {prismaQuery} from "@/backend/dbActions";
import {CoinImage} from "@/app/wallet/coin/CoinPart";

function SearchStableCoin(props: any) {
	const [results, setResults] = useState<PrismaType<'coin'>[]>([])
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	return (
		<div className={`${loading && "opacity-50 pointer-events-none"}`}>
			<form action={(form)=>{

				const name = form.get('name')+"";

				searchForStableCoinInMarketCap(name)
					.then(convertStableCoinSearchToStableCoin)
					.then(setResults)
					.finally(()=>
						refreshSupportedCoins().catch(console.error)
							.finally(()=>setLoading(false))
					)
			}}>
				<div  className="flex gap-5">
					<input name={'name'} placeholder={'Name of token...'}/>
					<button type={'submit'} onClick={()=>setLoading(true)}>
						Search
					</button>
				</div>
			</form>
			<br/>
			<div className={'flex flex-col gap-5'}>
				{results.map(({image,...o},i)=>(
					<button key={i} className={'truncate bg-glass flex gap-2 items-center justify-between'} onClick={()=>{
						setLoading(true);
						prismaQuery("coin",'create',{
							data: {
								...o,
								extra: JSON.stringify(o.extra)
							}
						}).finally(()=>{
							router.refresh();
							refreshSupportedCoins(true).catch(console.error)
								.finally(()=>setLoading(false))
						});
					}}>
						<CoinImage coin={{...o,image}} />
						{o.name}({o.symbol}) <pre className={'text-red-400'}>{o.extra?.slug}</pre>
					</button>
				))}
			</div>
		</div>
	);
}

export default SearchStableCoin;
