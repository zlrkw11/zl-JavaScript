length method, returns an integer representing size:

```
const cars = ["Lancer", "Axela", "Corolla", "Prius"];
let size = cars.length;
4
```

to string method, returns a string: Lancer,Axela,Corolla,Prius

```
.toString()
```

at() method, **returns** an indexed element

```
cars[2]
Corolla
```

join() method, behaves like toString(), but we can specify the separator

```
cars.join(" * ");
Lancer * Axela * Corolla * Prius
```

## Pop and Push

modifies the arrays themeselves
pop() method, removes the last element from an array
push() method adds a new element at the end

```
cars.pop();
cars.push();
```
