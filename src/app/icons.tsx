import {ComponentProps} from "react";

type SVG = ComponentProps<'svg'>

export const IconSwap = (props: SVG) => (
	<svg fill="none" width="20" height="20" viewBox="0 0 17 17"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M2.49984 7.50016L2.49984 5.00016L13.7498 5.00016V2.0835L17.9165 6.25016L13.7498 10.4168V7.50016L2.49984 7.50016ZM17.4998 15.0002V12.5002L5.83317 12.5002L5.83317 9.5835L1.6665 13.7502L5.83317 17.9168L5.83317 15.0002L17.4998 15.0002Z"
			 fill="currentColor">

		</path>
	</svg>
)


export const IconEarn = (props: SVG) => (
	<svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path color={"#778091"} d="M22.668 16H2.66797V22H22.668V16Z" fill="currentColor"></path>
		<path color={"#acb5ba"} fillRule="evenodd" clipRule="evenodd"
			 d="M21.4648 10.7988C21.4648 5.93937 17.5255 2 12.666 2C7.80656 2 3.86719 5.93937 3.86719 10.7988C3.86719 14.1599 5.75169 17.0807 8.52171 18.5625H16.8103C19.5803 17.0807 21.4648 14.1599 21.4648 10.7988ZM8.89509 10.7988L12.666 14.5698L16.4369 10.7988L12.666 7.0279L8.89509 10.7988Z"
			 fill="currentColor"></path>
	</svg>
)

export const IconDiscover = (props: SVG) => (
	<img {...props as any} src={'/icons/discover.png'} alt={'Discover'}/>
)


export const IconSell = (props: SVG) => (
	<img {...props as any} src={'/icons/sell.png'} alt={'Sell'}/>
)


export const IconHome = (props: SVG) => (
	<svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path className="text-primary" d="M21 11L20.9999 21H15V13H9V21H3V11L12 2L21 11Z" fill="currentColor"></path>
		<rect color={'#307d59'} width="6" height="8" transform="matrix(1 0 0 -1 9 21)"
			 fill="currentColor"></rect>
	</svg>
)


export const IconHistory = (props: SVG) => (
	<svg fill="none" width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M12.6009 22H4.5V2H14.5L20.5 8V10.6738C19.5908 10.2419 18.5737 10.0002 17.5001 10.0002C13.6341 10.0002 10.5001 13.1343 10.5001 17.0002C10.5001 18.9588 11.3045 20.7295 12.6009 22ZM7.5 6H11.5V8H7.5V6Z"
			 fill="currentColor"></path>
		<path className="text-iconNormal" d="M14.5 2V8H20.5L14.5 2Z" fill="currentColor"></path>
		<path d="M13.8929 11H7.5V13H11.755C12.3182 12.1926 13.0474 11.5094 13.8929 11Z"
			 fill="currentColor"></path>
		<path
			d="M10.571 16C10.5243 16.3267 10.5001 16.6606 10.5001 17.0002C10.5001 17.3397 10.5243 17.6735 10.571 18H7.5V16H10.571Z"
			fill="currentColor"></path>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M22.5 17C22.5 14.2386 20.2614 12 17.5 12C14.7386 12 12.5 14.2386 12.5 17C12.5 19.7614 14.7386 22 17.5 22C20.2614 22 22.5 19.7614 22.5 17ZM18.25 16.6893V13.5935H16.75V17.3107L18.9819 19.5426L20.0426 18.4819L18.25 16.6893Z"
			 fill="currentColor"></path>
	</svg>
)


export const IconBuy = (props: SVG) => (
	<svg className="text-textPrimary" fill="none" width="20" height="20" viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M21 5H3V8H21V5ZM21 10.5H3V19H21V10.5ZM6 13H11V15.5H6V13ZM15.5 13H13V15.5H15.5V13Z"
			 fill="currentColor"></path>
	</svg>
)


export const IconEyeX = (props: SVG) => (
	<svg className="text-iconNormal" fill="none" width="20" height="20" viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M2.93933 5.06077L18.9393 21.0608L21.0606 18.9395L18.6138 16.4926L23 12L17.4447 6.30998C14.7539 3.55392 10.5671 3.26407 7.56164 5.44044L5.06065 2.93945L2.93933 5.06077ZM9.68714 7.56594C10.3788 7.20443 11.1655 7 12 7C14.7614 7 17 9.23858 17 12C17 12.8345 16.7956 13.6212 16.4341 14.3129L9.68714 7.56594Z"
			 fill="currentColor"></path>
		<path d="M1 12L3.29029 9.65416L13.4882 19.8521C11.0565 20.3404 8.43922 19.6197 6.55528 17.69L1 12Z"
			 fill="currentColor"></path>
	</svg>
)

export const IconEye = (props: SVG) => (
	<svg className="text-iconNormal" fill="none" width="20" height="20" viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
			fill="currentColor"></path>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M6.55528 6.30998L1 12L6.55528 17.69C9.56231 20.77 14.4377 20.77 17.4447 17.69L23 12L17.4447 6.30998C14.4377 3.23001 9.56232 3.23 6.55528 6.30998ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
			 fill="currentColor"></path>
	</svg>
)


export const IconArrowRight = (props: SVG) => (
	<svg className="text-iconNormal" fill="none" width="24" height="24"
		viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M21 11.9988L13.9289 4.92773L12.1612 6.6955L16.2157 10.75L2.99903 10.75L2.99903 13.25L16.2145 13.25L12.1612 17.3033L13.9289 19.0711L21 12L20.9994 11.9994L21 11.9988Z"
			 fill="currentColor"></path>
	</svg>
)

export const IconArrowDown = (props: SVG) => (
	<svg className="text-iconNormal" fill="none" width="19" height="19"
		viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path d="M16.5 8.49023V10.7402L12 15.5102L7.5 10.7402V8.49023H16.5Z" fill="currentColor"></path>
	</svg>
)

export const IconTrustWallet = (props: SVG) => (
	<svg fill="none" width="62" height="87" viewBox="0 0 62 87" xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_26161_83707)">
			<path
				d="M-0.00195312 26.9479L30.5756 16.9648V86.0759C8.73428 76.8606 -0.00195312 59.1989 -0.00195312 49.2159V26.9465V26.9479Z"
				fill="#48FF91"></path>
			<path
				d="M61.1556 26.9479L30.5781 16.9648V86.0759C52.4194 76.8606 61.1556 59.1989 61.1556 49.2172V26.9479Z"
				fill="url(#paint0_linear_26161_83707)"></path>
		</g>
		<defs>
			<linearGradient id="paint0_linear_26161_83707" x1="29.1518" y1="94.7238" x2="54.3898"
						 y2="3.84876" gradientUnits="userSpaceOnUse">
				<stop offset="0.26" stopColor="#48FF91"></stop>
				<stop offset="0.66" stopColor="#0094FF"></stop>
				<stop offset="0.8" stopColor="#0038FF"></stop>
				<stop offset="0.89" stopColor="#0500FF"></stop>
			</linearGradient>
			<clipPath id="clip0_26161_83707">
				<rect width="61.1691" height="86.0768" fill="white"></rect>
			</clipPath>
		</defs>
	</svg>
)

export const IconIn = (props: SVG) => (
	<svg className="text-iconNormal" fill="none" width="20" height="20"
		viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M9.99803 17.4993L4.10547 11.6067L5.57861 10.1336L8.95736 13.5123L8.95736 2.49845L11.0407 2.49845L11.0407 13.5113L14.4184 10.1336L15.8916 11.6067L9.99902 17.4993L9.99852 17.4988L9.99803 17.4993Z"
			 fill="currentColor"></path>
	</svg>
)


export const IconCopy = (props: SVG) => (
	<svg fill="none" width="25" height="25" viewBox="0 0 25 25"
		xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M9.45557 3.89441H20.4556V16.8944H17.4556V6.89441H9.45557V3.89441ZM4.45557 8.89441V21.8944H15.4556V8.91477L4.45557 8.89441Z"
			 fill="currentColor"></path>
	</svg>
)

export const IconNoTransactions = (props: SVG) => (
	<svg width="160" height="160" viewBox="0 0 160 160" fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<g clipPath="url(#clip0_278_20219)">
			<path
				d="M93.2076 53.0217L88.2721 64.4405C87.1306 67.0813 89.0668 70.0275 91.9437 70.0275L120.65 70.0275C124.147 70.0275 126.47 73.6464 125.015 76.8257L107.925 114.153"
				stroke="#48FF91" strokeWidth="0.4" strokeDasharray="2.23 2.23"></path>
			<path
				d="M89.2353 78.9805L53.0853 11.0792C52.1723 9.36926 51.0196 8.51617 49.8879 8.51925C47.9484 8.52452 46.8502 9.91609 45.6979 11.9072L17.643 73.4087L54.6468 144.479L89.239 78.9768L89.2353 78.9805Z"
				fill="#1B1B1C" stroke="#48FF91" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<mask id="mask0_278_20219" maskUnits="userSpaceOnUse" x="17" y="8" width="73"
				 height="137">
				<path
					d="M89.2334 78.9786L53.0833 11.0773C52.1703 9.36731 51.0177 8.51422 49.886 8.51729C47.9464 8.52257 46.8483 9.91414 45.6959 11.9052L17.6411 73.4067L54.6448 144.477L89.2371 78.9748L89.2334 78.9786Z"
					fill="#1B1B1C" stroke="#48FF91" strokeWidth="0.4"
					strokeLinecap="round" strokeLinejoin="round"></path>
			</mask>
			<g mask="url(#mask0_278_20219)">
				<path d="M20.6006 91.2384L59.6084 5.92188" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M30.4209 95.7267L69.4287 10.4102" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M40.2412 100.215L79.249 14.8984" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M50.0615 104.705L89.0693 19.3887" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M59.8808 109.194L98.8887 23.877" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M86.501 93.2282L42.042 10.6211" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M81.2959 104.615L36.8369 22.0078" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M76.0908 116.002L31.6318 33.3945" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M70.8838 127.39L26.4248 44.7832" stroke="#48FF91"
					 strokeWidth="0.4"></path>
				<path d="M65.6777 138.779L21.2188 56.1719" stroke="#48FF91"
					 strokeWidth="0.4"></path>
			</g>
			<path
				d="M47.9995 42.8262C50.8518 48.0768 50.8515 50.8282 49.4434 53.9952C50.8546 50.8317 52.2437 50.6923 55.0496 55.7901C52.2437 50.6923 52.0936 47.6355 53.7218 44.799C52.2385 47.9005 50.8548 48.0803 48.0026 42.8297L47.9995 42.8262Z"
				fill="#48FF91" stroke="#48FF91" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M141.642 141.609L108.867 80.0459C107.011 76.559 102.26 73.7166 98.3143 73.7273L46.5835 73.868C44.7966 73.8728 43.0419 73.4086 41.4946 72.5193L37.9338 70.474C36.3864 69.5848 34.6317 69.1205 32.8448 69.1253L26.0472 69.1438L20.7772 73.7818L59.3855 146.233C60.1444 147.415 61.6057 148.144 63.5788 148.139L136.968 147.962L140.16 149.904L142.078 145.796L142.07 145.796C142.592 144.67 142.502 143.207 141.649 141.605L141.642 141.609Z"
				fill="#2D9FFF" stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path d="M93.5209 77.8407L95.4382 73.733" stroke="#0500FF" strokeWidth="0.4"
				 strokeMiterlimit="10"></path>
			<path
				d="M106.95 84.1563C105.094 80.6694 100.344 77.827 96.3978 77.8377L21.4148 78.0193C19.2966 78.0251 17.7717 77.1841 17.0645 75.8496L56.743 150.353C57.502 151.535 58.9633 152.264 60.9363 152.259L135.919 152.077C139.869 152.066 141.581 149.206 139.725 145.723L106.95 84.16L106.95 84.1563Z"
				fill="url(#paint0_linear_278_20219)" stroke="#0500FF" strokeWidth="0.4"
				strokeLinecap="round" strokeLinejoin="round"></path>
			<path
				d="M111.354 100.692L103.152 85.2795C101.988 83.09 99.3286 81.1093 96.8902 81.1159L22.6367 81.2285"
				stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M58.5854 149.048L132.999 148.854C135.474 148.847 136.144 147.274 135.171 145.441L127.919 131.817"
				stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M27.9064 69.9854C28.4863 71.0745 27.3593 72.8124 25.3891 73.8601C23.4189 74.9079 21.3527 74.8763 20.769 73.7834C20.1853 72.6905 21.316 70.9563 23.2862 69.9086C24.2416 69.3997 25.22 69.1476 26.0427 69.1454C26.9138 69.143 27.607 69.424 27.9064 69.9854Z"
				fill="#48FF91" stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M25.8183 71.1014L25.8201 71.1009C25.9036 71.2601 25.8809 71.5044 25.6878 71.8017C25.4982 72.0937 25.1668 72.3953 24.7337 72.6257C24.3007 72.8561 23.8652 72.9625 23.5169 72.9567C23.1606 72.9509 22.9446 72.8323 22.8598 72.6731C22.775 72.5139 22.797 72.2688 22.9909 71.9701C23.1805 71.6782 23.5119 71.3765 23.945 71.1462L23.9451 71.1461C24.3634 70.9232 24.7854 70.8171 25.1313 70.8162C25.5065 70.8152 25.731 70.9349 25.8183 71.1014Z"
				fill="#1B1B1C" stroke="#0500FF" strokeWidth="0.4"></path>
			<path
				d="M44.7358 11.2816L17.2173 71.5047C16.4549 73.1709 16.4554 74.6935 17.0653 75.8459C17.0653 75.8459 17.9982 78.0249 21.4156 78.0156C24.8331 78.0063 29.1329 78.0206 29.1329 78.0206L30.2073 76.1079L22.5161 76.1028C19.5416 76.1109 17.9248 74.306 19.1608 71.6L46.7275 11.2724C47.5638 9.44602 48.7154 8.52337 49.888 8.52018C49.888 8.52018 46.1384 8.21022 44.7358 11.2779L44.7358 11.2816Z"
				fill="#48FF91" stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M125.896 125.726L128.817 125.234L136.579 132.108L129.66 119.112L123.338 120.365L125.896 125.726Z"
				fill="#1B1B1C"></path>
			<path
				d="M127.012 130.118C125.04 126.412 125.257 124.103 129.631 122.692C131.981 121.933 134.111 120.703 135.935 119.038L139.949 115.371C143.428 112.193 144.462 106.189 142.251 102.03C140.035 97.87 135.376 97.0674 131.9 100.245L127.024 104.699C125.372 106.212 123.267 107.141 121.038 107.359C116.497 107.799 114.592 106.781 112.501 102.851L111.424 106.529L123.922 130.13L127.015 130.122L127.012 130.118Z"
				fill="url(#paint1_linear_278_20219)"></path>
			<path
				d="M127.01 130.119C125.038 126.413 125.256 124.104 129.63 122.693C131.98 121.934 134.11 120.704 135.934 119.039L139.948 115.372C143.427 112.194 144.461 106.19 142.249 102.031C140.034 97.871 135.375 97.0684 131.899 100.246L127.023 104.7C125.371 106.213 123.266 107.142 121.037 107.36C116.496 107.8 114.591 106.782 112.5 102.852"
				stroke="#0500FF" strokeWidth="0.4" strokeMiterlimit="10"></path>
			<path
				d="M137.651 101.404C135.539 100.736 133.013 102.768 132.005 105.946C130.997 109.124 131.892 112.242 134.005 112.91L136.489 113.628L139.978 102.091L137.651 101.404Z"
				fill="#1B1B1C" stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M141.8 108.979C142.807 105.801 141.912 102.684 139.801 102.015C137.69 101.346 135.163 103.379 134.156 106.556C133.149 109.733 134.044 112.851 136.155 113.52C138.266 114.189 140.793 112.156 141.8 108.979Z"
				fill="#48FF91" stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M78.0385 120.939C76.434 120.944 74.5099 119.791 73.7541 118.375L58.7268 90.149C57.9746 88.7326 58.6677 87.573 60.2721 87.5686L92.2577 87.4705C93.8622 87.4661 95.7862 88.6186 96.5421 90.035L111.569 118.261C112.321 119.677 111.628 120.837 110.024 120.841L78.0385 120.939Z"
				fill="#1B1B1C" stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M78.8893 119.457C77.2848 119.462 75.3608 118.309 74.6049 116.893L59.5776 88.6669C59.4092 88.3472 59.3153 88.0422 59.2848 87.7594C58.4222 88.1452 58.1566 89.0728 58.7291 90.1472L73.7564 118.373C74.5086 119.789 76.4364 120.942 78.0408 120.938L110.026 120.839C111.266 120.836 111.96 120.138 111.861 119.167C111.589 119.29 111.258 119.358 110.871 119.359L78.8856 119.457L78.8893 119.457Z"
				fill="url(#paint2_linear_278_20219)" stroke="#0500FF" strokeWidth="0.4"
				strokeLinecap="round" strokeLinejoin="round"></path>
			<mask id="mask1_278_20219" maskUnits="userSpaceOnUse" x="58" y="87" width="55"
				 height="35">
				<path
					d="M78.8874 119.459C77.2829 119.464 75.3588 118.311 74.603 116.895L59.5757 88.6689C59.4073 88.3492 59.3134 88.0442 59.2828 87.7613C58.4202 88.1471 58.1547 89.0748 58.7272 90.1491L73.7545 118.375C74.5066 119.791 76.4344 120.944 78.0389 120.939L110.024 120.841C111.264 120.838 111.958 120.14 111.859 119.169C111.587 119.292 111.256 119.36 110.869 119.361L78.8836 119.459L78.8874 119.459Z"
					fill="url(#paint3_linear_278_20219)" stroke="#0500FF"
					strokeWidth="0.4" strokeLinecap="round"
					strokeLinejoin="round"></path>
			</mask>
			<g mask="url(#mask1_278_20219)">
				<path
					d="M80.4626 117.445L78.3099 121.355C77.8492 122.192 76.8298 122.544 75.9507 122.171L69.2088 119.303C68.7478 119.107 68.3853 118.733 68.2033 118.266L57.0344 89.6322C56.6146 88.556 57.2664 87.3613 58.3985 87.1316L60.5482 86.6956C61.3021 86.5427 62.0724 86.8693 62.4866 87.5174L80.4004 115.545C80.7674 116.119 80.7913 116.848 80.4626 117.445Z"
					fill="#0500FF"></path>
			</g>
			<path
				d="M78.7486 136.496L77.4165 133.998C76.9001 133.024 75.5727 132.235 74.4745 132.238L69.8136 132.25L67.8828 128.622C67.3664 127.648 66.0427 126.859 64.9408 126.862L60.9947 126.873C60.3991 126.874 59.9902 127.11 59.8163 127.479L58.8725 129.499L60.7768 130.224L61.8694 132.276L57.2085 132.288C56.6129 132.29 56.204 132.526 56.0301 132.895L55.0863 134.915L56.9419 135.55L57.4808 136.561C57.9971 137.535 59.3246 138.325 60.4228 138.322L65.0836 138.309L67.0144 141.937C67.5308 142.911 68.8545 143.7 69.9565 143.697L71.5758 143.693L74.1372 145.104L75.081 143.084C75.2253 142.771 75.2019 142.361 74.9624 141.915L73.0316 138.287L75.6561 138.28L77.9308 139.689L78.8746 137.668C79.0227 137.355 78.9955 136.946 78.7561 136.5L78.7486 136.496Z"
				fill="#1B1B1C"></path>
			<path
				d="M77.6238 138.612L77.624 138.612C77.8625 139.057 77.8521 139.422 77.7069 139.665C77.5617 139.909 77.2453 140.091 76.7399 140.093L72.079 140.105C72.0089 140.106 71.944 140.142 71.908 140.203C71.872 140.263 71.8701 140.337 71.903 140.399L73.8337 144.027C74.0709 144.475 74.0604 144.84 73.9155 145.083C73.7709 145.325 73.4556 145.507 72.95 145.508L69.0039 145.519C68.4976 145.521 67.9265 145.339 67.4165 145.034C66.9064 144.729 66.4762 144.312 66.2391 143.865L66.239 143.865L64.3082 140.237C64.2734 140.171 64.2052 140.131 64.1311 140.131L59.4702 140.143C58.9658 140.145 58.3948 139.963 57.8841 139.658C57.3735 139.353 56.9425 138.936 56.7054 138.489L56.7052 138.489L55.3731 135.991L55.3729 135.991C55.1344 135.546 55.1449 135.181 55.2901 134.937C55.4353 134.694 55.7517 134.511 56.2571 134.51L60.9179 134.497C60.988 134.497 61.0529 134.46 61.089 134.4C61.125 134.34 61.1269 134.265 61.0939 134.203L59.1633 130.576C59.1632 130.576 59.1632 130.575 59.1631 130.575C58.9261 130.128 58.9366 129.763 59.0814 129.52C59.226 129.278 59.5413 129.096 60.047 129.094L63.9931 129.084C64.4992 129.082 65.0702 129.265 65.5804 129.57C66.0906 129.876 66.5209 130.292 66.758 130.738L68.6888 134.366C68.7236 134.432 68.7918 134.472 68.8659 134.472L73.5267 134.459C74.0311 134.458 74.6022 134.64 75.1128 134.945C75.6235 135.25 76.0545 135.666 76.2915 136.113L76.2917 136.114L77.6238 138.612Z"
				fill="#1B1B1C" stroke="#0500FF" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M73.3442 105.471C72.9056 105.472 72.3799 105.156 72.1735 104.769L71.3142 103.262C71.1088 102.874 71.2984 102.558 71.737 102.557L77.5017 102.542C77.9402 102.541 78.4659 102.856 78.6723 103.243L79.5316 104.751C79.737 105.138 79.5474 105.455 79.1088 105.456L73.3442 105.471Z"
				fill="#0500FF" stroke="#1B1B1C" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M82.9535 105.451C82.515 105.452 81.9892 105.137 81.7829 104.75L80.9235 103.242C80.7182 102.855 80.9078 102.538 81.3464 102.537L87.111 102.522C87.5496 102.521 88.0753 102.836 88.2817 103.224L89.141 104.731C89.3464 105.118 89.1567 105.435 88.7182 105.436L82.9535 105.451Z"
				fill="#0500FF" stroke="#1B1B1C" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M92.5668 105.43C92.1283 105.431 91.6025 105.115 91.3962 104.728L90.5368 103.221C90.3315 102.833 90.5211 102.517 90.9597 102.516L96.7243 102.501C97.1629 102.5 97.6886 102.815 97.895 103.202L98.7543 104.71C98.9596 105.097 98.77 105.414 98.3315 105.415L92.5668 105.43Z"
				fill="#0500FF" stroke="#1B1B1C" strokeWidth="0.4" strokeLinecap="round"
				strokeLinejoin="round"></path>
			<path
				d="M96.9616 43.437C97.0151 43.6629 96.939 43.9172 96.7331 44.1507C96.5277 44.3838 96.2036 44.5812 95.8067 44.6753C95.4097 44.7693 95.0315 44.7384 94.7433 44.6223C94.4546 44.506 94.2724 44.313 94.2189 44.0871C94.1653 43.8612 94.2415 43.607 94.4473 43.3734C94.6528 43.1403 94.9768 42.9429 95.3738 42.8489C95.7707 42.7548 96.1489 42.7857 96.4371 42.9018C96.7259 43.0181 96.908 43.2111 96.9616 43.437Z"
				fill="#2D9FFF" stroke="#0500FF" strokeWidth="0.4"></path>
			<path
				d="M91.5503 49.0524L93.7485 46.6714L94.1096 44.8281C92.3577 44.6137 89.9753 45.9665 88.01 46.8962C87.8091 46.9913 87.7666 47.2606 87.9306 47.4107L89.8046 49.1259C90.3075 49.5861 91.0878 49.5533 91.5503 49.0524Z"
				fill="url(#paint4_linear_278_20219)" stroke="#0500FF"
				strokeWidth="0.4"></path>
			<path
				d="M93.4581 46.5666C93.2805 45.5957 93.8844 44.6112 94.1791 44.1877C95.1036 44.7914 96.1568 44.5792 96.5973 44.4502C96.7461 45.243 96.2849 46.4079 96.0357 46.8913C97.9284 51.982 94.6818 53.736 92.8219 53.9766C90.1124 50.7581 92.117 47.6956 93.4581 46.5666Z"
				fill="url(#paint5_linear_278_20219)" stroke="#0500FF"
				strokeWidth="0.4"></path>
			<path
				d="M98.509 49.9221C97.6964 48.3461 97.1836 46.6034 96.1255 46.041C96.0267 45.9885 95.9917 45.8559 96.0689 45.7748C96.4359 45.3891 96.5858 45.3871 96.6239 44.9479C98.9879 44.8488 100.902 46.1334 102.53 47.4202C102.609 47.4824 102.612 47.5995 102.535 47.6636C102.008 48.1005 100.175 49.5759 98.8611 50.0643C98.7247 50.115 98.5757 50.0515 98.509 49.9221Z"
				fill="url(#paint6_linear_278_20219)" stroke="#0500FF"
				strokeWidth="0.4"></path>
			<path
				d="M97.4544 49.6457C97.5085 49.8731 97.7064 50.1647 97.8858 50.4426C98.0802 50.7436 98.4824 50.9309 98.8226 50.8185L99.6576 50.5428"
				stroke="#0500FF" strokeWidth="0.4"></path>
			<path d="M96.0952 47.01C95.4898 46.5613 94.4955 45.497 93.1976 46.803"
				 stroke="#0500FF" strokeWidth="0.4"></path>
			<path
				d="M86.9212 46.9564C86.9088 46.823 86.9666 46.5083 87.297 46.3169C87.6273 46.1256 88.6807 45.5694 89.1661 45.3152"
				stroke="#0500FF" strokeWidth="0.4"></path>
			<path
				d="M86.1882 46.4029C86.1758 46.2695 86.2336 45.9548 86.5639 45.7635C86.8942 45.5721 86.6438 45.6901 87.1292 45.4359"
				stroke="#0500FF" strokeWidth="0.4"></path>
		</g>
		<defs>
			<linearGradient id="paint0_linear_278_20219" x1="78.6704" y1="75.6821"
						 x2="78.8786" y2="152.232" gradientUnits="userSpaceOnUse">
				<stop offset="0.0598417" stopColor="#FFF465"></stop>
				<stop offset="0.777316" stopColor="#48FF91"></stop>
			</linearGradient>
			<linearGradient id="paint1_linear_278_20219" x1="127.392" y1="96.6488"
						 x2="120.017" y2="130.714" gradientUnits="userSpaceOnUse">
				<stop offset="0.0598417" stopColor="#FFF465"></stop>
				<stop offset="0.777316" stopColor="#48FF91"></stop>
			</linearGradient>
			<linearGradient id="paint2_linear_278_20219" x1="85.1029" y1="87.6892"
						 x2="85.1933" y2="120.918" gradientUnits="userSpaceOnUse">
				<stop offset="0.0598417" stopColor="#FFF465"></stop>
				<stop offset="0.777316" stopColor="#48FF91"></stop>
			</linearGradient>
			<linearGradient id="paint3_linear_278_20219" x1="85.101" y1="87.6911"
						 x2="85.1913" y2="120.92" gradientUnits="userSpaceOnUse">
				<stop offset="0.0598417" stopColor="#FFF465"></stop>
				<stop offset="0.777316" stopColor="#48FF91"></stop>
			</linearGradient>
			<linearGradient id="paint4_linear_278_20219" x1="90.6998" y1="45.6173"
						 x2="92.2719" y2="49.2916" gradientUnits="userSpaceOnUse">
				<stop offset="0.0598417" stopColor="#FFF465"></stop>
				<stop offset="0.777316" stopColor="#48FF91"></stop>
			</linearGradient>
			<linearGradient id="paint5_linear_278_20219" x1="89.2504" y1="49.4568"
						 x2="92.2068" y2="53.2581" gradientUnits="userSpaceOnUse">
				<stop offset="0.0457846" stopColor="#2ECCFF"></stop>
				<stop offset="1" stopColor="#0500FF"></stop>
			</linearGradient>
			<linearGradient id="paint6_linear_278_20219" x1="98.8848" y1="44.5271"
						 x2="99.8866" y2="49.9078" gradientUnits="userSpaceOnUse">
				<stop offset="0.0598417" stopColor="#FFF465"></stop>
				<stop offset="0.777316" stopColor="#48FF91"></stop>
			</linearGradient>
			<clipPath id="clip0_278_20219">
				<rect width="160" height="160" fill="white"></rect>
			</clipPath>
		</defs>
	</svg>
)


export const IconQRCode = (props: SVG) => (
	<svg className="text-iconNormal" fill="none" width="24" height="24" viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M11 4H4V11H11V9H13V9.40723L9.40723 13H4V20H11V18H13V20H20V13H13V16H11V14.2357L14.2357 11H20V4H13V7H11V4ZM8.5 6.5H6.5V8.5H8.5V6.5ZM8.5 15.5H6.5V17.5H8.5V15.5ZM15.5 6.5H17.5V8.5H15.5V6.5ZM17.5 15.5H15.5V17.5H17.5V15.5Z"
			 fill="currentColor"></path>
	</svg>
)

export const IconBell = (props: SVG) => (
	<svg className="text-iconNormal" width="20" height="20" viewBox="0 0 20 20" fill="none"
		xmlns="http://www.w3.org/2000/svg" {...props}>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M10.0002 2.5C6.7785 2.5 4.16683 5.11167 4.16683 8.33333V10.8333L3.3335 11.6667V13.3333H4.16683H15.8335H16.6668V11.6667L15.8335 10.8333L15.8335 8.33333C15.8335 5.11167 13.2218 2.5 10.0002 2.5ZM10.0001 17.5C8.29154 17.5 6.82314 16.4716 6.18018 15H13.8201C13.1771 16.4716 11.7087 17.5 10.0001 17.5Z"
			 fill="currentColor"></path>
	</svg>
)

export const IconSearch = (props: SVG) => (
	<svg fill="none" width="20" height="20" viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg" {...props} className={`text-iconNormal ${props.className}`}>
		<path fillRule="evenodd" clipRule="evenodd"
			 d="M9.16667 5C11.4679 5 13.3333 6.86548 13.3333 9.16667C13.3333 11.4679 11.4679 13.3333 9.16667 13.3333C6.86548 13.3333 5 11.4679 5 9.16667C5 6.86548 6.86548 5 9.16667 5ZM9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8333 10.3256 15.5376 11.4154 15.0175 12.3649L17.5763 14.9238L16.2505 16.2496L14.9248 17.5753L12.3663 15.0167C11.4166 15.5373 10.3262 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5Z"
			 fill="currentColor"></path>
	</svg>
)


export const IconCoins = (props: ComponentProps<'img'>) => (
	<img
		alt={'Coins'}
		{...props}
		style={{
			objectFit: "contain",
			...(props.style || {})
		}}
		src={'/icons/coins.png'}
	/>
)
