'use client';

import {IconIn, IconNoTransactions, IconReceive, IconSend} from "@/app/icons";
import {PrismaType} from "@/backend/database";
import {useMemo} from "react";


function Transactions({transactions, onClick}: {
	transactions: PrismaType<'transaction'>[],
	onClick?: (trx: typeof transactions[number]) => any
}) {
	const grouped = useMemo(() => {
		return transactions.sort((a,b) => a.date.getTime() < b.date.getTime() ? 1:-1).reduce((all, transaction) => {
			const str = transaction.date.toString().split(" ").slice(1, 4).join(" ");

			const pre = all[str] || [];
			pre.push(transaction);
			all[str] = pre;

			return all;
		}, {} as {
			[k: string]: typeof transactions
		})
	}, [transactions]);

	return (
		<div className={'overflow-y-auto p-4'}>
			<div className="flex flex-col space-y-4 mb-3">
				<div>
					{Object.entries(grouped).map(([key, transactions]) => {


						return (
							<div className="my-2 flex flex-col space-y-4 pb-2">
								<p
									data-testid="category-title"
									className="body-text text-textThird  text-unset"
								>
									{key}
								</p>
								{transactions.map(trx => {
									const n = trx.isSend ? 5:5;
									return (
										<div data-testid="tx-item" role="button"
											onClick={() => onClick?.(trx)}
											className="outline-0  cursor-pointer">
											<div className="flex items-center justify-between flex-nowrap w-full">
												<div className="flex items-center space-x-2.5 w-[220px]">
													<div className="flex w-7.5 h-7.5 justify-center items-center">
														<div className="flex w-full justify-center items-center h-full bg-glass rounded-full">
															{trx.isSend ? <IconReceive/> : <IconSend/>}
														</div>
													</div>
													<div className="flex flex-col">
														<div className="flex items-center space-x-1.25"><p
															data-testid="tx-type"
															className="body-text text-textPrimary font-medium   text-unset">Receive</p>
														</div>
														<div data-testid="tx-item-subtitle"
															className="caption-text body-text text-textThird  text-textSecondary font-normal flex flex-nowrap text-unset">
															<span>{trx.isSend ? "To" : "From"}:{"  "}</span>
															<span className={'opacity-0'}>.</span>
															<span className={'truncate'}>{trx.address.slice(0, n-1)}...</span>
															<span className={'relative -left-1'}>{trx.address.slice(-n)}</span>
														</div>
													</div>
												</div>
												<div className={'flex-grow flex justify-end items-center'}>
													<p data-testid="tx-amount"
													   className={`body-text whitespace-nowrap ${!trx.isSend && "text-textBuy"} font-medium   text-unset`}>
														{trx.isSend ? "-" : "+"}
														{(+trx.amount).toLocaleString()}{" "}
														{trx.symbol}
													</p>
												</div>
											</div>
										</div>
									)
								})}
							</div>
						)
					})}
				</div>
				<div className="rounded-lg bg-transparent border border-line p-4  border-dashed transition w-full">
					<div className="flex items-center justify-center space-x-2">
						<small
							className="caption-text text-textSecondary font-normal   text-unset">Can’t find your
							transaction?
						</small>
						<div className="flex w-auto" data-tooltip-id="button-tooltip-28"
							data-tooltip-place="top-end">
							<button type="button"
								   className="outline-none bg-transparent text-backgroundPrimary default-button  p-0 w-auto ">
								<small className="caption-text text-primary font-medium   text-unset">Check
									explorer</small>
							</button>
						</div>
					</div>
				</div>
			</div>

			<br/>
			<br/>
		</div>
	);
}

export default Transactions;
