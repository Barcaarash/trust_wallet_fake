import {ApiRoutes} from "@/vars";

export async function getCurrentWalletInfo() {
	return ApiRoutes['GET:/wallet/info/'].json;
}

export function ssr<T>(o: T) {
	try {
		return JSON.parse(JSON.stringify(o));
	} catch {
		return o;
	}
}
