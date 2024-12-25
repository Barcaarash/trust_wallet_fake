import {Prisma} from "@prisma/client";
import TransactionCreateArgs = Prisma.TransactionCreateArgs;
import {revalidatePath} from "next/cache";
import Transactions from "@/app/wallet/coin/Transactions";

const model = Prisma.dmmf.datamodel.models.find(o => o.name === "Transaction");

async function Page(props: any) {
	const {symbol = "unknown"} = (await props.searchParams) || {};
	const transactions = await prisma.transaction.findMany({
		where: {
			symbol
		}
	});


	return (
		<div className={'p-5'}>
			<h1 className={'text-3xl text-center p-3'}>{symbol} Transactions ({transactions.length})</h1>
			<br/>
			<form action={async (d) => {
				'use server';

				const formData = Object.fromEntries(d.entries());


				console.log(formData);

				const data: TransactionCreateArgs['data'] = {
					symbol: symbol,
					amount: formData['amount']+"",
					date: new Date(formData['date']+""),
					address: formData['address']+"",
					isSend: formData['isSend']+"" === "true"
				}

				console.log(data);

				await prisma.transaction.create({
					data
				});

				revalidatePath(".")
			}}>
				<div className={'flex flex-col justify-stretch gap-5'}>
					{model?.fields.filter(o =>
						!['symbol','id', 'isSend'].includes(o.name)
					).map(o => {
						let value = (transactions as any[])?.at?.(-1)?.[o.name];

						if (value instanceof Date) {
							value = value.toJSON().split("T")[0];
						} else if (value) value = value+""

						return (
							<input key={o.name} defaultValue={value} required name={o.name} placeholder={`${o.name}...`} type={o.name}/>
						)
					})}

					<div className={'flex gap-2'}>
						<p>Type:</p>
						<div className={'flex gap-2 items-center'}>
							<input id={'true'} type={'radio'} defaultChecked name={'isSend'} value={'true'}/>
							<label htmlFor={'true'}>Send</label>
						</div>
						<div className={'flex gap-2 items-center'}>
							<input id={'false'} type={'radio'} name={'isSend'} value={'false'}/>
							<label htmlFor={'false'}>Receive</label>
						</div>
					</div>
					<button className={'bg-primary text-black'} type={'submit'}>
						Submit
					</button>
				</div>
			</form>
			<br/>
			<Transactions onClick={async (trx)=>{
				'use server';

				await prisma.transaction.delete({
					where: {
						id: trx.id
					}
				});
				revalidatePath(".")
			}} transactions={transactions} />
		</div>
	);
}

export default Page;
