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

**this** stands for the current object. So, in constructor function, it has no value.
The value of **this** turns into the new object when a new object is created.

### Adding a method to an object

Only for individual object:

```
Car1.accelerate = function (gas) {
    console.log("speed up")
}
```

But adding as a whole will cause a type error.
