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

	public async getAll(): Promise<Post[]> {
		return this.post.map((p) => {
			return Post.create(p.title, p.description, p.author);
		});
	}
	public async getById(id: number): Promise<Post | null> {
		const post = this.post[id];
		if (!post) {
			return null;
		}
		return Post.create(post.title, post.description, post.author);
	}

	public async update(id: number, post: Post): Promise<void> {
		const title = post.title.value;
		const description = post.description.value;
		const author = post.autor.value;
		this.post[id] = {title, description, author};
	}

	public async delete(id: number): Promise<void> {
		this.post.splice(id, 1);
	}	
}