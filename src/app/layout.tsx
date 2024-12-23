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
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
			<meta name="viewport"
				 content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"/>
			<meta name="apple-mobile-web-app-capable" content="BingX, by iTzUnity"/>
			<meta name="format-detection" content="telephone=yes"/>
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
			<meta name="apple-mobile-web-app-capable" content="trust wallet"/>
			<meta name="apple-mobile-web-app-status-bar-style" content="#1b1b1b"/>
			<meta name="theme-color" content="#1b1b1b"/>
			<meta name="description"
				 content="Crypto Trading Made Easy. Buy and sell with BingX, a secure platform that makes it easy to trade and store cryptocurrency."/>
			<meta name="keywords" content="Ethereum Perpetual Futures, Safe Trading, Digital Assets"/>
			<meta name="apple-mobile-web-app-capable" content="yes"/>
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
