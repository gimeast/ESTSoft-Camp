/**
 * Array
 */

const fruits = ["apple", "mango", "banana"];

fruits[1] = "cherry";
console.log(fruits);

fruits.unshift("watermelon");
fruits.push("graph");
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.pop();
console.log(fruits);

console.log(fruits.slice(1, 2));

const str = "Ghost, World, Sunny";
const names = str.split(", ");
console.log(names);

const users = "hello world";
console.log(users.indexOf("w"));

const animals = ["puppy", "cat", "parrot"];
console.log(animals[animals.indexOf("cat")]);

const getRandom1 = function (value) {
    return Math.floor(Math.random() * value) + 1;
};
const getRandom2 = (value) => {
    return Math.floor(Math.random() * value) + 1;
};

console.log(`getRandom1 => ${getRandom1(10)}`);
console.log(`getRandom2 => ${getRandom2(10)}`);

const obj = {
    name: "kim",
    age: 20,
    thisName: function () {
        return this.name;
    },
};
console.log("obj:", obj.thisName());

const obj2 = {
    name: "kim2",
    age: 20,
    thisName: obj.thisName(),
};
console.log("obj2:", obj2.thisName);

const obj3 = {
    name: "kim3",
    age: 20,
    thisName: () => {
        return this.name;
    },
};
console.log("obj3:", obj3.thisName());

const obj4 = {
    name: "kim4",
    age: 20,
    thisName: obj3.thisName,
};
console.log("obj4:", obj4.thisName());
