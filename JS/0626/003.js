let a = 10;
let b = 5;
let c = 3;

//1. a와 b 두 수를 비교해서 큰 수를 출력하시오
console.log(a > b ? a : b);

//2. c가 짝수인지 홀수인지 출력하세요
console.log(c % 2 === 0 ? "짝수" : "홀수");

//3. b의 값에 a를 더하는 식을 쓰세요
b += a;
console.log(b);

//4. b가 a의 약수인지 확인하세요
console.log(a % b === 0 ? "b는 a의 약수입니다" : "b는 a의 약수가 아닙니다");

// id가 일치하면 id가 존재합니다 출력, 일치하지않으면 존재하지 않는 아이디입니다 출력
const userId = "Ghost";
const userPw = "1234";

const inputId = "Hello";
const inputPw = "0000";

if (userId === inputId) {
    console.log("id가 존재합니다");

    if (userPw === inputPw) {
        console.log("login");
    } else {
        console.log("비밀번호 오류");
    }
} else {
    console.log("존재하지 않는 아이디입니다");
}
