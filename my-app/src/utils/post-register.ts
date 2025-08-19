export default class PostRegistrar {
	private title: string;
	private description: string;
	private autor: string;

	constructor(title: string, description: string, autor: string) {
		this.validarTitle(title);
		this.title = title;
		this.validarDescription(description);	
		this.description = description;
		this.validarAutor(autor);
		this.autor = autor;
	}


	public getTitle(): string {
		return this.title;
	}

	public getDescription(): string {
		return this.description;
	}

	public getAutor(): string {
		return this.autor;
	}

	public validarTitle(title: string): void {
		if(!title || title.length < 3) {
			throw new Error("El título debe tener al menos más de 3 caracteres.");
		}
		
	}

	public validarDescription(descripcion: string): void {
		if(!descripcion || descripcion.length < 3) {
			throw new Error("La descripción debe tener al menos más de 3 caracteres.");
		}
		
	}

	public validarAutor(autor: string): void {
		if(!autor || autor.length < 3) {
			throw new Error("El autor debe tener al menos más de 3 caracteres.");
		}
	}

}