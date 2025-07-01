let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter((v) => v % 2 === 0));

arr = [1, 2, 3, 4];
console.log(arr.map((v) => v ** 2));

arr = [5, 2, 9, 1];
console.log(arr.sort((a, b) => b - a));

arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((acc, cur) => acc + cur, 0));

arr = [3, -1, 5, 7];
console.log(arr.some((v) => v < 0));

arr = [4, 5, 6];
console.log(arr.every((v) => v > 3));

function solution(names) {
    names.forEach((v) => console.log(v));
}
solution(["Irangi", "Camel", "Shoopa"]);

function solution2(scores) {
    return scores.filter((v) => v >= 60).map((v) => v * 2);
}
console.log(solution2([50, 60, 70, 80]));

function solution3(my_string) {
    return my_string
        .split("")
        .filter(
            (v) =>
                !v.includes("a") &&
                !v.includes("e") &&
                !v.includes("i") &&
                !v.includes("o") &&
                !v.includes("u")
        )
        .join("");
}
console.log(solution3("beautiful"));

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

arr = [10, 20, 30];
for (let v of arr) {
    console.log(v);
}

let result = [];
for (let i = 1; i <= 10; i++) {
    if (i % 3 !== 0) continue;
    result.push(i);
}
console.log(result);

const nums = [1, 2, 3, 4, 5];
let result2 = [];
for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] % 2)) continue;
    result2.push(nums[i]);
}
console.log(result2);

const fruits = ["apple", "mango", "banana"];
for (const fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => {
    console.log(fruit);
});

const str = "Hello";
console.log(str.length);

for (const spell of str) {
    console.log(spell);
}

console.clear();

let i = 4;
while (i < 10) {
    console.log(i);
    i++;
}
console.log("while 문이 끝났습니다.");

let j = 4;
do {
    console.log(j);
} while (j < 3);

console.clear();
console.log("-----------------");
let k = 1;
while (k < 10) {
    if (k === 5) {
        k += 2;
        continue;
    }
    console.log(k);
    k += 2;
}

let friends = [];
function addFriend(name) {
    friends.push(name);
}
addFriend("Ghost");
addFriend("Irangi");
addFriend("Camel");

function deleteFriend(name) {
    const friendIndex = friends.indexOf(name);
    if (friendIndex === -1) {
        console.log("없는 친구입니다.");
        return;
    }
    friends.splice(friendIndex, 1);
}
// deleteFriend("Irangi");
console.log(`my Friends : ${friends}`);

arr = [1, 2, 3];
arr.push(4);
console.log(arr);
arr.splice(2, 1);
console.log(arr);

function updateFriend(name, newName) {
    const friendIndex = friends.indexOf(name);
    if (friendIndex === -1) {
        console.log("없는 친구입니다.");
        return;
    }
    friends.splice(friendIndex, 1, newName);
    return friends;
}

addFriend("Ghost");
function isValid(name) {
    friends.indexOf(name);
}
console.log(friends);

function solution5(todo_list, finished) {
    var answer = [];
    answer = todo_list.filter((v, idx) => finished[idx]);
    return answer;
}
console.log(
    solution5(
        ["problemsolving", "practiceguitar", "swim", "studygraph"],
        [true, false, true, false]
    )
);
