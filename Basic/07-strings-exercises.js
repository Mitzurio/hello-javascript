/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
    let gaby = "Gabriela"
    let jhon = "Jhonny"
    let gabyJhon = gaby + jhon
    let gabyJhon1 = gaby.concat(jhon)
    console.log(`    ${gabyJhon}
    ${gabyJhon1}`)

// 2. Muestra la longitud de una cadena de texto
    console.log(`long: ${gabyJhon.length}`)

// 3. Muestra el primer y último carácter de un string
    let lastChar = gabyJhon[gabyJhon.length-1]
    console.log(`0: ${gabyJhon[0]}, -1: ${lastChar}`)

// 4. Convierte a mayúsculas y minúsculas un string
    console.log(`UpperCase: ${gabyJhon.toUpperCase()}`)
    console.log(`LowerCase: ${gabyJhon.toLowerCase()}`)

// 5. Crea una cadena de texto en varias líneas
    console.log(`
░░░░░░░░░░░░░░░░░░░░░▄▀░░▌
░░░░░░░░░░░░░░░░░░░▄▀▐░░░▌
░░░░░░░░░░░░░░░░▄▀▀▒▐▒░░░▌
░░░░░▄▀▀▄░░░▄▄▀▀▒▒▒▒▌▒▒░░▌
░░░░▐▒░░░▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒█
░░░░▌▒░░░░▒▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄
░░░░▐▒░░░░░▒▒▒▒▒▒▒▒▒▌▒▐▒▒▒▒▒▀▄
░░░░▌▀▄░░▒▒▒▒▒▒▒▒▐▒▒▒▌▒▌▒▄▄▒▒▐
░░░▌▌▒▒▀▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒█▄█▌▒▒▌
░▄▀▒▐▒▒▒▒▒▒▒▒▒▒▒▄▀█▌▒▒▒▒▒▀▀▒▒▐░░░▄
▀▒▒▒▒▌▒▒▒▒▒▒▒▄▒▐███▌▄▒▒▒▒▒▒▒▄▀▀▀▀
▒▒▒▒▒▐▒▒▒▒▒▄▀▒▒▒▀▀▀▒▒▒▒▄█▀░░▒▌▀▀▄▄
▒▒▒▒▒▒█▒▄▄▀▒▒▒▒▒▒▒▒▒▒▒░░▐▒▀▄▀▄░░░░▀
▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▄▒▒▒▒▄▀▒▒▒▌░░▀▄
▒▒▒▒▒▒▒▒▀▄▒▒▒▒▒▒▒▒▀▀▀▀▒▒▒▄▀
            `)

// 6. Interpola el valor de una variable en un string
    console.log(`Hi, one of my cats is called ${gaby} and the other ${jhon}.
        `)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
    let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    let result = lorem.replaceAll(" ", "-")
    console.log(lorem)
    console.log(result)
// 8. Comprueba si una cadena de texto contiene una palabra concreta
    console.log()
    console.log(lorem.includes("printer"))
// 9. Comprueba si dos strings son iguales
    let lorem1 = lorem
    console.log()
    console.log(lorem==result)
    console.log(lorem==lorem1)
    console.log(lorem.localeCompare(lorem1)) 

// 10. Comprueba si dos strings tienen la misma longitud
    console.log (lorem.length == result.length)