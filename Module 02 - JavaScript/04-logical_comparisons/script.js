
var comparison1 = 1 === 2

var comparison2 = 2 < 3

// Checks if 2 is greater than OR equal to 2
var comparison3 = 2 >= 2

console.log("1.",comparison1);

console.log("2.",comparison2);

console.log("3.",comparison3);

// Expected output
// false
// true
// true

var greeting = "Hello"

var goodbye = "Goodbye"

var comparison4 = greeting === goodbye

var comparison5 = greeting === "Hello"

var comparison6 = greeting !== "Hello"

console.log("4.", comparison4);
console.log("5.",comparison5);
console.log("6.",comparison6);

// Expected output
// false
// true
// false

var stringTwo = "2"

var numTwo = 2

// triple equals checks for the value AND check for the data type
var comparison7 = stringTwo === numTwo

// double equals checks for only the value and NOT the data type
var comparison8 = stringTwo == numTwo

console.log("7.", comparison7);
console.log("8.", comparison8);

// Expected output
// false
// true

// And operator
// &&
console.log("9.", 1 === 1 && 1 === 2);

// Or operator
// ||
console.log("10.", 1 === 1 || 1 === 2);






