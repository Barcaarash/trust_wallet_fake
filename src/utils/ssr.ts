import {ApiRoutes} from "@/vars";

export async function getCurrentWalletInfo() {
	return ApiRoutes['GET:/wallet/info/'].json;
}
