export default class PostTitle{
	public value: string;

	constructor(value:string){
		this.validarTitle(value);
		this.value = value;
	}

	public validarTitle(title: string): void {
		if(!title || title.length < 3) {
			throw new Error("El título debe tener al menos más de 3 caracteres.");
		}
		
	}
}