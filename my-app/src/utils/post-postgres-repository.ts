import postgres,{Sql} from "postgres";
import Post from "./post";
import PostRepository from "./post-repository";

export default class PostgresPostRepository implements PostRepository {
	private sql: Sql;

	constructor() {
		const connectionString = 'postgresql://postgres.sbdqdhagfkjfevbhcclh:fernando8923@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
		this.sql = postgres(connectionString);
	}

	async save(post: Post) {
	try {
		const title = post.title.value;
		const description = post.description.value;
		const autor = post.autor.value;
		await this.sql`
			INSERT INTO "Posts" (title, description, author) 
			VALUES (${title}, ${description}, ${autor})
		`;
	} catch {
		throw new Error("Failed to save post");
	}
	}

	async getAll(): Promise<Post[]> {
		try {
			const postsData = await this.sql`SELECT * FROM "Posts"`;
			return postsData.map((post) => {
				return new Post(
					post.title,
					post.description,
					post.author
				);
			})
		} catch {
			throw new Error("Failed to retrieve posts");
		}
	}

	async getById(id: number): Promise<Post | null> {
		try {
			const postData = await this.sql`SELECT * FROM "Posts" WHERE id = ${id}`;
			if (postData.length === 0) {
				return null;
			}
			const post = postData[0];
			return new Post(
				post.title,
				post.description,
				post.author
			);
		} catch {
			throw new Error("Failed to retrieve post by ID");
		}
	}

	async update(id: number, post: Post): Promise<void> {
		try {
			const title = post.title.value;
			const description = post.description.value;
			const autor = post.autor.value;
			await this.sql`
				UPDATE "Posts" 
				SET title = ${title}, description = ${description}, author = ${autor} 
				WHERE id = ${id}
			`;
		} catch {
			throw new Error("Failed to update post");
		}
	}

	

}