//Array & Loop

// a single variable which hold more than one value
let numbers = [2, 4, 6, 7, 10, 11];
// each value has a number associated to it called - index number
// index number start from zero
let employees = [
    "Zak Pardis",
    "Mark",
    "Christian",
    "Timothy",
    "Abdul"
]
// first item =0
//last value =
console.log(employees[0]);
console.log(employees)
console.log(employees.length)
employees[2] = "Ender";
console.log(employees);

//add item
employees.push("Christain");
console.log(employees);
//remove last item
employees.pop();
console.log(employees);

let fruit = [
    "Banana",
    "Apple",
    "Kewi"
]
fruit.splice(1, 0, "Orange");
console.log(fruit)

//Search about loop in JS.
//10
//increment => ++
//decrement => --
//For loop

// use the for loop when the number of iteration is certain.
for (let i = 0; i < 6; i++) {
    console.log("Welcome to JavaScript");
}
let colours = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Black",
    "Purple",
    "Pink",
    "Black",
    "Brown"
]
for (let i = 0; i < colours.length; i++) {
    if (colours[i] == "Black") {
        continue;
    }
    else {
        console.log(colours[i])
    }
}

//Display numbers starting from 0 till 20
for (let i = 0; i <= 20; i++) {
    console.log(i);
}       