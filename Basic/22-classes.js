// Classes

class Person{
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person = new Person("Camila", 23, "Cami")
let person2 = new Person("Camila", 23, "Cami")
console.log(person)
console.log(person2)
console.log(typeof person)

class DefaultPerson{
    constructor(name = "Pepito", age = 27, alias = "PepitoPepito"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}


let person3 = new DefaultPerson()
console.log(person3)
console.log(person3.alias)
console.log(person3["alias"])

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    loveCats() {
        console.log("The person loves cats")
    }

}

let person4 = new PersonWithMethod("Pedro", 45, "Pedrito")
person4.loveCats()

//Private properties

console.log("private")

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson("Pedro", 45, "Pedrito", "IBAN123456789")
console.log(person5)

// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name() {
        return this.#name
    }
    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Alejandro", 27, "Janito", "IBAN1234567890")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

// inheritance
console.log("Inheritance")

class Animal {
    constructor(name) {
        this.name = name
    }
    sound() {
        console.log("The animal emits a generic sound")
    }
}

class Dog extends Animal {
    sound() {
        console.log("Guau!")
    }
    run() {
        console.log("The dog runs")
    }
}

class Fish extends Animal {
    constructor(name, size) {
        super(name)
        this.size = size
    }
    swim() {
        console.log("The fish swim")
    }

}

let myDog = new Dog("Cholito")
myDog.run()
myDog.sound()

let myFish = new Fish("Nemo", 10)
myFish.swim()
myFish.sound()

// Static methods: 
// A static method is a function that is defined within a class,
// but does not need an instance of the object to be used.

class MathOperations {
    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))