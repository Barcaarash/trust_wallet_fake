import {addCryptoChangeEvent, removeCryptoChangeEvent} from "@/crypto";

export function GET() {
	let id: string | undefined;
	return new Response(new ReadableStream({
		start(c) {
			const e = new TextEncoder();
			id = addCryptoChangeEvent((data) => {
				c.enqueue(
					e.encode(JSON.stringify(data)+"\n")
				);
			});
		},
		cancel() {
			if (id) removeCryptoChangeEvent(id);
			else console.log("UNKNOWN CLOSED")
		}
	}));
}
