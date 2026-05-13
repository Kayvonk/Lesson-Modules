console.log("1.", 1 === 2);

console.log("2.", 2 < 3);

console.log("3.", 2 >= 2);

// Expected output
// false
// true
// true

var greeting = "Hello";

var goodbye = "Goodbye";

console.log("4.", greeting === goodbye);
console.log("5.", greeting === "Hello");
console.log("6.", greeting !== "Hello");

// Expected output
// false
// true
// false

var stringTwo = "2";

var numTwo = 2;

// triple equals checks for the value AND check for the data type
console.log("7.", stringTwo === numTwo);

// double equals checks for only the value and NOT the data type
console.log("8.", stringTwo == numTwo);

// Expected output
// false
// true

// And operator
// &&
console.log("9.", 1 === 1 && 1 === 2);

// Or operator
// ||
console.log("10.", 1 === 1 || 1 === 2);
