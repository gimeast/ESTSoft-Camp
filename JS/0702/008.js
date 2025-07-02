const user = { name: "ghost", age: 1000 };

console.log(user.hasOwnProperty("name"));
console.log(user.hasOwnProperty("mbti"));

console.log(Object.hasOwn(user, "name"));
console.log(Object.hasOwn(user, "mbti"));
