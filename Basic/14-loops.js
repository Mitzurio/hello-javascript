// Loops

for(let i = 0; i < 5; i++ ){
    console.log(`Hello ${i}`)
}

const numbers = [1,2,3,4,5,6,7]
for(let i = 0; i < numbers.length; i++ ){
    console.log(`element ${numbers[i]}`)
}

console.log("While")
let i = 0
while(i < 5){
    i++
    console.log(`Hello ${i}`)
}

console.log("do While")
do {
    i++
    console.log(`Hello ${i}`)
} while (i < 5) 

let myArray = ["zero", "one", "two", "three", "four", "five"]
let mySet = new Set(["zero", "one", "two", "three", "four"])
let myMap = new Map ([
    ["name", "Jhonny"],
    ["age", 1],
    ["specie", "cat"]
])

for (let value of myArray){
    console.log(value)
}
for (let value of mySet){
    console.log(value)
}
for (let value of myMap){
    console.log(value)
}

// break and continue
for(let i = 0; i < 10; i++ ){
    if (i == 4){
        continue
    } else if (i == 7) {
        break
    } 
    console.log(`Hello ${i}`)
}