// a variable set with var can be assigned and redeclared

var firstName = "Steve";
console.log(firstName);

var firstName = "Jill";
console.log(firstName);

// a variable set with let can be reassigned but cannot be redeclared

let movie = "Spirited Away";
console.log(movie);

movie = "Princess Mononoke";
console.log(movie);

// a variable set with const can not be reassigned or redeclared

const num = 3;

function squareNumber() {
  const num = 5;

  return num * num;
}

const numSquared = squareNumber();
console.log(numSquared);
