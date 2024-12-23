import {getCurrentWalletInfo} from "@/utils/ssr";
import {redirect} from "next/navigation";
import {Settings} from "lucide-react";
import React from "react";
import PageTitle from "@/utils/page";
import {IconBell, IconCoins} from "@/app/icons";
import Link from "next/link";


async function Layout(props: any) {
	const info = await getCurrentWalletInfo();
	if (!info) {
		redirect("/import");
		return;
	}


	return (
		<div className="bg-background min-h-screen text-white p-4" data-theme="dark">
			{/* Header */}
			<div className="flex justify-between items-center mb-6">
				<Settings className="text-gray-400 w-6 h-6"/>
				<h1 className="text-xl font-semibold"><PageTitle default={'HOME'} /></h1>
				<Link href={'/addCoin'}>
					<IconCoins className="text-gray-400 w-6 h-6"/>
				</Link>
			</div>

			{props.children}
		</div>
	);
}

export default Layout;
