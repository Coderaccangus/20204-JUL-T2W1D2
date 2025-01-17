console.log ("Conditionals, Loops & Functions")

// If

let noOfStudents = "20"

// loose equality
if (noOfStudents == 20) {
    console.log("loose")
    console.log("There are 20 students")
}

// strict equality ===
if (noOfStudents === 20) {
    console.log("strict")
    console.log("There are 20 students")
}

// if ...else if ladder
// and - &&
// or - || - shift backslash
const hour = 12
if (hour < 12) {
    console.log("Good Morning")
} else if (hour < 17) {
    console.log("Good Afternoon")
} else if (hour <20) {
    console.log("Good Evenining") 
} else {
    console.log("Good Night")
}

// Switch Case
const day = 2

switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
    default:
        console.log("Wrong Day")   
}

// Multiple switch case - fall through
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Week day")
    case 6:
    case 7:
        console.log("Weekend")
    default:
        console.log("Wrong Day")
}

// Ternary Operator

const isRaining = true

let action = ""

if (isRaining) {
    action = "Take an umbrella"
} else {
    action = "Nothing"
}

console.log(action)

// python - what to do for true condition if condition else what to do for false
// condition ? what to do for true condition: what to do for false condition
const action2 = isRaining ? "Take an umbrella" : "Nothing"

console.log(action2)

// short circuit logic
// &&
// ||
let num = 5
let den = 10
let division

if (den !==0) {
    division = num / den
}

console.log(division)

let division2 = den !== 0 && num / den
console.log(division2)

// ||
let username = "user1"
let displayName = username

if (!username) {
    displayName = "guest"
}

console.log(displayName)

let displayName2 = username || "guest"
console.log(displayName2)

// Loops
for (let i = 0; i < 5; i++){
    console.log(`this is iteration number${i}`)
}


// while and do...while loop
let j = 0

while (j < 5) {
    console.log(`j's value in while loop: ${j}`)
    j++
}

let k = 0 
do {
    console.log(`k's value i do while loop: ${k}`)
    k++
} while (k < 5)