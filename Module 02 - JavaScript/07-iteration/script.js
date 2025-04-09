var arrayOfMovies = [
  "Frozen",
  "The Matrix",
  "Spiderman",
  "Up",
  "Batman",
  "Toy Story",
];

// The long way of logging each movie
// console.log(arrayOfMovies[0])
// console.log(arrayOfMovies[1])
// console.log(arrayOfMovies[2])
// console.log(arrayOfMovies[3])
// console.log(arrayOfMovies[4])

// for loop syntax

// 1. for keyword is used
// 2. In () we have 3 arguments separated by semi-colons
// 3. The code to execute is in the {}

// The 3 arguments
// 1. var index = 0
// this is the starting index

// 2. index < 5
// continue the loop while this is true

// 3. index++
// after a loop, increase the index by 1, and run again
// ++ means increase by 1

// console logs the length of the movies array
console.log(arrayOfMovies.length);

for (var index = 0; index < arrayOfMovies.length; index++) {
  console.log(arrayOfMovies[index]);
  console.log("-----------------------");
}
