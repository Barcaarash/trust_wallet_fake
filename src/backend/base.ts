'use server';

import {cookies} from "next/headers";
import {ApiRoutes} from "@/vars";
import {apiFetchNoSide} from "@/backend/noSide";

export async function apiFetch<T extends keyof typeof ApiRoutes>(routeKey: T, body: typeof ApiRoutes[T]['body'] = undefined) {
	const route = ApiRoutes[routeKey];

	let auth: string | undefined;
	if (route.auth) {
		auth = (await cookies()).get('token')?.value;
	}

	const res = await apiFetchNoSide(routeKey, body, auth);

	if (res.json && 'access' in res.json) {
		const ex = new Date();
		ex.setDate(ex.getDate() + 1);
		(await cookies()).set("token",res.json.access, {
			expires: ex,
			path: "/"
		})
	}

	return res;
}
