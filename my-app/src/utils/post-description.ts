export default class PostDescription{
	public value: string;

	constructor(value:string){
		this.validarDescription(value);
		this.value = value;
	}

	public validarDescription(description: string): void {
		if(!description || description.length < 3) {
			throw new Error("La descripción debe tener al menos más de 3 caracteres.");
		}
	}
}