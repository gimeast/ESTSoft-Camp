const arr = [1, 2, [3, 4, [5, 6]]];
const flatArr = arr.flat(2);
console.log(flatArr);

const users = ["Daniel", "Amy", "donald", "Micheal", "Juliet"];
users.sort();
console.log(users);

const numbers = [51, 2, 12, 1, 22, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven);

//1
console.log(users.some((v) => v === "Amy"));
//2
console.log(numbers.some((v) => v > 3));
//3
const fruits = ["apple", "banana", 3];
console.log(fruits.every((v) => typeof v === "string"));
//4
const emails = ["test@example.com", "hello@domain.com", "user@suite.org"];
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
console.log(emails.every((v) => emailRegex.test(v)));
