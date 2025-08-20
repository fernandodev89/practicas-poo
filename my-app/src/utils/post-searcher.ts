import PostRepository from "./post-repository";
import Post from "./post";

export default class PostSearcher {
	private readonly repository: PostRepository;

	constructor(repository: PostRepository) {
		this.repository = repository;
	}

	public async run():Promise<Post[]>{
		return await this.repository.getAll();
	}

}