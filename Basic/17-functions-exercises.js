/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("1. Crea una función que reciba dos números y devuelva su suma")
const sum = (a, b) => a + b
console.log(`4 + 5 = ${sum(4,5)}`)
console.log()

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("2. Crea una función que reciba un array de números y devuelva el mayor de ellos (6)")
const max = numbers =>  Math.max(...numbers)
let list = [1,2,3,4,5,6]
console.log(max(list))
console.log()

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("3. Crea una función que reciba un string y devuelva el número de vocales que contiene (Mongita)")

function numVowels(text){
    let vowels = new Set("aeiouAEIOU");
    let numVowels = 0
    for (let value of text){
        if (vowels.has(value)) {
            numVowels++
    }
}
    return numVowels
}
console.log(`There are ${numVowels("Mongita")} vowels in Mongita`)
console.log()

/* solution from internet
function numVowelsReg(text) {
    const matches = text.match(/[aeiou]/gi); // g = global, i = ignore case
    return matches ? matches.length : 0;
}
console.log(`There are ${numVowelsReg("Mongita")} vowels in Mongita`)
console.log() */

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas")
function upCase(element){
    return element.map(word => word.toUpperCase()) 
}
let myArray = ["zero", "one", "two", "three", "four", "five"]
console.log(`old Array: ${myArray}
new array: ${upCase(myArray)}`)
console.log()

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario")
function isPrime(number){
    if (number == 2) return true
    if (number <= 1 || number%2==0) return false

    for (let i = 2; i < number; i++){
        if (number%i===0) return false
    }
    return true
}
console.log(isPrime(15),isPrime(-5),isPrime(1),isPrime(2),isPrime(4));
console.log()

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos")
function intersection(firstArray, secondArray){
    let firstSet = new Set(firstArray)
    let secondSet = new Set(secondArray)
    let intSet = new Set()
    let found = []
    let found2 = new Set()
    firstArray.forEach(element => {
        secondArray.forEach(element2 =>{
            if (element == element2){
                intSet.add(element)
            }
        })
    })
    firstArray.forEach(element => {
        found.push(secondArray.find(e => e === element))  
    })
    found = Array.from(found).filter(e => e !== undefined)

    firstArray.forEach(element => {
        data = secondSet.has(element)
        if (data){
            found2.add(element)
        } 
    })
    //return intSet
    return found2
}

let array1 = ["zero", "one", "two", "three", "three", "g"]
let array2 = ["zero", "one", "two", "three", "four", "five", "six"]
console.log(intersection(array1,array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares")
const sumEven = numbers => {
    let sum = 0
    numbers.forEach(e => {
        if (e % 2 === 0){ sum += e}
    })

    let sum2 = numbers.filter(e => e % 2 === 0).reduce((acc, val) => acc + val, 0) // from internet
    return sum2
}
list = [1,2,3,4,5,6]
console.log(sumEven(list))
console.log()

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado")
const mul = numbers => {return numbers.map(e => e**2)}
console.log(list)
console.log(mul(list))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log("9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso")
function reversed(word){
    let newWord = ""
    while (word.length > 0) {
        let last = word.at(-1)
        newWord = newWord.concat(last)
        word = word.slice(0, -1)
    }
    return newWord
}
console.log(reversed("Gaby"))
console.log()


// 10.  Crea una función que calcule el factorial de un número dado
console.log("10.  Crea una función que calcule el factorial de un número dado")
function fact(num){
    if (num < 0) return "Error"
    if (num === 0 || num === 1) return 1
    let aux = fact(num - 1)
    return num * aux
}    
console.log(fact(3))