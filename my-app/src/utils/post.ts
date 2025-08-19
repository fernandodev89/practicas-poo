import PostTitle from "./post-title";
import PostDescription from "./post-description";
import PostAutor from "./post-autor";

export default class Post{
	public title: PostTitle;
	public description: PostDescription;
	public autor: PostAutor;

	constructor(title: PostTitle, description:PostDescription, autor: PostAutor) {
		this.title = title;
		this.description = description;
		this.autor = autor;
	}

	public static create(title: string, description: string, autor: string): Post {
		const post = new Post(
			new PostTitle(title),
			new PostDescription(description),
			new PostAutor(autor)
		);
		
		return post 
	}

}