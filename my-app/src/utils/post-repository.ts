import Post from "./post";

export default interface PostRepository {
	save(post:Post): Promise<void>;
	getAll(): Promise<Post[]>;
	getById(id: number): Promise<Post | null>;
	update(id: number, post: Post): Promise<void>;
	delete(id: number): Promise<void>;
}