/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
    let x = 10
    let y = 3
    let addition = x + y        // 13
    let subtraction = x - y       // 7
    let multiplication = x * y // 30
    let division = x / y    // 3.333...
    let remainder = x % y     // 1 
    let power = x ** y      // 1000

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
    let assigAdd = x
    let assigSub = x
    let assigMul = x
    let assigDiv = x
    let assigRem = x
    let assigPow = x
    assigAdd += y // 13
    assigSub -= y
    assigMul *= y
    assigDiv /= y
    assigRem %= y
    assigPow **= y
  

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
    console.log("true comparison operators")
    console.log(10 > 5)
    console.log(-10 < 5)
    console.log("" == false)
    console.log(10 == "10")
    console.log(0 == false)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
    console.log("false comparison operators")
    console.log(-10 > 5)
    console.log(10 < -5)
    console.log("" == true)
    console.log(10 === "10")
    console.log(1 == false)

// 5. Utiliza el operador lógico and
    console.log("" == false && 0 == false) // true
// 6. Utiliza el operador lógico or
    console.log("" == false || 10 === "10") // true
// 7. Combina ambos operadores lógicos
    console.log((1 > 0 && 1 > -1) && (1 == 0 || 1 > -4)) // true
// 8. Añade alguna negación
     console.log(!(1 > 0 && 1 > -1) && (1 == 0 || 1 > -4)) // false

// 9. Utiliza el operador ternario
    const haveICat = true
    haveICat ? console.log("I am happy") : console.log("I am not happy")

// 10. Combina operadores aritméticos, de comparáción y lógicas
    let money = 100
    money *=40000
    let cat = money > 100000
    cat ? console.log("I am happy because I have money and I can have other cat") : console.log("I am not happy becasue I can't have other cat")