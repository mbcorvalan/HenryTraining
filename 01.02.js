const numeros = [34, 12, 'hola', 6, 'juan']

function mayorMenor(numeros) {
	const minAndMax = []
	const numerosFiltrados = numeros.filter(
		(elemento) => typeof elemento === 'number'
	)
	/* const min = numerosFiltrados.sort((a, b) => a - b)[0]
	const max = numerosFiltrados.sort((a, b) => b - a)[0] */
	let numeroMayor = -Infinity
	let numeroMenor = Infinity

	for (let i = 0; i < numerosFiltrados.length; i++) {
		if (numeros[i] > numeroMayor) {
			numeroMayor = numeros[i]
		}
		if (numeros[i] < numeroMenor) {
			numeroMenor = numeros[i]
		}
	}

	minAndMax.push(numeroMenor, numeroMayor)

	return minAndMax
	/* 
    La funcion llamada 'mayorMenor' recibe como argumento un arreglo de enteros y strings llamado 'numeros'.
    Debe devolver un nuevo arreglo con el mayor numero y el menor numero (tanto en valor como en longitud del string)
    Ej:
    mayorMenor([4, 12, 'hola', 6, 'juan']) debe retornar [12, 6]
    mayorMenor([4, 12, 'hola', 6, 'juan', 145]) debe retornar [145, 4]
    Nota:
    Se asegura que "numeros" siempre va a tener al menos un entero.

    
    */
}

console.log(mayorMenor(numeros))
