const students = [
    { name: "Ghost", score: 85 },
    { name: "Camel", score: 92 },
    { name: "Mui", score: 78 },
];

console.log(typeof students);
console.log(Array.isArray(students));

const student1 = { name: "Shoopa", score: 20 };
students.push(student1);
console.log(students);

const arr = [30, 40, 50, 60];
const over50 = arr.filter((v) => v >= 50);
console.log(over50);

const over80 = students.filter((v) => v.score >= 80);
console.log(over80);
const names = students.filter((v) => v.score >= 80).map((v) => v.name);
console.log(names);

const numbers = [11, 2, 23, 1, 55];
numbers.sort((a, b) => a - b);
console.log(numbers);

const highScores = [...numbers].sort((a, b) => b - a);
console.log(highScores);

const alphabets = ["banana", "Banana", "apple", "Zebra"];
alphabets.sort((a, b) => a.localeCompare(b));
console.log(alphabets);

const users = [
    { nickName: "Irangi", role: "admin", email: "irangi@gmail.com" },
    { nickName: "Ghost", role: "superAdmin", email: "ghost@gmail.com" },
    { nickName: "shoopa", role: "user", email: "shoopa@naver.com" },
    { nickName: "Camel", role: "user", email: "camel@kakao.com" },
    { nickName: "Mui", role: "user", email: "mui@naver.com" },
];

const posts = [
    { title: "Javascript", tags: ["JS", "ES6", "NodeJS"] },
    { title: "React", tags: ["React", "Redux", "Hooks"] },
    { title: "Vue", tags: ["Vue", "Vuex", "Vue Router"] },
];

const adminNames = [...users]
    .filter((v) => v.role.toLowerCase().includes("admin"))
    .map((v) => v.nickName)
    .sort((a, b) => a.localeCompare(b));
console.log(adminNames);

const count = users.filter((v) => v.role.includes("user")).length;
console.log(`일반유저는 총${count}명입니다.`);

const nicknames = users.map((v) => v.nickName);
console.log(nicknames);

const adminUsers = users
    .filter((v) => v.role.toLowerCase().includes("admin"))
    .sort((a, b) => a.nickName.localeCompare(b.nickName));
console.log(adminUsers);

console.log("-------");
const tags = posts.map((v) => v.tags);
console.log(tags.flat().join(","));
