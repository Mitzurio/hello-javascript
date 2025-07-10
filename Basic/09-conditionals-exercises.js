/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myname = "Rocio"
let otherName = "Monga"
let otherName1 = "Rocio"
if (otherName == myname) {console.log(myname)} 
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let userName = "Mongita"
let password = "********"
let userName1 = "Mongita"
let password1 = "********"
if (password == password1 && userName == userName1 ) { console.log("Hello!")}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let randomNumber = Math.random();
if (randomNumber < 0){
    console.log(`${randomNumber}: is a Negative number`)
} else if (randomNumber == 0) {
    console.log(`${randomNumber}: is a zero`)
} else {
     console.log(`${randomNumber}: is a Positive number`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = Math.floor(Math.random() * 100) + 1;
if (age < 18){
    tmp = 18-age
    console.log(`You are ${age} years old, you are ${tmp} years away from voting`)
} else {
     console.log(`You can vote!`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let tmp2
age < 18 ? tmp2 = "Minor" : tmp2 = "Adult"
console.log(tmp2)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 1;
let season;

switch (month) {
    case 0:
    case 1:
    case 2:
        season = "Summer";
        break;
    case 3:
    case 4:
    case 5:
        season = "Autumn";
        break;
    case 6:
    case 7:
    case 8:
        season = "Winter";
        break;
    case 9:
    case 10:
    case 11:
        season = "Spring";
        break;
    default:
        season = "Error: invalid data";
}

console.log(season); //  Summer

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch
let numDays
switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
        numDays = "31 days";
        break;
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
        numDays = "30 days";
        break;
    case 1:
        numDays = "28/29 days";
        break;
    default:
        numDays = "Error: invalid data";
}
console.log(numDays); 

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "spanish";

switch (language.toLowerCase()) {
    case "spanish":
        console.log("¡Hola! Este programa está en español.");
        break;
    case "english":
        console.log("Hello! This program is in English.");
        break;
    case "french":
        console.log("Bonjour ! Ce programme est en français.");
        break;
    case "german":
        console.log("Hallo! Dieses Programm ist auf Deutsch.");
        break;
    case "italian":
        console.log("Ciao! Questo programma è in italiano");
        break;
  default:
    console.log("Language not supported.");
}

// enought
// 9. Usa un switch para hacer de nuevo el ejercicio 6 

// 10. Usa un switch para hacer de nuevo el ejercicio 7