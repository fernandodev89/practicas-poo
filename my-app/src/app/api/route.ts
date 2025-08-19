import { NextResponse, NextRequest } from "next/server";
import PostRegistrar from "@/utils/post-register";
import PostgresPostRepository from "@/utils/post-postgres-repository";
//import InMemoryPostRepository from "@/utils/in-memory-post-repository";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    //const repository = new InMemoryPostRepository();
    const repository = new PostgresPostRepository();
    const registrar = new PostRegistrar(repository);
    registrar.run(data.title, data.description, data.autor);
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
