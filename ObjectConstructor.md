# Object Constructors

```
function Car(brand, type, name, price) {
  this.brand = brand;
  this.type = type;
  this.name = name;
  this.price = price;
  this.start = function () {
    return this.name + " is starting";
  };
}

const Car1 = new Car("Toyota", "sports car", "86", "40k");
const Car2 = new Car("Toyota", "SUV", "RAVV 4", "20k");
```
