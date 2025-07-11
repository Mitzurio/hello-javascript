// Objects

let person = {
    name: "Trinidad",
    age: 12,
    alias: "Trini"
}

console.log(person.name)
console.log(person["name"])

person.name = "Trinidad Gonzalez"
console.log(person.name)
console.log(typeof person.age)
person.age = "twelve"
console.log(typeof person.age)
delete person.age
console.log(person)
person.kpop = true
console.log(person)

// Methods

let person2 = {
    name: "Trinidad",
    age: 12,
    alias: "Trini",
    walk: function(){
        console.log("the person walks")
    }
}
person2.walk()

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
console.log("---------------------------")
console.log(person3)
console.log(person3.job.name)
person3.job.work()

let person4 = {
    name: "Trinidad",
    age: 12,
    alias: "Trini"
}

console.log(person)
console.log(person4)
console.log(person == person4) // reference to memory not to values
console.log(person === person4) // reference to memory not to values

// iterate
console.log("iterate")
for (let key in person){
    console.log(`${key}: ${person[key]}`)
}

function Person(name, age){
    this.name = name
    this.age = age
}
let person5 = new Person("Trinidad", 12)
console.log(typeof person4)
console.log(typeof person5)