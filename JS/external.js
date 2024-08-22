// Variables
// let keyword is used to declare variables
let name = "Hafsa";
let surname = "Shaikh";

console.log(name);
console.log(surname);

let age = 22;
console.log(age); // output: 22

age = 0; // re-assigning variable
console.log(age); // output: 0

// const keyword to declare constant variables: whole value cannot be changed
const pi = 3.14;
// pi = 4; // this will throw error, as re-assignment cannot be done to constant variables
console.log(pi);

// var keyword to declare variables: it is same as let but it is not used anymore
var firstName = "Mavie";
console.log(firstName);


// Numbers
console.log((3 + 2) - 76 * (1 + 1)); // it will evaluate the expression and print the answer

// exercises - odin project
console.log(22 + 7); 

let sixNum = 1 + 2 + 3 + 4 + 5 + 6;
console.log(sixNum);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9 * a); // also tried this directly in console by just typing 9 * a
let b = 7 * a; // if i write this statement directly in the console it returns undefined, but when later i do console.log(b) it prints the correct value of the expression i.e. 70
// undefined indicates that the variable declaration itself doesn't produce a value to display. This is because the console is showing the result of the declaration itself, not the value of b.
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage); // if i write percentage directly in the console it will give me the output
