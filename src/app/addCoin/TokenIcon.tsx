'use client';

import {PrismaType} from "@/backend/database";
import {useRef} from "react";
import {useRouter} from "next/navigation";
import {prismaQuery} from "@/backend/dbActions";
import {refreshSupportedCoins} from "@/backend/cryptoList";

function TokenIcon({token,table = 'coin'}: {
	token: PrismaType<'customToken'> | PrismaType<'coin'>,
	table?: "coin" | "customToken"
}) {
	const file = useRef<any | undefined>(undefined);
	const form = useRef<any | undefined>(undefined);
	const router = useRouter();

	return (
		<>
			<img src={token.image || "/icons/coins.png"} onClick={()=>{
				file?.current?.click();
			}} className={'w-10 h-10 rounded-full'} alt={token.name} />
			<form ref={form}  action={async (e)=>{
				if (!(e.get('file') as File)?.name) return;
				e.set('path', `/${token.symbol}-${Date.now()}.$EX`);
				if (token.image?.startsWith("/api")) e.set("previousPath", token.image);
				const path = await fetch("/api/upload", {
					body: e,
					method: "POST"
				}).then(e=>e.json()).then(e=>e.path+"");

				prismaQuery(table,'update', {
					where: {
						id: token.id
					},
					data: {
						image: path
					}
				})
					.catch(()=>alert("Fail to update image"))
					.finally(()=>{
						router.refresh();
						refreshSupportedCoins().catch(console.error);
					})
			}}>
				<input key={Math.random()} ref={file} onChange={()=>form?.current?.requestSubmit?.()} type={'file'} name={'file'} hidden />
			</form>
		</>
	);
}

export default TokenIcon;
