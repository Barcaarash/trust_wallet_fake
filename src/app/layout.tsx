import type {Metadata} from "next";
import "./globals.css";
import {initMarketCapWebsocket} from "@/crypto";
import {initDB} from "@/backend/database";
import {appHeaders} from "@/vars";

export const metadata: Metadata = {
	title: "Home"
};

export default function RootLayout({
								children,
							}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="dark">
		<head>
			{appHeaders}
		</head>
		<body>
		{children}
		</body>
		</html>
	);
}

declare global {
	var wsInit: boolean
}

if (!global.wsInit) {
	initDB();
	initMarketCapWebsocket().catch(console.error);
	global.wsInit = true;
}


export const dynamic = "force-dynamic"
