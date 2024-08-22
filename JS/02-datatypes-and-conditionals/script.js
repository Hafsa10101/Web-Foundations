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
/* In JavaScript, there are 3 types of quotes:
a. Double quotes: "Hello".
b. Single quotes: 'Hello'.
c. Backticks: `Hello`. */
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.
let firstName = "Hafsa";
console.log(`Hello, ${firstName}.`);

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
