import {PrismaClient} from "@prisma/client";
import {searchForCustomTokenInMarketCap, searchForStableCoinInMarketCap} from "@/app/addCoin/actions";
import {updateCustomTokens} from "@/crypto";


declare global {
	var __instance: PrismaClient;
	var prisma: typeof _prisma;
}

const instance = global.__instance ?? new PrismaClient();
global.__instance ??= instance;

type CustomTokenExtraType = Awaited<ReturnType<typeof searchForCustomTokenInMarketCap>>[number] | undefined | null;
type StableCoinExtraType = Awaited<ReturnType<typeof searchForStableCoinInMarketCap>>[number] | undefined | null;


const _prisma = instance.$extends({
	result: {
		customToken: {
			extra: {
				needs: {
					extra: true
				},
				compute(params) {
					try {
						return JSON.parse( params.extra) as CustomTokenExtraType;
					} catch {
						return {} as CustomTokenExtraType;
					}
				}
			}
		},
		coin: {
			image: {
				needs: {
					id: true,
					image: true
				},
				compute({id,image}) {
					return image || `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`
				}
			},
			extra: {
				needs: {
					extra: true
				},
				compute(params) {
					try {
						return JSON.parse( params.extra) as StableCoinExtraType;
					} catch {
						return {} as StableCoinExtraType;
					}
				}
			}
		}
	},
	query: {
		customToken: {
			create: async (o) => {
				const token = await o.query(o.args)
				if (token) updateCustomTokens().catch(console.error);
				return token;
			}
		}
	}
})
global.prisma = _prisma;

// Just for import
export const initDB = () => true;


export type PrismaType<T extends keyof typeof _prisma> =
	Awaited<
		ReturnType<
			//@ts-ignore
			(typeof _prisma)[T]['create']
		>
	>
