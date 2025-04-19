// if statement syntax
// 1. if
// 2. condition in ()
// -the condition must resolve to either true or false
// 3. code to execute in {}
//  -the code in {} only executes if the condition is true

// we can add an else if statment to chain more conditions

// we can also end with an else statment which will run when the if and else if conditions are all false

var number = 10;

if (number < 5) {
  console.log("Number is less than 5");
} else if (number === 5) {
  console.log("Number is equal to 5");
} else {
  console.log("Number is greater than 5");
}

// Expected output
// console.log("Number is equal to 5");


// The NOT operator !
// Using ! before a boolean expression reverses the boolean value
// (turns a true to false, and vice versa)

let booleanValue = true

booleanValue = !booleanValue

console.log(booleanValue);

// Expected output
// 

// Challenge:
// Write an if statement that uses the NOT operator in the condition and execute a console log when true