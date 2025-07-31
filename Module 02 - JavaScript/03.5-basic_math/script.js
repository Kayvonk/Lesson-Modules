console.log(5 + 3);     // addition
console.log(10 - 4);    // subtraction
console.log(6 * 2);     // multiplication
console.log(8 / 2);     // division

var num1 = 7;
var num2 = 3;

console.log(num1 + num2);

console.log(num1 * num2);

// Math with parentheses
var result = (num1 + num2) * 2;
console.log(result);

// exponents and modulus
console.log(2 ** 3);  // 2 to the power of 3 = 8
console.log(10 % 3);  // 10 divided by 3 leaves a remainder of 1

// You can use prompt() in the browser to get user input
var numA = prompt("Enter a number:");
var numB = prompt("Enter another number:");

// prompt() gives us strings, so we need to convert them to numbers
var sumTotal = Number(numA) + Number(numB);

console.log(`The sum of ${numA} and ${numB} is ${sumTotal}!`);
