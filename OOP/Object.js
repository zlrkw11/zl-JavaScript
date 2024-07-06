// create an object
const car = { type: "Mitsubishi", model: "Lancer", color: "blue" };

// access the object
car.color;
car["color"];
const x = "color";
car[x];

// add / delete properties
car.year = 2009;
delete car.year;

// object methods
car.run = function () {
  console.log("vroo,");
};
