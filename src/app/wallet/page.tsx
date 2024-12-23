import CryptoWallet from "@/app/wallet/CryptoWalletComponent";
import {redirect} from "next/navigation";
import {getCurrentWalletInfo} from "@/utils/ssr";

async function Page(props: any) {
	const info = await getCurrentWalletInfo();
	if (!info) {
		redirect("/import");
		return;
	}


	return (
		<CryptoWallet
			LMCData={global.LMCData}
			SupportedCoins={global.SupportedCoins}
			walletInfo={info}
			balances={Object.fromEntries((await prisma.balance.findMany()).map(o => [o.symbol, o.value]))}
		/>
	);
}

export default Page;
