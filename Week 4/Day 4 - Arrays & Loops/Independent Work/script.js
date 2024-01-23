//! Day 3 Task Answers:

let num = 4;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Fizz Buzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(num)
}

// TODO: ARRAY & LOOPS 
// Array and Loops are usually used together to iterate 
//*ARRAY - a single variable which hold more than one value

let numbers = [2, 4, 6, 7, 10, 11];
//each value has a number called an "index number"
//* INDEX NUMBER - will always start from ZERO.
// first item = 0
// last item = total of items in array - 1 

let employees = [
    "Abid",// this will have an index number of 0
    "Zak",// index number 1
    "Bob",// index number 2
    "John"// index number 3
]

console.log(employees[0]);// ANS: Abid
console.log(employees);// ANS: 4
console.log(employees.length);//ANS: 5 - .length - will inform you of how many are in the employees array.

employees[2] = "Faisal";// employees[2] = "Faisal"; - will change the string of the Item in the index of 2 (which is Zak). 
console.log(employees);

//* ADDING ITEM
employees.push("Alim");
console.log(employees);

//* REMOVING LAST ITEM
employees.pop();// .pop() - will remove the last item in the array. 
console.log(employees);

//* Example of array ".splice" method...

let fruit = [
    "Banana",
    "Apple",
    "Kewi"
]
fruit.splice(1, 0, "Orange"); // fruit.splice(1, 0, "Orange"); - SYNTAX: variable.splice(IndexNumbertoStartFrom, AmountToRemveFromTheEnd, "StringNameOfnewlyaddedItemFromTheMentionedIndex") 
console.log(fruit)


//* LOOPS
//increment => ++
//decrement => --

//* FOR LOOP - used when the number of iteration is certain.

for (let i = 0; i < 6; i++) {
    console.log("Welcome to JS");
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
    if (colours[i] == "Black") {//
        continue;
    }
    else {
        console.log(colours[i])
    }
}


//TODO: TASK
//Display numbers starting from 0 to 20


for (let i = 0; i <= 20; i++) {  // let i = 0;    i <= 20;    i++  - each of these are seperate statements.
    /*
    Statement 1 - is executed (one time) before the execution of the code block.
    Statement 2 - defines the condition for executing the code block.
    Stetment 3 - is executed (every time) after the code block has been executed.
    */
    console.log(i);
}

