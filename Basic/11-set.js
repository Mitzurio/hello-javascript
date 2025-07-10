// set
// no indexes (like arrays)
// does not allow duplicates
// stores only values (not key-value pairs like objects)
let mySet = new Set()
// let mySet = {} Noo, nop that is empty object 
console.log(mySet)

// initialization
// The Set constructor accepts only a single argument, and that argument must be an iterable 
// (e.g., an array or a string).
// new Set() ignores all the extra arguments you put in. It only takes the first one (“zero”).
// And since “zero” is an iterable string, it converts it into individual characters.

mySet = new Set("zero", "one", "two", "three", "four", "five")
console.log(mySet)

// right way
mySet = new Set(["zero", "one", "two", "three", "four", "five"])
console.log(mySet)

// common methods
console.log("common methods")
mySet.add("six") // add to the end
console.log(mySet)
mySet.delete()
console.log(mySet)
console.log(mySet.delete("six")) // no indexes , works as a hash
console.log(mySet)

console.log(mySet.has("six")) // exists, there is?
console.log(mySet.has("five"))

console.log(mySet.size)

// convert a set to an array
let myArray = Array.from(mySet)
console.log(myArray)
// convert an array to a set
let mySet2 = new Set(myArray)
console.log(mySet2)

