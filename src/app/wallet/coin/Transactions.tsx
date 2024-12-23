'use client';

import {IconIn, IconNoTransactions} from "@/app/icons";

function Transactions(props: any) {
	return (
		<div className={'overflow-y-auto'}>

			<div className="flex items-center justify-center w-full h-full flex-1 flex-row min-h-[400px]">
				<div className="flex flex-col space-y-2 items-center">
					<IconNoTransactions/>
					<p className="title-text text-textSecondary font-semibold   text-unset">No transactions
						found</p></div>
			</div>
			<br/>
			<br/>
		</div>
	);
}

export default Transactions;
