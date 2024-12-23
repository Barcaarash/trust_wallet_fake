'use client'

import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";

function PageTitle(props: {
	default: string
}) {
	const [title, setTitle] = useState(props.default);
	const path = usePathname();

	useEffect(() => {
		setTitle(document.title || props.default);
	}, typeof window !== 'undefined' ? [window.document.title, path]:[path]);

	return title;
}

export default PageTitle;
