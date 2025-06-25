//quiz 1
let name = "kim";
const age = 32;
console.log(`출력결과: ${name}, ${age}`);

//quiz 2
let age2 = 25;
age2 = 30;
console.log(`출력결과: ${age2}`);

//quiz 3
const user = { name: "Bob" };
user.name = "Tom";
console.log(`출력결과: ${JSON.stringify(user)}`);

//quiz 4
console.log(`안녕하세요, 저는 ${name}이고 ${age}살 입니다.`);

//quiz 5
const fruits = ["apple", "banana"];
fruits[0] = "Orange";
console.log(`출력결과: ${fruits}`);

//quiz 6
console.log(`출력결과 : 안녕하세요, ${name} 님`);

//quiz 7
const val1 = 3,
    val2 = 5;
console.log(`출력결과 : ${calc(val1, val2, "add")}`);

//quiz 8
console.log(`출력결과 : ${calc(val1, val2, "mul")}`);
console.log(`출력결과 : ${calc(val1, val2, "div")}`);

function calc(val1, val2, separator) {
    switch (separator) {
        case "add":
            return val1 + val2;
        case "mul":
            return val1 * val2;
        case "div":
            return val1 / val2;
    }
}
