//Filtrar números pares
const newArray1 = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	null,
	undefined,
	'hola',
	'mundo',
	'cómo',
	'estás',
]

const filtrarPares = (array) => {
	const pares = array.filter(
		(number) => typeof number === 'number' && number % 2 === 0
	)
	return pares
}

//console.log(filtrarPares(newArray1))

/*Haz una función llamada ordenarAscendentemente que reciba un array de números y devuelva un nuevo array con los mismos números pero ordenados de forma ascendente. */

const ordenarAscendentemente = (array) => {
	const newArray = array.filter((number) => typeof number === 'number')
	return newArray.sort((a, b) => a - b)
}

//console.log(ordenarAscendentemente(newArray1))
/*

Crea una función llamada eliminarDuplicados que reciba un array y elimine todos los elementos duplicados, devolviendo un nuevo array con los elementos únicos en el mismo orden en que aparecen en el array original.*/

const newArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]

const eliminarDuplicados = (array) => {
	let arrayUnico = array.filter((valor, indice, self) => {
		return self.indexOf(valor) === indice
	})
	return arrayUnico
}

console.log(eliminarDuplicados(newArray2))
