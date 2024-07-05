# Object

example would be like a car. Cars share the same properties but the values differ from
car to car.

objects can contain more values compared to variables.

```
const car = { type: "Mitsubishi", model: "Lancer", color: "blue" };
```

Object Literal
A list of **name:value** pairs inside curly braces.

```
{type: "Mitsubishi", model: "Lancer", color: "blue"}
```

can use the **new** keyword to create a new object.

```
const person = new Object();
```

Objects are containers for Properties and Methods.

Properties are named Values.

Methods are Functions stored as Properties.

Properties can be primitive values, functions, or even other objects.

### JavaScript Primitives

primitive values are values that have no properties or methods.
7 types:
string
number
boolean
null
undefined
symbol
bigint

primitives are immutable unlike objects.

### Objects Are Mutable

addressed by reference, not by value.

```
const x = person;
```

x is **not a copy of** person. The object x **is** person.
they share the same memory address.
any changes made to x will also change the person

refer to: https://www.w3schools.com/js/js_objects.asp

## Properties

adding property:
simply giving it a value

```
person.nationality = "English";
```

deleting property:
delete keyword:

```
delete person.age;

or

delete person["age"];
```

## Object Methods
