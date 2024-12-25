'use client';

import React, {useEffect, useMemo, useState} from 'react';
import {ArrowDown, ArrowUp, Bell, ChevronDown, Search, Settings} from 'lucide-react';
import {
	IconArrowDown,
	IconBell,
	IconBuy, IconCopy,
	IconDiscover,
	IconEarn,
	IconEye,
	IconEyeX,
	IconHistory,
	IconHome, IconQRCode, IconSearch,
	IconSell,
	IconSwap
} from "@/app/icons";
import {handleSecretValues} from "@/utils/dom";
import {ApiRoutes, SupportedCoins} from "@/vars";
import {useChanges} from "@/utils/hooks";
import ActionButtons from "@/app/wallet/ActionButtons";
import BottomNavigation from "@/app/wallet/BottomNavigation";
import Link from "next/link";
import {getBalanceOf} from "@/utils/shortHand";
import {CoinImage} from "@/app/wallet/coin/CoinPart";


const CryptoWallet = ({balances = {},SupportedCoins,...props}: {
	LMCData: typeof global.LMCData,
	walletInfo: typeof ApiRoutes['GET:/wallet/info/']['json'],
	SupportedCoins: typeof global.SupportedCoins,
	balances: Record<string, number>
}) => {
	const changes = useChanges(props.LMCData);
	const [visible, setVisible] = useState(true);
	const [walletName, setWalletName] = useState('Main Wallet');
	const tabs = useMemo(() => ['Crypto', "NFTs"] as const, []);
	const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Crypto");
	const totalBalance = useMemo(()=>{
		return (+(Object.entries(balances).reduce((t,[key,value]) => {
			const coin = SupportedCoins.find(o=>o.symbol.toLowerCase()+"" === (key+"").toLowerCase());
			const price = changes[coin?.id || -1]?.price || 0;
			return t + ((+(value+"") || 0) * price);
		},0).toFixed(2))).toLocaleString()
	},[changes,balances]);

	useEffect(() => {
		handleSecretValues(visible);
	}, [visible]);

	useEffect(() => {
		setWalletName(window.localStorage.getItem("walletName") || walletName);
	}, []);


	return (
		<>
			{/* Search Bar */}
			<div className="relative mb-3">
				<IconSearch className="absolute left-3 top-1.5  w-5 h-5  z-10"/>
				<input
					type="text"
					placeholder="Search"
					className="w-full bg-glass rounded-full py-1 pl-10 pr-4 text-gray-400 opacity-70 outline-0"
				/>
			</div>

			{/* Balance Section */}
			<div className={'flex justify-between items-start gap-0'}>
				<div className="">
					<div className="flex items-center gap-2 mb-2">
						<span className="text-gray-400" onClick={() => setVisible(o => !o)}>
							{visible ? <IconEye/> : <IconEyeX/>}
						</span>
						<div className="flex items-center">
							<span>{walletName}</span>
							<div className={'mb-0.5'}>
								<IconArrowDown/>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-2 text-3xl font-bold mb-6">
						<span x-secret="">${totalBalance}</span>
					</div>
				</div>
				<div className="flex items-start justify-start gap-5 flex-row-reverse">
					<button className="bg-transparent text-backgroundPrimary p-0">
						<div className="rounded bg-glass p-1">
							<IconBell/>
						</div>
					</button>


					<button
						className="bg-transparent text-backgroundPrimary p-0">
						<div className="rounded bg-glass p-1">
							<IconQRCode width="20" height="20"/>
						</div>
					</button>


					<button className={'p-0'}>
						<div className="rounded p-1 bg-glass">
							<IconCopy width="20" height="20" className="text-iconNormal"/>
						</div>
					</button>

				</div>
			</div>

			{/* Action Buttons */}
			<ActionButtons/>

			{/*<div className="bg-glass rounded-xl p-4 mb-6 flex items-center justify-between">*/}
			{/*	<div className="flex items-center gap-4">*/}
			{/*		<div className="text-3xl">🎨</div>*/}
			{/*		<div>*/}
			{/*			<div className="mb-1">Back up to secure your assets</div>*/}
			{/*			<div className="text-green-400">Back up wallet →</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</div>*/}

			{/* Tab Navigation */}
			<div className="grid grid-cols-2 mb-6 w-full gap-5 sticky top-10 py-2 !pt-0 bg-background z-10">
				{tabs.map((n, i) => (
					<div key={i}
						className={`pb-2 relative cursor-pointer w-full text-center ${activeTab !== n && "opacity-50"}`}
						onClick={() => setActiveTab(n)}>
						{activeTab === n && (
							<div className={'absolute bottom-0 left-0 right-0 mx-auto bg-primary h-0.5 w-[13%]'}>
							</div>
						)}
						{n}
					</div>
				))}
			</div>

			{/* Crypto List */}
			<div className="space-y-4">
				{SupportedCoins.map((crypto, index) => {
					const change = changes?.[crypto.id] || {};
					const priceChange = change?.percentChange24h || 0
					const isUp = priceChange >= 0;
					const network = crypto?.network ? SupportedCoins.find(o => o.id === crypto.network) : undefined;
					const balance = balances[crypto.symbol] || 0;

					return (
						<Link
							href={`/wallet/coin?symbol=${crypto?.symbol}`}
							key={index + (change + "")}
							className="flex justify-between items-center"
						>

							<div className="flex items-center gap-3">
								<CoinImage coin={crypto}/>
								<div className={'flex flex-col gap-1'}>
									<div className={'flex gap-2'}>
										<div className="text-sm">{crypto.symbol}</div>
										<div className="text-[10px] text-iconNormal bg-glass p-1 rounded py-0.5 tracking-wide font-bold">{network?.name || crypto.name}</div>
									</div>
									<div className={'text-[12px] font-normal tracking-wide  flex gap-1 items-center'}>
										<p className={'text-iconNormal'}>${(+(change?.price?.toFixed(change.price < 1 ? 6:2) || "0.0")).toLocaleString()}</p>
										<p className={isUp ? 'text-emerald-500' : 'text-red-500'}>{isUp ? "+" : ""}{priceChange?.toFixed(2)}%</p>
									</div>
								</div>
							</div>
							<div className="text-right">
								<div x-secret="">{(+balance.toFixed(2)).toLocaleString()}</div>
								<div className="text-sm text-gray-400"
									x-secret="">${(+((balance * change.price).toFixed(2))).toLocaleString()}</div>
							</div>
						</Link>
					);
				})}
				<p className={'text-center text-primary py-4'}>Manage crypto</p>
			</div>

			<BottomNavigation/>
		</>
	);
};

export default CryptoWallet;
