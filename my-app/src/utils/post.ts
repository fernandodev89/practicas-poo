export default function validateDates(title: string, description: string,autor:string):void {
	if (!title || !description || !autor) {
		throw new Error("Title, description, y autor estan correctos.");
	}console.log("Validation correcta: Todos los campos cumplen.");
}




validateDates("TItuloo ", "Ejemplo de descripcion", "Fernando Contreras");