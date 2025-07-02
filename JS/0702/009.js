//구조분해할당
const animals = ["puppy", "cat", "parrot", "lion", "tiger", "duck", "panda"];
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = animals;
console.log(a, b, rest);

const newArray = [...animals, ...numbers];
console.log(newArray);

function calc(a, b) {
    return [a + b, a / b];
}

const array = calc(10, 2);
const [sum, div] = array;
console.log(sum);
console.log(div);

const array2 = ["apple", "mango", "banana"];
const [a1, b1, c1] = array2;
console.log(a1);
console.log(b1);
console.log(c1);

const [sum1, div1, mul1 = "No multiply", diff] = calc(10, 2);
console.log(sum1, div1, mul1, diff);
