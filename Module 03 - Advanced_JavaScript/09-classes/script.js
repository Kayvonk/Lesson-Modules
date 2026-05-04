// A class is a blueprint for creating objects

class Vehicle {
  // The constructor runs when a new instance is created
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Methods are functions defined inside a class
  describe() {
    console.log(this.year + " " + this.make + " " + this.model);
  }
}

// Use the new keyword to create an instance of the class
const vehicle1 = new Vehicle("Toyota", "Camry", 2020);
const vehicle2 = new Vehicle("Honda", "Civic", 2022);

console.log(vehicle1);
console.log(vehicle2.make);

vehicle1.describe();
vehicle2.describe();

// A class can extend another class to inherit its properties and methods
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    // super() calls the parent class constructor
    super(make, model, year);
    this.numDoors = numDoors;
  }
}

const car1 = new Car("Ford", "Mustang", 2023, 2);
console.log(car1);
car1.describe();
