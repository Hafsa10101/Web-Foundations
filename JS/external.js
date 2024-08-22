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


// Arithmetic Operators
let x = 5;
let y = 2;

// x and y are operand and + is the operator
let sum = x + y; // addition operator(+)
console.log(sum);

let difference = x - y; // subtraction operator(-)
console.log(difference);

let product = x * y; // multiplication operator(*)
console.log(product);

let quotient = x / y; // division operator(/)
console.log(quotient);

let remainder = x % y; // modulus operator(%)
console.log(remainder);

let preIncrement = ++x; // increment operator(++), in this case pre-increment, means value will first be incremented then assigned to the variable
console.log(preIncrement);

let preDecrement = --x; // decrement operator(--), in this care pre-decrement, means value will first be decremented then assigned to the variable
console.log(preDecrement);

let postIncrement = x++; // post-increment, means value is first assigned to the variable then it will be incremented
// here, first the value of x i.e 5 is assigned to the postIncrement variable, so postIncrement variable contains the value 5 then after that the value of x will increment by 1 making the new value of x as 6
console.log(postIncrement); // output: 5
console.log(x); // output: 6

let postDecrement = x--; // post-decrement, means value is first assigned to the variable then it will be decremented
// here, first the value of x i.e 6 is assigned to the postDecrement variable, so postDecrement variable contains the value 6 then after that the value of x will decrement by 1 making the new value of x as 5
console.log(postDecrement); // output: 6
console.log(x); // output: 5

let power = x ** 2; // exponentiation operator(**), x²
console.log(power);

let pow = Math.pow(x, 2); // same as ** operator
console.log(pow);

// Operator precedence: describes the order in which operators are performed in an arithmetic operation
/* The operator precedence from highest to lowest are as follows:
1. ++, -- (postfix)
2. **
3. *, /, %
4. +, - 
5. ++, -- (prefix)  
If and expression container operator with same level of precedence then the evaluation proceeds from left to right.
When using parentheses the operations inside he parentheses are computed first. */