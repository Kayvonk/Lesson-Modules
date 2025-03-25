// this variable is the type of array
var listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];


// the includes method evalutes to a boolean (true or false)
var includesBoolean = listOfNumbers.includes(4);

// expected output: true

// the push method adds a value to the end of an array
listOfNumbers.push(10);
// console.log(listOfNumbers);

// the pop method removes a value from the end of an array
listOfNumbers.pop();
// console.log(listOfNumbers);


// bonus methods

// Syntax for the filter/map methods
// 1. state the initial array
// 2. use .filter() or .map()
// 3. callback function inside of the paranthesis

var restructuredArray = listOfNumbers.map((number, index) => {
  if (index % 2 === 0) {
    return number * 10;
  }
  return number;
});

// console.log(restructuredArray);

// the filter method produces a new array based on the callback function
var filteredNumbers = listOfNumbers.filter((element) => element > 5);

// console.log(filteredNumbers);
// expected output: [6, 7, 8]

// the find method returns the first matching element
var matchingNumber = listOfNumbers.find((element) => element > 5);

// console.log(matchingNumber);
// expected output: 6
