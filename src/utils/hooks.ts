import {useEffect, useRef, useState} from "react";


export function useChanges(init: typeof global.LMCData) {
	const [changes, setChanges] = useState(init || {});
	const lmcState = useRef<boolean | string>(false);
	const lmcSignal = useRef(new AbortController());
	async function getLMCData(_try = 0) {
		if (lmcState.current || _try > 10) return;
		if (typeof lmcState.current === 'string' && lmcState.current === "stop") {
			console.warn("LMC Loop Stopped");
			return;
		}
		lmcState.current ||= "init";

		try {
			const res = await fetch("/api/LMCData", {
				signal: lmcSignal.current.signal
			});
			lmcState.current = true;
			const reader = res.body!.getReader();
			const decoder = new TextDecoder();
			do {
				const {value,done} = await reader.read();

				const text = decoder.decode(value);
				for (let string of text.split("\n").filter(o=>!!o.trim())) {
					try {
						const data = JSON.parse(string);
						setChanges(data);
					} catch {/*IGNORE ERROR*/}
				}
				_try = 0;
				if (done) break;
			} while (true);
		} catch(e) {
			console.error("LMCError",e)
		}
		lmcState.current = false;
		getLMCData(_try + 1).catch(console.error);
	}

	useEffect(()=> {
		getLMCData().catch(console.error);
		return ()=>{
			if (!lmcState.current || lmcState.current === 'init') return;
			lmcSignal.current?.abort("Page Changes");
			lmcState.current = "stop";
		}
	}, []);

	return changes;
}
