import PostRepository from "./post-repository";
import Post from "./post";

export default class InMemoryPostRepository implements PostRepository {
	private post : Array<{title: string, description: string, author: string}> ;

	constructor() {
		this.post = [];
	}

	public async save(post: Post): Promise<void> {
		const title = post.title.value;
		const description = post.description.value;
		const author = post.autor.value;
		this.post.push({title, description, author});
	}
}