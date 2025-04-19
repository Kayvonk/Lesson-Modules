const personArray = ["Sarah", 22, "blue"];

console.log(personArray[0]);

const personObject = {
  name: "Sarah",
  age: 22,
  favoriteColor: "blue",
};

console.log(personObject.name);

// Object destructing allows us to declare variables using the key-value pairs of an object

const {name, age} = personObject

console.log(age);

