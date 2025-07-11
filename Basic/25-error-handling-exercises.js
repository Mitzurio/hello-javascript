/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
// 2. Captura una excepción utilizando try-catch y finally

try {
    cats("Jhonny")
} catch (error) {
    console.error(error)
} finally {
    console.log("Hello")
}

// 3. Lanza una excepción genérica
function sqrtPositive(a){
    if (a < 0){
        throw new TypeError("only the square ratio of positive integers is calculated.")
    }
    return Math.sqrt(a)
}

try {
    sqrtPositive(-4)
} catch (error) {
    console.error("An error occurred:", error.message)
}
// sqrtPositive(-4)

// 4. Crea una excepción personalizada
// 5. Lanza una excepción personalizada
class myError extends Error {
    constructor(message, a){
        super(message)
        this.a = a
    }
    numberNegative(){
        console.log(`This ${this.a} is negative` )
    }
}
//throw new myError("This is my error", 4);
myError.numberNegative

// 6. Lanza varias excepciones según una lógica definida
// 7. Captura varias excepciones en un mismo try-catch
function isNumber(a){
    return typeof a === 'number'
}
console.log("-------------------")
function sqrtPositive(a){
    if (!isNumber(a)) {
        throw new TypeError("The value isn't number")
    }
    if (!Number.isFinite(a)){
        throw new TypeError("The value isn't finite")
    }
    if (!Number.isInteger(a)){
        throw new TypeError("The value isn't integer")
    }
    if (a < 0){
        throw new TypeError("The value isn't positive")
    }
    return Math.sqrt(a)
}

try {
    console.log(sqrtPositive(4))
    //console.log(sqrtPositive(-4))
    //console.log(sqrtPositive(Infinity))
    console.log(sqrtPositive(4.1))
} catch (error) {
console.log(error.message)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log(" 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores")
let myArray = ["3.14", 4, "3/4", false]

for (i = 0; i < myArray.length; i++){
    try {
        let parsedValue = parseFloat(myArray[i])
        if (isNaN(parsedValue)) {
            throw new Error(`Could not convert the value ‘${myArray[i]}’ to a floating number`)
        }
        myArray[i] = parsedValue
    } catch (error) {
        console.log(error.message)
    }
    
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada")
let cat = {
    name: "Gaby",
    age: 7,
    gender: "female"
}

function checkCat(cat, propertie){
    if (!cat.hasOwnProperty(propertie)){
        throw new Error(`the ${cat.name} does not have the property ${propertie}`)
    }
}

try {
    checkCat(cat,"human")
} catch (error) {
    console.log(error.message)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
console.log("10. Crea una función que realice reintentos en caso de error hasta un máximo de 10")

function try10(a,b=9){
    try {
        cats(a)
    } catch (error) {
        console.log(error.message, b)
        
    } finally {
        if (b <= 0) {
            return console.log("We try ...")
        }
        return try10(a,b-1)
    }
}
try10("gato")