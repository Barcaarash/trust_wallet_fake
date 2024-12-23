'use client';


export function handleSecretValues(visible: boolean) {
	const elements = Array.from(document.querySelectorAll("[x-secret]"));

	for (let element of elements) {
		const xValue = element.getAttribute("x-secret");
		if ('innerText' in element) {
			const currentValue = element.innerText;
			element.innerText = visible ? xValue || currentValue:"***";
			if (!visible) element.setAttribute("x-secret", currentValue+"");
		}
	}
}
