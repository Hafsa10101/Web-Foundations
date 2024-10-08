// Data types in js: total 8
// Js is dynamically typed, meaning that there exist data types, but variables are not bound to any of them.

// Data type 1-7 are primitive data types - their values can contain only a single thing (be it a string or a number or whatever)

// 1: Number - the number type represents both integer and floating point numbers.
// The number data type has some special numeric values - Infinity, -Infinity and NaN.
// Number data types can represent values in the range of ±(2^53-1).
let num1 = 7;
let num2 = 4.23;

// 2: BigInt - the BigInt type represents number larger than ±(2^53-1).
// A BigInt value is created by appending n to the end of an integer.
let bigInt = 1234567n;

// 3: String - A string in JavaScript must be surrounded by quotes.
// Strings are immutable: Strings cannot be changed, only replaced.
/* In JavaScript, there are 3 types of quotes:
a. Double quotes: "Hello".
b. Single quotes: 'Hello'.
c. Backticks: `Hello`. */
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.
let firstName = "Hafsa";

// Strings declared using `` are called template literal
// we can embed js in them & can declare them over multiple lines
console.log(`Hi, ${firstName}.`);

// Concatenating string using template literal and +
let greeting = "Hello";
let name = "Hafsa";
console.log(greeting + ", " + name); // concatenation using +
console.log(`${greeting}, ${name}`); // concatenation using template literal, have better readability

// including expressions in string
let hours = 4;
console.log(`I study ${hours * 60} minutes everyday`);

// multiline string using ``
let mulLineStr = `Hello, everyone.
My name is Hafsa.
I am a web developer.`; // Template literals respect the line breaks, to have equivalent output using '' & "" we need to use line break character \n
console.log(mulLineStr);

// including quotes in strings
console.log(`She said, "They are very mean".`); // method one: using different quotations
console.log("She said, \"They are mean\"."); // method two: escaping character using \

// Converting numeric string to number and vice-versa
let numStr = "12345";
let num = 12345;
console.log(typeof Number(numStr)); // type changed to number
console.log(typeof String(num)); // type changed to string

// 4: Boolean - The boolean type has only two values: true and false.
let isTrue = true;

// 5: null - null is a separate type on it's own which contains only the null value.
// null represents “nothing”, “empty” or “value unknown”.
let age = null;

// 6: undefined - undefined is a separate type on it's own which contains only the undefined value.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined.
let lastName;
console.log(lastName); // output: undefined

// 7: Symbol - The symbol type is used to create unique identifiers for objects
console.log(typeof Symbol("id")); // output: symbol

// 8: Object - The only non-primitive data type
// objects are used to store collections of data and more complex entities.

// typeof operator returns the type of the operand, basically allows us to see which type is stored in a variable.
// The result of typeof null is "object". That’s an officially recognized error in typeof.
// The result of typeof alert is "function", because alert is a function. Functions belong to the object type. But typeof treats them differently, returning "function". 


// String Methods:  a method is a bit of functionality built into the language or specific data types.
//All string methods return a new string. They don't modify the original string.
let str = "Hafsa Shaikh";

// to find the length of the string
let length = str.length;
console.log(length);

// extracting string character
console.log(str.charAt(0)); // output: H, charAt() returns the character at the specified index position in a string, it does not accepts negative indices, if no char is found returns empty string.

console.log(str.charCodeAt(0)); // output: 72, charCodeAt() returns the UTF-16 code of the character at the specified index position in a string.

console.log(str.at(2)); // output: f, at() is a newer string method it returns the character at the specified index in a string, it also accepts negative indices.

console.log(str[2]); // output: f, makes the string looks like array(but it is not), if no char is found it returns undefined, does not accepts negative indices.

// extracting string parts
// slice(start, end): extracts a part of a string and returns it in a new string. 
// The method takes 2 parameters: start position, and end position (end not included).
// Supports negative indices
// If starting position index is greater than ending position index it returns an empty string.
console.log(str.slice(0, 6)); // output: Hafsa

// substring(start, end): same as slice()
// But it does not support negative indices, negative values are treated as 0.
// If starting position index is greater than ending position index it swaps the two values.
console.log(str.substring(6, 0)); // output: Hafsa

// substr(start, length): extracts a part of string from start till the specified length.
// Accepts negative values
// it is deprecated
console.log(str.substr(0, 5)); // output: Hafsa

// Changing cases
// converting string to uppercase
console.log(str.toUpperCase());
// converting string to lowercase
console.log(str.toLowerCase());

// Concatenating string
console.log(str.concat(" is an amazing coder!"));

// Removing white spaces in string
let strWithSpaces = "    ".concat(str.concat("    "));
console.log(strWithSpaces);

// trim(): removing white spaces from both sides of string(start and end)
console.log(strWithSpaces.trim());

// trimStart(): removing white spaces from the start of the string
console.log(strWithSpaces.trimStart());

// trimEnd(): removing white spaces from the end of the string
console.log(strWithSpaces.trimEnd());

// Padding string with any char or space
// padStart(targetLengthOfString, char): It pads start of the string with another string (multiple times) until it reaches a given length, if the string is already of the specified length no padding is done.
console.log(str.padStart(15, "*"));

// padEnd(targetLengthOfString, char): It pads end of the string with another string (multiple times) until it reaches a given length, if the string is already of the specified length no padding is done.
console.log(str.padEnd(15, "*"));

// printing a string multiple times
// repeat(): it returns a string with a number of copies of a string, it returns a new string, it does not change the original string.
console.log(str.repeat(3));

// replacing string content
let newStr = "My name is Hafsa Shaikh. Hafsa has studied CS. Hafsa loves to code. Hafsa loves cats."

// replace():  replaces a specified value with another value in a string
// It does not change the string it is called on instead returns a new string
// It replaces only the first match
console.log(newStr.replace("Hafsa", "Mavie"));

// replaceAll()
// replaces all the occurrences of the value in a string
// allows to specify a regular expression instead of a string to be replaced, if the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
console.log(newStr.replaceAll("Hafsa", "Mavie"));

// converting a string to an array
// split(separator): A string can be converted to an array with the split() method.
// If the separator is omitted, the returned array will contain the whole string in index [0].
// f the separator is "", the returned array will be an array of single characters.
console.log(newStr.split("."));

let text = "a,b,c,d,e,f";
console.log(text.split(","));

console.log(str.split(""));


// Conditionals in Js
// Conditional statements are used to perform different actions based on different conditions. They allow your code to make decisions and execute certain blocks of code only when specific conditions are met.

// if-else
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
// A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

age = 18;

if(age >= 18){
    console.log("Congratulations, you are an adult!");
}else{
    console.log("Go back to your mommy kid!");
}

// if-else if-else
let marks = 85;
if(marks >= 75){
    console.log("Distinction");
}else if(marks >= 50){
    console.log("Pass");
}else{
    console.log("Fail");
}


// Logical Operators
// || (OR): if any one of the operator is true it returns true, it returns false only when both are false
//  chain of OR || returns the first truthy value or the last one if no truthy value is found.
// Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

// && (AND): if any of the operator is false it returns false, it returns true only when both are true
// chain of AND && returns the first falsy value or the last value if none were found.

// (NOT) !: returns the inverse value
//  double NOT !! is sometimes used for converting a value to boolean type
// he first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.
// double NOT !! works the same as Boolean() method.

// (Nullish Coalescing) ??

//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.
// Precedence of AND && is higher than OR ||

// Check the login exercise
// if(user === "Admin"){
//     if(password === "TheMaster"){
//         console.log("Welcome!");
//     }else if(password === "" || password === null){
//         console.log("Cancelled");
//     }else{
//         console.log("Wrong passwords");
//     }
// }else if(user === "" || user === null){
//     console.log("Cancelled");
// }else{
//     console.log("I don't know you");
// }


// switch
// switch does strict equality check of the var and the case values.
let dayNum = 1;

switch(dayNum){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Number");
}

// grouping cases
let number = 1;

switch(number){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log("Odd");
        break;
    case 2:
    case 4:
    case 6:
    case 8:
        console.log("Even");
        break;
    default:
        console.log("Only numbers between 1 - 9.")
}

// Ternary operator: same like if-else
// condition ? run this code : run this code instead
age >= 18 ? console.log("Congratulations, you are an adult!") : console.log("Go back to your mommy kid!");

let isBirthday = true;
const greet = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";

console.log(greet);

// mul ?: A sequence of question mark operators ? can return a value that depends on more than one condition.
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
