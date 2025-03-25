var listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

var listOfLetters = ["a", "b", "c"];

var concatArr = listOfNumbers.concat(listOfLetters);

console.log(concatArr);

var newArr = [...listOfNumbers, 9];

const newObject = {
  name: "Jill",
  favoriteColor: "blue",
};

// Option 1
newObject.isActive = true

// Option 2
var modifiedObject = { ...newObject, isActive: false };

console.log(modifiedObject);

let arrayOfObjects = [
  {
    name: "Jill",
    favoriteColor: "blue",
  },
  {
    name: "Bill",
    favoriteColor: "red",
  },
  {
    name: "Bob",
    favoriteColor: "green",
  },
];

console.log(arrayOfObjects);

let restructuredArrayOfObjects = arrayOfObjects.map((element) => {
  return { ...element, isActive: true };
});

console.log(restructuredArrayOfObjects);
