
// this variable is the type of array
var listOfNumbers = [2, 4, 6, 8]


// the includes method evalutes to a boolean (true or false)
var includesBoolean = listOfNumbers.includes(4)

// expected output: true


// the filter method produces a new array based on the callback function
var filteredNumbers = listOfNumbers.filter((element) => element > 5)

// expected output: [6, 8]


// the find method returns the first matching element
var matchingNumber = listOfNumbers.find((element) => element > 5)

// expected output: 6


