/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
console.log("1. Crea un objeto con 3 propiedades")
let cat = {
    name: "Gaby",
    age: 7,
    gender: "female"
}
console.log(cat)
console.log()

// 2. Accede y muestra su valor
console.log("2. Accede y muestra su valor")
console.log(cat.name)
console.log(cat.age)
console.log(cat.gender)
console.log()

// 3. Agrega una nueva propiedad
console.log("3. Agrega una nueva propiedad")
cat.isCute = true
console.log(cat)
console.log()

// 4. Elimina una de las 3 primeras propiedades
console.log("4. Elimina una de las 3 primeras propiedades")
delete cat.gender
console.log(cat)
console.log()

// 5. Agrega una función e invócala
cat.greet = function(){
    console.log("Hi, I my name is " + this.name + " and I am a cat")
}
cat.greet()
console.log()

// 6. Itera las propiedades del objeto
console.log("6. Itera las propiedades del objeto")
for (let key in cat){
    console.log(`${key}: ${cat[key]}`)
}
console.log()

// 7. Crea un objeto anidado
console.log("7. Crea un objeto anidado")
cat.human ={
    name: "Rocio",
    gender: "female"
}
console.log(cat)

console.log()

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("8. Accede y muestra el valor de las propiedades anidadas")
console.log(cat.human)
console.log()

// 9. Comprueba si los dos objetos creados son iguales
console.log("9. Comprueba si los dos objetos creados son iguales")
console.log(cat == cat.human)
console.log(cat === cat.human)
console.log()

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("10. Comprueba si dos propiedades diferentes son iguales")
console.log(cat.age == cat.name)
console.log(cat.age === cat.name)