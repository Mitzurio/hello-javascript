// let myObject
// console.log(myObject.email)

// try-catch

try {
    console.log(myObject.email)
    console.log("finishes the execution without errors")
} catch {
    console.log("an error has occurred")
}

// Catch  error
try {
    console.log(myObject.email)
    console.log("finishes the execution without errors")
} catch (error) {
    console.log("an error has occurred: ", error.message)
}

// Finally
try {
    console.log(myObject.email)
    console.log("finishes the execution without errors")
} catch (error) {
    console.log("an error has occurred: ", error.message)
} finally {
    console.log("We love cats")
}

// throw
function sum(a, b){
    console.log(typeof a === "number")
    console.log(typeof b === "number")
    if (typeof a === "number" &&  typeof b === "number"){
        return a + b
    }
    return console.log("cannot be summed")
    
}

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}
console.log(sum(5, 7))
console.log(sumIntegers(5, 7))
//throw new Error("Something is wrong")

try {
    console.log(sumIntegers(5, 10))
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}
