//1
const person = { name: "Ghost", age: 20 };
console.log(person.name);
//2
person["height"] = 180;
console.log(person);
//3
const arr = ["A", "B", "C"];
const newArr = [];
for (const v of arr) {
    newArr.push(v.toLowerCase());
}
console.log(newArr);

arr.forEach((v) => newArr.push(v.toLowerCase()));
console.log(newArr);

const user = {
    name: "A",
    age: 3,
    pets: [
        { name: "A1", age: 1 },
        { name: "A2", age: 2 },
    ],
    sayHello() {
        console.log(`Hello, ${this.name}`);
    },
    skills: ["running", "swim"],
};
user.sayHello();
delete user.pets;
console.log(user);
console.log(user.skills[1]);

user["mbti"] = "ISTJ";
delete user.age;
user.name = "B";
console.log(user);

user.sayBye = () => {
    return `Goodbye ${user.name}`;
};

console.log(user.sayBye());

user.mySkills = function () {
    return `나의 능력은 ${this.skills} 이야`;
};

console.log(user.mySkills());
