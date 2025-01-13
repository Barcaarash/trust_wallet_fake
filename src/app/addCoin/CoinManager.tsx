'use client'

import {CoinImage} from "@/app/wallet/coin/CoinPart";
import {refreshSupportedCoins} from "@/backend/cryptoList";
import {PrismaType} from "@/backend/database";
import TokenIcon from "@/app/addCoin/TokenIcon";
import {useRouter} from "next/navigation";
import {prismaQuery} from "@/backend/dbActions";
import {restartMarketCapWs} from "@/app/addCoin/actions";

function CoinManager({coin,isCoin}: {
	coin: PrismaType<'coin'> | PrismaType<'customToken'>,
	isCoin: boolean
}) {

	const table = isCoin ? "coin" : "customToken";
	const router = useRouter();

	function reload() {
		Promise.allSettled([
			restartMarketCapWs(),
			refreshSupportedCoins()
		]).finally(() => router.refresh());
	}

	function prop(key: keyof typeof coin) {
		return <p onClick={() => {
			const value = window.prompt(`Enter new ${key}:`, coin[key] + "");
			if (value) {
				prismaQuery(table, 'update', {
					where: {
						id: coin.id
					},
					data: {
						[key]: value
					}
				}).finally(reload)
			}
		}} className={'truncate'}>{coin[key] + ""}</p>
	}

	return (
		<div className={'flex w-full justify-between items-center'}>
			<div className={'max-w-[50%]'}>
				<div className={'truncate'}>
					{prop("symbol")}
					{prop("name")}
				</div>
			</div>
			<div className="flex gap-2 flex-grow justify-end">
				<TokenIcon token={coin}/>

				<button onClick={async () => {
					const value = window.prompt(`Enter coin network:\nENTER EXACT SYMBOL which is should exists in this list\nfor remove network just type null\nExample: TRX`);
					if (value) {
						const network = await prismaQuery(table, 'findFirst', {
							where: {
								symbol: value
							}
						});
						if (!network && value !== 'null') {
							alert("NETWORK NOT FOUND!");
							return;
						}

						prismaQuery(table, "update", {
							where: {
								id: coin.id
							},
							data: {
								networkId: value === 'null' ? null:network?.id
							}
						}).finally(reload).catch(()=>alert("ERROR"))
					}
				}} className={'text-xs p-0.5 !px-3 bg-glass'}>
					NTK
				</button>

				<button onClick={async () => {
					prismaQuery(table, "delete", {
						where: {
							id: coin.id
						}
					}).finally(reload)
				}} className="bg-glass text-red-500 p-0.5 !px-3">
					X
				</button>
			</div>
		</div>
	);
}

export default CoinManager;
