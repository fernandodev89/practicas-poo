import PostRepository from "./post-repository";

export default class PostDeleter {
	private readonly repository: PostRepository;

	constructor(repository: PostRepository) {
		this.repository = repository;
	}

	public async run(id:number){
		const post = await this.repository.getById(id);
		if (!post) {
			throw new Error("Post no existe para eliminar");
		}
		await this.repository.delete(id);
	}

}