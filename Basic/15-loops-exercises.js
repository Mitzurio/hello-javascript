/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("1. Crea un bucle que imprima los números del 1 al 20")
let i = 1    
while (i < 21){
    console.log(i)
    i++
}
console.log()
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado")
i = 1   
let sum = 0
do {
    sum +=i
    i++
} while (i <= 100)
console.log(sum) //5050
console.log()


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("3. Crea un bucle que imprima todos los números pares entre 1 y 50")
for (i = 0; i<= 50; i += 2){
    console.log(i)
}
console.log()

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log(`Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
    ["Moga", "Nicanor", "Don Gato", "Gaby", "Jhonny", "Carlos"]`)
let myArray = ["Moga", "Nicanor", "Don Gato", "Gaby", "Jhonny", "Carlos"]
for (let value of myArray){
    console.log(value)
}
console.log()

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
// I should use Regular Expression but this is a review of the basics
console.log("5. Escribe un bucle que cuente el número de vocales en una cadena de texto (Mongita)")
let myString = "Mongita"
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let numVowels = 0
for (let value of myString){

    if (vowels.includes(value)) {
        numVowels++
    } 
}
console.log(numVowels)
console.log()

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto ([1,2,3,4,5])")
let numbers = [1,2,3,4,5]
let result = 1

for (i = 0; i < numbers.length; i++){
    result *= numbers[i]
}
console.log(result)
console.log()

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5 
console.log("7. Escribe un bucle que imprima la tabla de multiplicar del 5 (lo hare hasta el 12)" )
result = 0
while (result < 60) {
    result+=5
    console.log(result)
}
console.log()


// 8. Usa un bucle para invertir una cadena de texto
console.log("8. Usa un bucle para invertir una cadena de texto (Mongita)")
let myNewString = ""
while (myString.length > 0) {
  let last = myString.at(-1)
  myNewString = myNewString.concat(last)
  myString = myString.slice(0, -1)
}
console.log(myNewString)
console.log()

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci")
let a = 0
let b = 1
let fib = a + b
for (i = 0; i < 10; i++){
    if (i == 0){
        console.log(i)
    } else if (i == 1){
        console.log(i)
    } else {
        console.log(fib)
        a = b
        b = fib
        fib = a + b
    }
}
console.log()

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10")
numbers = [0,10,11,54,3,6,13,11,7,3]
newNumbers = []
console.log(numbers)
for (let value of numbers){
    if (value > 10){
        newNumbers.push(value)
    }
}
console.log(newNumbers)
console.log()