import {ApiRoutes, BACKEND_URL} from "@/vars";

export async function apiFetchNoSide<T extends keyof typeof ApiRoutes>(routeKey: T, body: typeof ApiRoutes[T]['body'] = undefined, auth: string | undefined) {
	const route = ApiRoutes[routeKey];
	const [method,path] = routeKey.split(":");

	const requestUrl = new URL(BACKEND_URL);
	requestUrl.pathname = path;


	return {
		ok: true,
		message: "",
		json: route.json
	};
}
