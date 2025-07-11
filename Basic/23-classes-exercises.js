/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
// 2. Añade un método a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la función
// 4. Añade un método estático a la primera clase
// 5. Haz uso del método estático
console.log(`1. Crea una clase que reciba dos propiedades
2. Añade un método a la clase que utilice las propiedades
3. Muestra los valores de las propiedades e invoca a la función
4. Añade un método estático a la primera clase
5. Haz uso del método estático`)

class Cat {
    #size
    #age
    constructor(size, age) {
        this.#size = size
        this.#age = age
    }
    get size() {
        return this.#size
    }
    get age() {
        return this.#age
    }
    info() {
        console.log("The cat's size is ", this.#size, " and he is ", this.#age, "years old")
    }
    static purr() {
        console.log("prrrrrrrrrrrrrrrrr")
    }
    
}
babyCat = new Cat("Bigotes",0)
console.log(babyCat, babyCat.size, babyCat.age)
babyCat.info()
Cat.purr()

// 6. Crea una clase que haga uso de herencia
// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
// 10. Sobrescribe un método de una clase que utilice herencia 
console.log(`6. Crea una clase que haga uso de herencia
7. Crea una clase que haga uso de getters y setters
8. Modifica la clase con getters y setters para que use propiedades privadas
9. Utiliza los get y set y muestra sus valores
10. Sobrescribe un método de una clase que utilice herencia`)

class Pet extends Cat {
    #name
    constructor(size, age, name){
        super(size, age)
        this.#name = name
    }
    get name() {
        return this.#name
    }
    set name(newName) {
        this.#name = newName
    }
    info() {
        console.log(`${this.#name} size is ${this.size} and he is ${this.age} years old`)
    }

}
babyPet = new Pet("small", 0, "Jonnathan")
console.log(babyPet, babyPet.name)
babyPet.name = "Jhonny"
console.log(babyPet.name)
babyPet.info()






