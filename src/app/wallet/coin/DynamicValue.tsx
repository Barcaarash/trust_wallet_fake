'use client'


import {useState} from "react";

function DynamicValue({tag = 'span',...props}: {
	default: string,
	localKey: string,
	tag?: string
}) {
	const [value, setValue] = useState((typeof window !== 'undefined' ? window.localStorage.getItem(props.localKey):undefined) || props.default);
	const Tag = tag as unknown as "div";

	return (
		<Tag onClick={()=>{
			const newV = window.prompt("Enter new value");
			if (newV) {
				setValue(newV);
				window.localStorage.setItem(props.localKey,newV);
			}
		}}>
			<>{value}</>
		</Tag>
	);
}

export default DynamicValue;
