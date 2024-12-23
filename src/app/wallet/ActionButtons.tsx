import {ArrowDown, ArrowUp} from "lucide-react";
import {IconBuy, IconHistory, IconSell, IconSwap} from "@/app/icons";
import React from "react";
import Link from "next/link";

function ActionButtons(props: {
	single?: boolean,
	symbol?: string
}) {
	return (
		<div className="grid grid-cols-5 gap-4 mb-6">
			{[
				{icon: <ArrowUp/>, label: 'Send', href: "/wallet/send"},
				{icon: <ArrowDown/>, label: 'Receive', href: "/wallet/receive"},
				...(props.single ? [{
					icon: <IconSwap/>, label: 'Swap'
				}]:[]),
				{icon: <IconBuy/>, label: 'Buy'},
				{icon: <IconSell className={'p-0.5'}/>, label: 'Sell'},
				...(!props.single ? [
					{icon: <IconHistory/>, label: 'History'}
				]:[])
			].map((action, index) => (
				<Link key={index} href={(action?.href || "#")+`?symbol=${props.symbol || "TRX"}`} className="flex flex-col items-center gap-2">
					<div className="bg-glass p-3 rounded-full">
						<div className="text-white w-6 h-6">{action.icon}</div>
					</div>
					<span className="text-sm">{action.label}</span>
				</Link>
			))}
		</div>
	);
}

export default ActionButtons;
