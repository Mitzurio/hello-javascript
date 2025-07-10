// Operators

// Arithmetic operators
let a = 5
let b = 10

console.log(a + b) // addition
console.log(a - b) // dubtraction
console.log(a * b) // multiplication
console.log(a / b) // division
console.log(a % b) // remainder
console.log(a ** b) // power

a++ // increment
console.log(a)

b-- // decrease
console.log(b)

// assignment operators
console.log("assignment operators")

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
console.log(myVariable)
myVariable *= 2
console.log(myVariable)
myVariable /= 2
console.log(myVariable)
myVariable %= 2
console.log(myVariable)
myVariable **= 2
console.log(myVariable)

// comparison operators
console.log("comparison operators")

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == 6) // equality by only value
console.log(a === 6)  // equality by identity (by type and value)
console.log(a === "6")
console.log(a != 6) 
console.log(a !== "6")

// strange things
console.log("strange things")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)

/* 
Truly values 
    ​​all integers except zero all 
    non-empty strings 
Falsy values 
​   ​0, 0n, null, undefined, Nan, 
    empty strings 
*/

// logical operators
console.log("logical operators")
// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

// not (!)
console.log(!(5 > 10 || 15 > 20))
console.log(!(5 < 10 || 15 < 20))
console.log(!(5 < 10 || 15 > 20))

// ternary operators

const isRaining = false

isRaining ? console.log("it's rainig") : console.log("it's not rainig")