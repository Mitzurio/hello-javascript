// Map

let myMap = new Map()
console.log(myMap)

myMap = new Map ([
    ["name", "Jhonny"],
    ["age", 1],
    ["specie", "cat"]
])

console.log(myMap)

// methods and properties
console.log("set")
myMap.set("weight", 4)
console.log(myMap)
myMap.set("weight", 3)
console.log(myMap)

console.log("get")
console.log(myMap.get("age"))
console.log(myMap.get("name"))
console.log(myMap.get("username"))

console.log("has")
console.log(myMap.has("age"))
console.log(myMap.has("name"))
console.log(myMap.has("username"))

console.log("delete")
console.log(myMap)
console.log(myMap.delete("age"))
console.log(myMap)

// clear
myMap.clear()
console.log("clear")
console.log(myMap)
