import type {Metadata} from "next";
import "./globals.css";
import {initMarketCapWebsocket} from "@/crypto";
import {initDB} from "@/backend/database";
import {AppHeaders} from "@/vars";
import {FormatDetectionMeta} from "next/dist/lib/metadata/generate/basic";


export default function RootLayout({
								children,
							}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="dark">
		<head>
			{AppHeaders}
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

export const metadata = {
	title: "Home"
}

export const dynamic = "force-dynamic"
