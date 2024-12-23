import type {Metadata} from "next";
import "./globals.css";
import {initMarketCapWebsocket} from "@/crypto";
import {initDB} from "@/backend/database";

export const metadata: Metadata = {
	title: "HOME"
};

export default function RootLayout({
								children,
							}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="dark">
		<head>
			<link rel='stylesheet' href='/copied.css'/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
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
