const animals = ["puppy", "cat", "parret"];

animals.push("Rabbit");
console.log(animals);
console.log(animals.slice(1, 3));
console.log(animals);
console.log(animals.splice(1, 2, "Elephant"));
console.log(animals);
console.log(animals.splice(1, 0, "cat"));
console.log(animals);

const arr = ["apple", "mango", "banana"];
arr.reverse();
console.log(arr);
