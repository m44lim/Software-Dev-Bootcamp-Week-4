let subject = "JS";


// TODO: FUNCTIONS
/*
Functions - are a block of codee used to perform a specific task.
It is also executed when "something" invokes it (calls it.)
*/

//Declaring a Function
function greeting() {
    console.log("Hello World!")
}

//Calling or Invoking the function
greeting();

//Example - User Login / Logout Function
let userOnline = true;
function userStatus() {
    if (userOnline == true) {
        console.log("User Sign in")
        console.log(userOnline);// When the " let userOnline = true" then the if statement will check its condidtions to see if there is a condition that applies if the let userOnline = TRUE; Hence logging USER SIGN IN
    }
    else {
        console.log("User Sign Out")
        console.log(userOnline); //Otherwise if the " let userOnline = false" then the if statement will check its condidtions to see if there is a condition that applies if the let userOnline = FALSE; Hence logging USER SIGN OUT
    }
}
userStatus();

//* FUNCTIONS WITH PARAMETERS/ARGUMENTS

// Parameters - are defined when we declare the function. Data that is expected.
// Arguments - are the data we pass to the function when we call it.

function atm(accountNumber, amount) { // function atm(accountNumber, amount) - INSIDE THE PARAMETERS there are two 
    console.log(`Account number: ${accountNumber}. Amount: ${amount}`);

}

atm(12345678, 300);
atm(87654321, 100);

function sum(num1, num2) {
    return num1 + num2; // return key - is used to return something and then terminate the function.
}
console.log(sum(20, 10));
console.log(sum(50, 50));

//! TASK - Create a function which will say Hello 'PersonName', 'How are you', that you will pass as asn argument

let personName = prompt("Whats your name!");

function greet(personName) {
    console.log(`Hello ${personName}, how are you?`);

}
greet(personName);

console.clear();

//! SCOPE in JS
/*
BLOCK SCOPE - let, const
LOCAL SCOPE - var, let, const
GLOBAL SCOPE - if you declare a variable outside function, it has global scope

*/

//let name = "Matt";

{
    const name = "John";
}
// var keyword doesn't have block scope
console.log(`Hello ${name}`);//Hello Matt
function scope() {
    console.log(subject);
}
scope();

//Fuctions that call another function
function double(num1) {
    return num1 * 2;
}
function quadruple(num2) {
    return double(num2) * 2;
}

console.log(quadruple(20));

//Function can be hoisted - Called before they are declared
//* ARROW FUNCTION
// omit the reurn statement/explicit return
// omit the function keyword
// When there is only 1 parameter, brackets are optional

let add2 = num => num * 2;
console.log(add2(10));

let multiply = (x, y) => x * y;
console.log(multiply(7, 7));

/*
!Tasks:
1: Write a function that takes in a first name and a surname as arguments and returns a message greeting them.
2: Write a function that takes in a string as an argument and sorts the string into alphabetical order and returns the result.
3: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as an argument and compares the pin and withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient approve the transaction, if not decline the transaction.
*/