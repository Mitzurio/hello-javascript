// primitive data types

// String 
let name1 = "Gabriela"
let name2 = "Jhonny"
let name3 = "Monga"

// Number
let age = 1
let weight = 2.9

// Boolean
let isCat = true
let isHuman = false

// Undefined (declared but not initialized)
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol 
let mySymbol = Symbol("mysymbol")

// BigInt
let myBigInt = BigInt(90071992547409910000000000)
let myBigInt2 = 90071992547409910000000000n

/*
It seems like there is no maximum limit to a BigInt as per spec, 
which makes sense considering BigInts are supposed to be arbitrary-precision integers, 
whose "digits of precision are limited only by the available memory of the host system"
*/

console.log(typeof name1)
console.log(typeof age)
console.log(typeof isCat)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)