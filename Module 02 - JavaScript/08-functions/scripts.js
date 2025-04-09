// Steps to declare a function

// 1. Use the function keyword
// 2. Provide a name for the function
// 3. Provide an open and closed paranthesis, also called the parameters
// 4. Provide an open and closed curly brackets

function logHello() {
  // Any code to execute goes within the curly brackets
  console.log("hello");
}

// Call the function by using the function name followed by paranthesis
logHello();
logHello();

// Passing data into a function
function addNumbers (num1, num2) {

var total = num1 + num2
    return total
}

var addition = addNumbers(1, 2)

console.log(addition);

// var addition2 = addNumbers(100, 200)

// console.log(addition2);

// Another way of writing a function:

// 1. declare a variable and give the variable a named
// 2. set the variable equal to the arrow function

// Syntax for an arrow function

// 1. starts with open and closed paranthesis
// 2. followed by an arrow =>
// 3. followed by curly brackets
// 4. the code to execute goes in the curly brackets

var myArrowFunction = () => {
  console.log("Code to execute");
};

myArrowFunction();
