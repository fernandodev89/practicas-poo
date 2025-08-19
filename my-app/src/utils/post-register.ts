import PostgresPostRepository from "./post-postgres-repository";
import Post from "./post";

export default class PostRegistrar {
	private readonly repository: PostgresPostRepository;

	constructor(repository: PostgresPostRepository) {
		this.repository = repository;
	}

	public async run(title: string, description: string, autor: string){
		const post = Post.create(title, description, autor);
		await this.repository.save(post);
	}

}