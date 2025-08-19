import postgres,{Sql} from "postgres";

export default class PostgresPostRepository {
	private sql: Sql;

	constructor() {
		const connectionString = 'postgresql://postgres.sbdqdhagfkjfevbhcclh:fernando8923@aws-1-us-east-2.pooler.supabase.com:6543/postgres';
		this.sql = postgres(connectionString);
	}

	async save(title: string, description: string, autor: string) {
	try {
		await this.sql`
			INSERT INTO "Posts" (title, description, author) 
			VALUES (${title}, ${description}, ${autor})
		`;
	} catch {
		throw new Error("Failed to save post");
	}
	}
}