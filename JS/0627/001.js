const num1 = -13;
console.log(num1 >= 10 ? "10 이상이다" : "10 이하이다");

const num2 = 4.6;
console.log(Math.round(num2) % 2 ? "홀수" : "짝수");
console.log(Math.round(num2) % 2 === 0 ? "짝수" : "홀수");

const random = Math.ceil(Math.random() * 100);
console.log(random >= 50 ? `${random}은 50이상` : `${random}은 50이미만`);

const num3 = 2;
console.log(Math.pow(num3, 3));
console.log(num3 ** 3);

const str = "5.45";
console.log(parseInt(str));
console.log(parseInt("50px100px"));
console.log(Number("50px"));

console.log(isNaN(str));
console.log(Object.is(str));

const a = 3,
    b = 10,
    c = 5;
console.log(Math.max(a, b, c));
console.log(Math.min(a, b, c));

const arr = ["가위", "바위", "보"];
console.log(arr.length);
console.log(arr.at(-1));

function sum(num1, num2) {
    return num1 + num2;
}
