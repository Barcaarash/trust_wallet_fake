import {updateFile} from "@/backend/file";
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const file = formData.get('file') as File
	if (file.size / 1024 / 1024 > 20) throw({
		code: 403,
		message: "اندازه فایل بیش از حد مجاز میباشد"
	})
	const path = formData.get('path') as string;

	const newPath = await updateFile(file, formData.get('previousPath')?.toString?.() || path,path);

	return NextResponse.json({
		path: newPath
	})
}
