'use server';

type PRISMA = typeof prisma
type KEYS = keyof PRISMA;
type OBJECTS = PRISMA[KEYS];

export async function prismaQuery<K extends KEYS,M extends keyof PRISMA[K]>(
	table: K,
	method: M,
	//@ts-ignore
	args: Parameters<PRISMA[K][M]>[0]
	//@ts-ignore
): Promise<ReturnType<PRISMA[K][M]>> {
	//@ts-ignore
	return await prisma[table][method](args);
}
