import postgres,{Sql} from "postgres";
import Post from "./post";

export default class PostgresPostRepository {
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
}