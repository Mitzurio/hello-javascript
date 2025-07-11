// Funcions

function myFunc(name){
    console.log(`Hello, ${name}`)
}
myFunc("Mongi")

// Arrow  functions
const greet = (name) => {
  return console.log(`Hello ${name}`);
};
const greet2 = name => console.log(`Hello ${name}`)
greet("Gaby")
greet2("Nicanor")

const sum = (a, b) => console.log(a + b)
sum(4, 5)

function defaultSum(a, b){
    return a + b
}
console.log(defaultSum(6,9))

function extern(){
    console.log('level 1')
    // I can only call her from here, not from outside.
    function intern(){
        console.log('level 2')
    } 
}
extern()

// Higher order functions
function applyFunc(func, param) {
    func(param)
}
applyFunc(myFunc, "Higher order functions")

// forEach

myArray = [1,2,3,4]
myArray.forEach(function (value) {
    console.log(value)
})
myArray.forEach((value) => console.log(value))

mySet = new Set(["zero", "one", "two", "three", "four", "five"])
mySet.forEach((value) => console.log(value))

myMap = new Map ([
    ["name", "Jhonny"],
    ["age", 1],
    ["specie", "cat"]
])

myMap.forEach((value) => console.log(value))