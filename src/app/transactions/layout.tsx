import {AppHeaders} from "@/vars";

function Layout(props: any) {
	return (
		<html lang="en" data-theme="dark">
		<head>
			{AppHeaders}
		</head>
		<body>
		{props.children}
		</body>
		</html>
	);
}

export default Layout;
