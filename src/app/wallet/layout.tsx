import {getCurrentWalletInfo} from "@/utils/ssr";
import {redirect} from "next/navigation";
import {Settings} from "lucide-react";
import React from "react";
import PageTitle from "@/utils/page";
import {IconCoins, IconSettings} from "@/app/icons";
import Link from "next/link";
import {AppHeaders} from "@/vars";


async function Layout(props: any) {
	const info = await getCurrentWalletInfo();
	if (!info) {
		redirect("/import");
		return;
	}


	return (
		<html lang="en" data-theme="dark">
		<head>
			{AppHeaders}
		</head>
		<body>


			{props.children}
		</body>
		</html>
	);
}

export default Layout;
