const arr = [10, 20, 30, 40, 50];

let bigger20 = arr.find((x) => x >= 20);
console.log(bigger20);

bigger20 = arr.findIndex((x) => x >= 20);
console.log(bigger20);

bigger20 = arr.filter((x) => x >= 20);
console.log(bigger20);

const numbers = [15, 20, 17, 3, 80];
console.log(numbers.find((number) => number >= 20));

const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);
