// this has no value, it will be the new object when a new object is created
function Car(brand, type, name, price) {
  this.brand = brand;
  this.type = type;
  this.name = name;
  this.price = price;
}

const Car1 = new Car("Toyota", "sports car", "86", "40k");
const Car2 = new Car("Toyota", "SUV", "RAVV 4", "20k");

// default value
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English"; // nationality will be unified to the same for all objects
}