// array

let myArray = []
let myArray2 = new Array(1)

console.log(myArray)
console.log(myArray2)

myArray = [1]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[0] = "zero"
myArray2[1] = "one"
myArray2[2] = "two"
myArray2[3] = "three"
console.log(myArray2)

myArray = []

myArray.push("zero")
myArray.push("one")
myArray.push("two")
myArray.push("three")
console.log(myArray)
myArray.pop()
console.log(myArray)
// shift and unshift
myArray.shift() // take out the first element 
console.log(myArray) 
myArray.unshift("-one","zero") // put in the start
console.log(myArray) 

// leght
console.log(myArray.length)

// clear
// myArray = []
myArray.length = 0
console.log(myArray)

//slice
myArray = [-2,-1,0,1,2,3,4]
let myNewArray = myArray.slice(1,4)
console.log(myNewArray)

//splice
// array.splice(start, deleteCount, item1, item2, ...)
myArray = ["zero", "one", "two", "three", "four", "five"]
console.log("splice")
console.log("myArray: ", myArray)
myArray.splice(2,3, "kitty")
console.log(myArray)