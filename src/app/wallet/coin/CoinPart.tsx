import React, {ComponentProps} from "react";
import {SupportedCoins} from "@/vars";
import {PrismaType} from "@/backend/database";

export function CoinImage(props: ComponentProps<'img'> & {
	coin: typeof SupportedCoins[number] | PrismaType<'coin'>
}) {
	const {coin, ...imgProps} = props;
	const network = 'network' in coin && coin?.network ? SupportedCoins.find(o=>o.id===coin.network):undefined;

	return (
		<div key={coin.symbol} className={'relative'}>
			<img loading={'lazy'}
				{...imgProps}
				alt={coin.symbol}
				src={'image' in coin ? coin.image:coin.icon}
				className={`w-[40px] h-[40px] rounded-full  object-cover ${props.className}`}
			/>
			{network && (
				<img
					src={network.icon}
					alt={network.name}
					className={'absolute -right-2 bottom-0.5  object-cover rounded-full w-[45%]'}
				/>
			)}
		</div>
	);
}
