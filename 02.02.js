// Dado un array de strings, devolver un array con la cantidad de vocales de cada string. La función debe llamarse 'cantidadDeVocales' y debe recibir un único parámetro: un array de stringss.

const arrayDeStrings = ['hola', 'mundo', 'cómo', 'estás']

const cantidadDeVocales = (array) => {
	const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
	let contador = 0
	array.map((element) => {
		for (let i = 0; i < element.length; i++) {
			if (vocales.includes(element[i])) {
				contador++
			}
		}
	})
	return contador
}

//console.log(cantidadDeVocales(arrayDeStrings))

//Invertir los strings de un array dado. La función debe llamarse 'invertirStrings' y debe recibir un único parámetro: un array de strings.

const arrayDeStrings2 = ['hola', 'mundo', 'cómo', 'estás']
const invertirStrings = (array) => {
	const invertidos = array.map((element) => {
		return element.split('').reverse().join('')
	})
	return invertidos
}

console.log(invertirStrings(arrayDeStrings2))
