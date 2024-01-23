let num1 = 100;// this is a number value
let firstName = "Abid"; //String

//Below the of "typeof" PROPERTY will return the data type of the value
console.log(typeof num1);
console.log(typeof firsName);
console.log(typeof 50);

//BOOLEAN - has two values = =true, false
//They can be used to compare a condition and perform an action depending on the outcome whether its true or false
let education = true;
console.log(typeof education);

let a = 10;
console.log(5 == 3);

//! 
// null - is used to declare a value as empty
// null is DIFFERENT to Undefined
//* Undefined - is a variable which is not defined as values.
// null -- is a value which is defined Null Value.

let b;
console.log(typeof b);

let c = null;
console.log(typeof c); //Here the console will log 'object' instead of null (Which doe snot mean that it is an 'object' btw (according to Zakirullah Paradis))

let e = 958.995;
console.log(typeof e);

let f = "";
console.log(typeof f); // Whenever you use a double quotation the data type will always be STRING.

let bigInt = 98765432987654n;//* If you want to represnt a number value as a Big Integer DATA TYPE, then MAKE SURE you add an 'n' right after the "Big number" (nospaces inbetween the numer and the "n").  
console.log(typeof bigInt);

console.clear();

//! JS Type Conversions...
//When dealing with type conversions of strings (and the rest of the data types) you will need to use the following SYNTAXS, accordingly.

//*STRING:
//Syntax : String(ValueToConvert)
let g = 3;
console.log(typeof String(g)); // The console will log the value as a string of "3"

let h = String(100);
console.log(typeof h);//"100"

let i = String(true);
console.log(typeof i);
console.log(i);

//! Why do we need to do use Data Type CONVERSIONS??
//By default, the input of a user, into our website will be set to the data type of "STRING"... HENCE, why we use data type conversions to change them to the data type required, accordingly.

//*NUMBER:
//Syntax= Nubmer(ValueToConvert)
let j = "20";
console.log(Number(j)); //20 - Here the data type conversion from a string to a number has been intialized
let myName = "Abid Alim";
console.log(Number(myName));//NaN - (AKA "NotaNumber") will be logged as this is not a number despite the data type conversion

//true = 1, false = 0
//"true" will BY DEFAULT be given a value of "1", whereas "false" will be given tne value of "0"
console.log(Number(true)); //0
console.log(Number(false)); //1

console.clear();

//* BOOLEAN:
// Syntax = Boolean(ValueToConvert)
console.log(Boolean(0));//false - When the value is 0 the Boolean will be converted to False 
console.log(Boolean(1));//true 
console.log(Boolean("JavaScript"))//true
console.log(Boolean(""))//false - Inside the String there is no space, as well as no value inside.
console.log(Boolean(" "))//true - Inside the String there is a space. 
// SPACE - will be counted as a character.

//! VISN
console.log(Number(String(Number(true))));//1
//in the above code you will always start with the most inner parenthesis, and then work outwards.
//So the process will be in this order below...
console.log(Number(String(Number(true))));
console.log(Number(String(1)));// Above you learnt that when a boolean is converted to a number it will have one of the two values. True = 1 & False = 0.
console.log(Number("1"))// "1" - but in form of a string data type.
console.log(1);// 1 - In the last process it was converted into a Number.

console.clear();// dw g im just clearing the console, for a fresh start.

//* COERCION
// coercion - is an automatic conversion will happen.

console.log('12' / 2);// 6
console.log(2 * '2');// 4
console.log('10' / 2);// 5
console.log(true * 7);// 7 - "true" will automatically be converted to the value of 1.

//TRY THESE IN YOUR JS FILE:

//! CONCATENATION
/*
After a string, ALL the "+" will act as a concatenation.
//* EXAMPLES BELOW...
*/

console.log('1' + 2 + 2); //122
console.log('1' + 2 + true);//12true
console.log('12' + undefined);//12undefined
console.log('12' + null); //12null
console.log(2 + '1'); //21
console.log(2 + true); //3

//! VISN - The differnet types of STRINGS in JavaScript.
let firstMessage = "Welcome to JavaScript"; // Using DOUBLE QUOTATIONS
let secondMessage = 'Welcome to its JavaScript'; // Using SINGLE QUOTATIONS
let thirdMessage = `Welcome to JavaScript`; // Using BACKTICKS

console.log(`Hello ${firstName}, how are you?`);
console.log("Hello my name is ", firstName, ". How are you?")