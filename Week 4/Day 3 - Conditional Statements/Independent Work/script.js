//? RECAP NOTES FROM DAY 2 LESSON
//* COERCION - this is a 
console.log(
    "10" - 2
) //8 - Here there is an automatic type conversion, AKA COERCION

//! Example of Boolean conversion
console.log(Boolean(0));// false - This is because the data type of the 0 is a 'Number'.
console.log(Boolean("0"));// true - this is becaue of the fact that the 0 is a 'string' not a 'Number'.

//* BOOLEAN:
// Syntax = Boolean(ValueToConvert)
console.log(Boolean(0));//false - When the value is 0 the Boolean will be converted to False 
console.log(Boolean(1));//true 
console.log(Boolean("JavaScript"))//true
console.log(Boolean(""))//false - Inside the String there is no space, as well as no value inside.
console.log(Boolean(" "))//true - Inside the String there is a space. 
// SPACE - will be counted   as a character.
console.log(String(Boolean(String(4 / false))));// (4/false) - is basically 4 / divided by 0.. as false will equal 0 when converted into a number.
console.log(String(Boolean("infinity")));
console.log(String(true));// "infinity" has become true as a boolean data type as any string with even 1 character in between the quotations will be classed as 'true'.
console.log("true");

//CONCATINATOR Usage
console.log(3 + 4 + true + '2' + 10 + true + 11 + '2' + 1);//8210true1121


Number("Java"); //NaN 

//? Day 3 - Conditional Statements 

/* 
Syntax:

if(condition){task to do}
else if(condition){task to do}
else if (condition){task to do}
else{task to do}

*/
let weather = "Raining";

if (weather == "Raining") {
    console.log("Take umbrella, it's raining!");
}
else if (weather == "Sunny") {
    console.log("It's sunny, take your sun glasses!");
}

//else - if none of the previous conditions arent executed then the final condition (i.e. else) will be outputted
else {
    console.log("The weather would be foggy or cloudy, wear a jacket");
}
//! Only add a semi-colon at the end of the conditional statement. AS SHOWN ABOVE 

/*
 TODO: TYPES OF OPERATORS:
+   addition
-   subtraction
/   devision
*   multiply
%   moduler
++  increment
--  decrement
=       assignment
==      equal too -> comparison
===     ->equal value and equal data type.
! in === both the data type and value should be equal
! in == only the value should be equal
> greater
< less than
>= greater or equal
<= less than equal
! LOGICAL OPERATORS:
&& ----- and
|| ----- or

*/

//Example of '==' and '==='
let a = "10";
console.log(a === 10);//false - Because the data type must also be the equal/same as well as the value

let b = "10";
console.log(b == 10);//true - Because the " equal sign" is used for if checking the value is equal. Not the data type.

/*
CLASS TASK:

I would like you all to write a code to check a if a person is eligible for voting or not.
*/

let votingAge = 18;

if (votingAge <= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("Sorry, you're not eligible for this vote");
}

// TODO: SWITCH STATEMENTS Below..
// These are useful when you hve one condition being checked against multiple cases. (As diplayed below...)

let day = "Monday"
switch (day) {
    case "Monday": //BE AWARE THAT ":" (COLON) is being used
        console.log(`Happy Monday!`);
        break;
    case "Tuesday":
        console.log("Second day of the week!");
        break;
    case "Wednesday":
        console.log("Midway through the week!");
        break;
    case "Thursday":
        console.log(`It's almost Friday!`);
        break;
    case "Friday":
        console.log("Happy Friday!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Day not recognized, try again!")
}

// Switch Statement Example 2 - Grading Example:

let testScore = 70;// The test score is 70
switch (true) { //If the case is "true" then...
    case testScore >= 75: //If the score is greater than or equal to 75 then...
        console.log(`Distinction`);// The console will log the score as "Distinction".
        break;// Thereafter the code will break and end as the statement has brrn fulfilled.
    case testScore >= 60: //Same thing will apply as the above case.
        console.log(`Merit`);
        break;
    case testScore >= 50:
        console.log(`Pass`);
        break;
    default: //...but if in any of the cases is not checked tehn the default case will be passed through the code... 
        console.log(`Fail`);///hence, the console logging "Fail".
}

//let password = "fdaldfka"
let number = 20;

//! TASKS
// 1

let age = 14;
if (age <= 18) {
    console.log(`Sorry, you are too young to be drinking`);
}
else {
    console.log(`What would you like to drink?`);
}

// 2

let password = "asdkjaah";
if (password.length < 8) {
    console.log(`Your password must consist of 8 characters`)
} else {
    console.log(password)
}

//3



let x = 30;
switch (true) {
    case x / 3:
        console.log(`This is divisible by 3`);
        break;
    case x / 5:
        console.log(`This is divisible by 5.`);
        break;
    case x / 3 && 5:
        console.log(`This number is divisible by 3 and 5.`);
        break;
    default:
        console.log(`This number is not divisible by 3 or 5.`);
}

//4

let d = 9;
switch (true) {
    case d / 3:
        console.log(`fizz`);
        break;
    case d / 5:
        console.log(`buzz`)
            ;
        break;
    case d / 3 && d / 5:
        console.log(`fizz buzz`);
        break;
    default:
        console.log(`This number is not divisible by 3 or 5.`)
}

// 4 //! CORRECT ONE

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
