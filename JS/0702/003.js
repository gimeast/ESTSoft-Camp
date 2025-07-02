const user = {
    name: "Ghost",
    age: 1000,
};
console.log("name" in user);
console.log("color" in user);

const arr = ["a", "b", "c"];

//for..in 객체를 순회하면 key값을 출력한다. 배열에서는 index값을 출력하며 잘사용하지 않는다.

for (const idx in arr) {
    console.log("array : ", idx);
}
for (const key in user) {
    console.log("object : ", key);
}

const friend1 = {
    name: "Ghost",
    age: 1000,
    skills: "fly",
};
const friend2 = {
    name: "Irangi",
    age: 500,
};
console.log("skills" in friend1);
console.log("skills" in friend2);

for (const key in friend1) {
    console.log(key, friend1[key]);
}
