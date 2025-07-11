/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animalsArray = ['cat', 'parrot', 'dog', 'fish', 'horse']
console.log(animalsArray)

// 2. Añade dos más. Uno al principio y otro al final
animalsArray.unshift('lion')
console.log(animalsArray)
animalsArray.push('frog')
console.log(animalsArray)

// 3. Elimina el que se encuentra en tercera posición
animalsArray.splice(2,1)
console.log(animalsArray)

// 4. Crea un set que almacene cinco libros
bookSet = new Set(["i want to eat your pancreas", "pride and prejudice", "Don Quijote de la Mancha", "Moby Dick", "Cien años de soledad"])
console.log(bookSet)

// 5. Añade dos más. Uno de ellos repetido
bookSet.add("i want to eat your pancreas")
console.log(bookSet)
bookSet.add("Le Petit Prince")
console.log(bookSet)

// 6. Elimina uno concreto a tu elección
bookSet.delete("Moby Dick")
console.log(bookSet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let monthMap = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
]);
console.log(monthMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(monthMap.has(5))
monthMap.has(5) && console.log(monthMap.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
monthMap.set("Summer", ["December", "January", "February", "March"])
console.log(monthMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myCats = ["Moga", "Nicanor", "Don Gato", "Gaby", "Jhonny", "Carlos"]
let myCatsSet = new Set(myCats)
console.log(myCats)
console.log(myCatsSet)

let catsMap = new Map()
catsMap.set('mycats', myCatsSet);
console.log(catsMap)