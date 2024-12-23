import {getCurrentWalletInfo} from "@/utils/ssr";
import {redirect} from "next/navigation";
import {Settings} from "lucide-react";
import React from "react";
import PageTitle from "@/utils/page";
import {IconCoins, IconSettings} from "@/app/icons";
import Link from "next/link";
import {appHeaders} from "@/vars";


async function Layout(props: any) {
	const info = await getCurrentWalletInfo();
	if (!info) {
		redirect("/import");
		return;
	}


	return (
		<html>
		<head>
			{appHeaders}
		</head>
		<body>
		<div className="bg-background min-h-screen text-white p-4 !pt-0" data-theme="dark">
			{/* Header */}
			<div className="flex justify-between items-center mb-6 sticky top-0 bg-background z-10">
				<IconSettings className="text-gray-400 w-6 h-6"/>
				<h1 className="text-xl "><PageTitle default={'Home'}/></h1>
				<Link href={'/addCoin'}>
					<IconCoins className="text-gray-400 w-6 h-6"/>
				</Link>
			</div>

			{props.children}
		</div>
		</body>
		</html>
	);
}

export default Layout;
