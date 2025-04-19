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

// Syntax for the filter/map/find methods
// 1. state the initial array
// 2. use .filter() or .map()
// 3. callback function inside of the paranthesis

var restructuredArray = listOfNumbers.map((number, index) => {
  if (index % 2 === 0) {
    return number * 10;
  }
  return number;
});

console.log(restructuredArray);

// the filter method produces a new array based on the callback function
var filteredNumbers = listOfNumbers.filter((element) => element > 5);

// console.log(filteredNumbers);
// expected output: [6, 7, 8]

// the find method returns the first matching element
var matchingNumber = listOfNumbers.find((element) => element > 5);

// console.log(matchingNumber);
// expected output: 6

// More bonus methods!

// the splice method
// .splice(startIndex, numberToRemove, item1, item2, ...)
// Modifies the original array by removing or replacing existing elements and/or adding new ones

// Example: remove 2 elements starting at index 1 and insert 99 and 100
listOfNumbers.splice(1, 2, 99, 100);
console.log("After splice:", listOfNumbers);
// expected output: [1, 2, 99, 100, 5, 6, 7, 8]

// the slice method
// .slice(startIndex, endIndex)
// Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

var slicedArray = listOfNumbers.slice(1, 4);
console.log("Sliced array:", slicedArray);
// expected output: [2, 99, 100]
