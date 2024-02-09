/*Escribe una función llamada numerosPares que reciba un array de números y devuelva un nuevo array con solo los números pares. */
function numeroPares(array) {
	const pares = []
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			pares.push(array[i])
		}
	}

	/**
	 *
	 * array.filter((element) => element % 2 === 0)
	 *
	 */
	return pares
}

//console.log(numeroPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

/*Filtrar strings que empiezan con una letra específica*/

const newArray = ['hola', 'adios', 'hasta luego', 'hasta pronto', 'hasta nunca']
const letra = 'h'

const filtrarPorLetra = (array, letra) => {
	const filtrados = array.filter((element) => element[0] === letra)
	return filtrados
}

//console.log(filtrarPorLetra(newArray, letra))

//Filtrar números mayores que un valor dado

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Hola', 'chau']

function filtrarPorNumero(array, numero) {
	const filtrados = array.filter(
		(element) => typeof element === 'number' && element > numero
	)
	return filtrados
}
