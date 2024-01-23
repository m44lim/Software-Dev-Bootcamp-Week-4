console.log("Welcome to JS");
console.error("Welcome to JS");
console.warn("Welcome to JS");
console.clear();

let num1; //declaration
num1 = 30; //initialization
console.log(num1);

let num2 = 50;
console.log(num2);
//ways of creating variable in JS
//four ways to create a variable in JS

//!Ways to declare a variable
// let number1 = 10;

// {
// This variable is only accessible inside the curly brackets
//     let number1 = 50;
//     console.log(number1) //50
// }

// just above the curly brackets the "let number1" is 10, hence the number1 will equal 10
// console.log(number1); //10


var number1 = 10;
{
    // With "var" the variable will be overrided so that when the "number1" console is logged will be 30.
    var
        number1 = 30;
}

// So the last variable in the code will override
console.log(number1);//30

// var was the old way of declaring variables BUT this is NOT RECCOMENDED
// use let in such cases

// Main differnece with let and const is that const's variable CANNOT be changed later in  the code
const number = 20;

// UNless you use value in the const, like below..
const value = 50;
value = 60;


