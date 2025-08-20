import { NextResponse, NextRequest } from "next/server";
import PostUpdate from "@/utils/post-update";
import PostgresPostRepository from "@/utils/post-postgres-repository";
//import InMemoryPostRepository from "@/utils/in-memory-post-repository";

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const data = await request.json();
		const { id } = await context.params;
    //const repository = new InMemoryPostRepository();
    const repository = new PostgresPostRepository();
    const postUpdate = new PostUpdate(repository);
    await postUpdate.run(Number(id), data.title, data.description, data.autor);
    return NextResponse.json({
      message: "Post actualizado correctamente",
      post: data,
    });
  } catch{
    return NextResponse.json(
      { error: "Error al actualizar el post" },
      { status: 500 }
    );
  }
}