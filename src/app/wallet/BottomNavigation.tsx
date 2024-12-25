'use client';

import {IconDiscover, IconEarn, IconHome, IconSwap} from "@/app/icons";
import {usePathname} from "next/navigation";
import Link from "next/link";

function BottomNavigation() {
	const path = usePathname();

	return (
		<div className={'my-20'}>
			<div className="fixed bottom-0 left-0 right-0 bg-background border-t border-white/10 p-4 !pb-10">
				<div className="grid grid-cols-4 gap-4">
					{[
						{icon: <IconHome className="w-6 h-6"/>, label: 'Home', href: "/wallet"},
						{icon: <IconSwap className="w-6 h-6"/>, label: 'Swap'},
						{icon: <IconEarn className="w-6 h-6"/>, label: 'Earn'},
						{icon: <IconDiscover className="w-6 h-6"/>, label: 'Discover'}
					].map((item, index) => {
						item.href ||= "/intro/soon"
						const active = path.startsWith(item.href);

						return (
							<Link key={index} href={item.href}>
								<div className={`flex flex-col items-center gap-1 ${active ? 'text-green-400' : 'text-gray-400'}`}>
									{item.icon}
									<span className="text-xs">{item.label}</span>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default BottomNavigation;
