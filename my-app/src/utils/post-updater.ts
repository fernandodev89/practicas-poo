import PostRepository from "./post-repository";
import Post from "./post";

export default class PostUpdater {
	private readonly repository: PostRepository;

	constructor(repository: PostRepository) {
		this.repository = repository;
	}

	public async run(id:number,title:string, description:string, autor:string){
		const newpost = Post.create(title, description, autor);
		const post = await this.repository.getById(id);
		if (!post) {
			throw new Error("Post no existe");
		}
		await this.repository.update(id,newpost);
	}

}