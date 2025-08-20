import { NextResponse, NextRequest } from "next/server";
import PostUpdater from "@/utils/post-updater";
import PostDeleter from "@/utils/post-deleter";
import PostgresPostRepository from "@/utils/post-postgres-repository";
//import InMemoryPostRepository from "@/utils/in-memory-post-repository";

export async function PUT(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const data = await request.json();
		const { id } = await context.params;
    //const repository = new InMemoryPostRepository();
    const repository = new PostgresPostRepository();
    const postUpdate = new PostUpdater(repository);
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

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await context.params;
		//const repository = new InMemoryPostRepository();
		const repository = new PostgresPostRepository();
		const postDeleter = new PostDeleter(repository);
		await postDeleter.run(Number(id));
		return NextResponse.json({
			message: "Post eliminado correctamente",
		});
	} catch {
		return NextResponse.json(
			{ error: "Error al eliminar el post: No existe o es otro problema" },
			{ status: 500 }
		);
	}
}