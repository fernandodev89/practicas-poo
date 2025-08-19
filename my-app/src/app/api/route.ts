import postgres, { Sql } from "postgres";
import { NextResponse, NextRequest } from "next/server";

class PostgresUserRepository {
  private readonly sql: Sql;

  constructor() {
		const connectionString ='postgresql://postgres.sbdqdhagfkjfevbhcclh:fernando8923@aws-1-us-east-2.pooler.supabase.com:6543/postgres' ;
    this.sql = postgres(connectionString);
  }

  async save(title: string, description: string, autor: string) {
    try {
      await this.sql`
        INSERT INTO "Posts" (title, description, author) 
        VALUES (${title}, ${description}, ${autor})
      `;
    } catch (err) {
      console.error("Error al insertar en DB:", err);
      throw new Error("Failed to save post");
    }
  }

  
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.title || !data.description || !data.autor) {
      return NextResponse.json(
        { error: "Faltan valores obligatorios." },
        { status: 400 }
      );
    }

    const repository = new PostgresUserRepository();
    await repository.save(data.title, data.description, data.autor);

    return NextResponse.json({
      message: "Post guardado correctamente",
      post: data,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err || "Error en la base de datos" },
      { status: 500 }
    );
  }
}
