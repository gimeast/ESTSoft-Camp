//1
const name = "Ghost";
const age = 1000;

const output = (name, age) => {
    return `${name}님 나이는 ${age}세 입니다`;
};
console.log(output());

//2
const sum = (a, b = 10) => {
    return a + b;
};
console.log(sum(1, 2));

//3
function arr(a, b) {
    return [a, b];
}
const [a, b] = arr(1, 2);
console.log(a, b);

//4
const obj = function (name, age) {
    return { name, age };
};
console.log(obj("ghost", 1000));

//5
function getAge(year) {
    const date = new Date();
    return date.getFullYear() - year;
}
console.log(getAge(1900));

//6
function gugudan(dan) {
    const result = [];
    if (dan < 2 || dan > 9) {
        return "2~9단만 입력 가능합니다.";
    }
    for (let i = 1; i <= 9; i++) {
        result.push(`${dan} * ${i} = ${dan * i}`);
    }
    return result;
}
console.log(gugudan(3));

//7
const arr2 = [10, 20, 30, 40];
const [a1, b1, ...rest] = arr2;
console.log(a1, b1, rest);

//8
const user = { id: 1, name: "Ghost", age: 1000, email: "ghost@gmail.com" };
const { name: userName, email } = user;
console.log(userName, email);
