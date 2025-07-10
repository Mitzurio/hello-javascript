// Conditionals

let age = 17
if (age == 37) {
    console.log("Age is 37")
} else if (age < 18){
    console.log("is a minor")
} else {
    console.log("Age is not 37")
}

// ternary operators

const message = age == 37 ? "Age is 37" : "Age is not 37"
console.log(message)

// switch

let day = 0
let dayName

switch (day){
    case 0:
        dayName = "Monday"
        break
    case 1:
        dayName = "Tuesday"
        break
    case 2:
        dayName = "Wednesday"
        break
    case 3:
        dayName = "Thursday"
        break
    case 4:
        dayName = "Friday"
        break
    case 5:
        dayName = "Saturday"
        break
    case 6:
        dayName = "Sunday"
        break
    default:
        dayName = "Error: invalid data"
}

console.log(dayName)
