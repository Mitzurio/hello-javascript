let myArray = [1, 2, 3, 4]

let person = {
    name: "Trinidad",
    age: 12,
    alias: "Trini"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Destructuring

// Syntax arrays
console.log("----------------------")
myArray = [1, 2, 3, 4]
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Syntax arrays with default values
console.log("----------------------")
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// ignore array elements
console.log("----------------------")
let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// Syntax objects
console.log("----------------------")
let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)

let {name2, age2, alias2, email2 = "lala@gmail.com"} = person
console.log(name2) // this does not exist
console.log(age2) // this does not exist
console.log(alias2) // this does not exist
console.log(email2) // this does not exist

let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

let person3 = {
    name: "Trinidad",
    age: 12,
    alias: "Trini",
    walk: function(){
        console.log("the person walks")
    },
    job: {
        name: "Dev",
        exp: "2",
        work: function(){
            console.log(`person works as ${this.name} and has ${this.exp} years of experience`)
        }
    }
}

let {name: name4, job: { name: jobName}} = person3
console.log(name4)
console.log(jobName)

// Propagation
console.log("propagation")
// Syntax arrays
let myArray2 = [...myArray] // copy
let myArray3 = [...myArray, 5, 6] // copy
console.log(myArray2)
console.log(myArray3)
let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4)


// Syntax objects
let person5 = {...person, email:"lala@gmail.com"}
console.log(person5)