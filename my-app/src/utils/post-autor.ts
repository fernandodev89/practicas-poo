export default class PostAutor{
	public value: string;
	
	constructor(value: string) {
		this.validarAutor(value);
		this.value = value;
	}

	public validarAutor(autor: string): void {
		if(!autor || autor.length < 3) {
			throw new Error("El autor debe tener al menos más de 3 caracteres.");
		}
	}
}