import { NextResponse, NextRequest } from "next/server";
import PostRegistrar from "@/utils/post-register";
import postgres from "postgres";

const connectionString = 'postgresql://postgres.sbdqdhagfkjfevbhcclh:fernando8923@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
const sql = postgres(connectionString);

async function guardarPost(title: string, description: string, autor: string) {
try {
  await sql`
    INSERT INTO "Posts" (title, description, author) 
    VALUES (${title}, ${description}, ${autor})
  `;
} catch (error) {
  console.error(error);
  throw new Error("Failed to save post");
}
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const postRegistrar = new PostRegistrar(data.title, data.description, data.autor);
    await guardarPost(
      postRegistrar.getTitle(),
      postRegistrar.getDescription(),
      postRegistrar.getAutor()
    );

    return NextResponse.json({
      message: "Post guardado correctamente",
      post: data,
    });
  } catch {
    return NextResponse.json(
      { error:  "Error en el almacenamiento de datos" },
      { status: 500 }
    );
  }
}
