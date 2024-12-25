import {appHeaders} from "@/vars";

function Layout(props: any) {
	return (
		<html lang="en" data-theme="dark">
		<head>
			{appHeaders}
		</head>
		<body>
		{props.children}
		</body>
		</html>
	);
}

export default Layout;
