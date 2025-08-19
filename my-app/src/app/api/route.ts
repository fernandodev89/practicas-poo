import { NextResponse,NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		if (!data.title || !data.description || !data.autor) {
			throw new Error("Falto un valor por asignar.");
		}

		const conecc = 'postgresql://postgres.sbdqdhagfkjfevbhcclh:fernando8923@aws-1-us-east-2.pooler.supabase.com:5432/postgres' ;

		return NextResponse.json({
			message: 'Conexion exitosa a la base de datos',
		})
	} catch {
		return NextResponse.json({
			error: 'Failed to coneect to the database',
		}, { status: 500 });		
	}
}



