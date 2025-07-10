// Strings
let myName = "Gaby"
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

// Long
console.log(greeting.length)

// characters
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[10])

// common methods
console.log("common methods")
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Ga"))
console.log(greeting.includes("Gaby"))
console.log(greeting.slice(6,10))
console.log(greeting.replace("Gaby", "Jhonny"))

// Tempaltes literals
let message = `hola
hello
ciao`
console.log(message)

console.log(`Hello, ${myName}!`)