/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
console.log("1. Usa desestructuración para extraer los dos primeros elementos de un array")
let cats = ["Gaby", "Monga", "Nicanor", "Jhonny", "Don Gato", "Carlos"]
let [myCat1, myCat2] = cats
console.log(myCat1)
console.log(myCat2)
console.log()

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("Usa desestructuración en un array y asigna un valor predeterminado a una variable")
let [myCat01, myCat02, myCat03, myCat04, myCat05, myCat06, myCat07="Monchito"] = cats
console.log(myCat01, myCat02, myCat03, myCat04, myCat05, myCat06, myCat07);
console.log()

// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("3. Usa desestructuración para extraer dos propiedades de un objeto")
let cat = {
    name: "Gaby",
    age: 7,
    gender: "female"
}
let {name: name00, age: age00} = cat
console.log(name00, age00)
console.log()

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

console.log(` 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
   a nuevas variables con nombres diferentes (lo mismo que el anterior xd)`)
   // es lo mismo que el anterior? 
console.log()

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("5. Usa desestructuración para extraer dos propiedades de un objeto anidado")
let cat2 = {
  name: 'Jhonny',
  age: 1,
  isCute: true,
  human: { name: 'Rocio', gender: 'female' }
}
let {human:{name: name01}, human:{gender: gender01} } = cat2
console.log(name01, gender01)
console.log()

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("6. Usa propagación para combinar dos arrays en uno nuevo")
let dogs = ["Chase", "Dominga"]
let pets = [...cats, ...dogs]
console.log(pets)
console.log()

// 7. Usa propagación para crear una copia de un array
console.log("7. Usa propagación para crear una copia de un array")
let dogs2 = [...dogs]
console.log(dogs2)
console.log()

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("8. Usa propagación para combinar dos objetos en uno nuevo")
let cat3 = {
    name2: "Gaby",
    age2: 7,
    gender2: "female"
}
let cat4 = {...cat3, ...cat2}
console.log(cat4)
console.log()

// 9. Usa propagación para crear una copia de un objeto
console.log("9. Usa propagación para crear una copia de un objeto")
let cat5 = {...cat2}
console.log(cat4)
console.log()

// 10. Combina desestructuración y propagación
console.log("10. Combina desestructuración y propagación")
myArray = [1, 2, 3, 4]
let [myValue0, myValue1, myValue2, myValue3, myValue4, myValue5, myValue6 = 9] = [...myArray, 5, 6]
console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
console.log()
