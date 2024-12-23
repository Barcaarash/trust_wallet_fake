'use client';


import {useState} from "react";
import {PrismaType} from "@/backend/database";
import {searchForCustomTokenInMarketCap} from "@/app/addCoin/actions";
import {convertCustomTokenSearchDataToCustomToken} from "@/app/addCoin/noside";
import {prismaQuery} from "@/backend/dbActions";
import {useRouter} from "next/navigation";
import {refreshSupportedCoins} from "@/backend/cryptoList";

function SearchCustomToken(props: any) {
	const [results, setResults] = useState<PrismaType<'customToken'>[]>([])
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	return (
		<div className={`${loading && "opacity-50 pointer-events-none"}`}>
			<form action={(form)=>{

				const name = form.get('name')+"";

				searchForCustomTokenInMarketCap(name)
					.then(convertCustomTokenSearchDataToCustomToken)
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
				{results.map((o,i)=>(
					<button key={i} className={'truncate bg-glass'} onClick={()=>{
						setLoading(true);
						prismaQuery("customToken",'create',{
							data: {
								...o,
								extra: JSON.stringify(o.extra)
							}
						}).finally(()=>{
							router.refresh();
							refreshSupportedCoins().catch(console.error)
								.finally(()=>setLoading(false))
						});
					}}>
						{o.name}({o.symbol}) ${(+(o.extra?.priceUsd || "0")).toFixed(5)} <pre className={'text-red-400'}>{o.extra?.baseToken.address}</pre>
					</button>
				))}
			</div>
		</div>
	);
}



export default SearchCustomToken;
