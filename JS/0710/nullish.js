//널리시 연선자: 왼쪽 피연산자 값이 null 또는 undefined 일 때만 오른쪽 피연산자의 값을 반환함
console.log(null ?? "hello");
console.log(undefined ?? "world");
console.log(NaN ?? "hello");
console.log("" ?? "hello");

//논리합(OR,||): 둘 중 하나라도 참이면 참, 왼쪽 피연산자가 참이면 더이상 평가를 진행하지 않음
console.log("" || "논리합(오른쪽)");
console.log(null ?? "널리시(오른쪽)"); // -> 0, false, NaN, ''와 같은 falsy 값도 유효한 값으로 간주한다.

//사용자 입력값, API 응답값 등 기본값을 설정할 때 유용하다!
//=> 예외처리
let userName = null;
userName = userName ?? "알 수 없는 사용자";
console.log("사용자:", userName);

//주의사항!
//논리 연산자와 혼합 사용을 허용하지 않습니다 => 에러발생
//명시적으로 괄호를 요구 => 우선순위를 지정
const a = null;
const b = 5;
const c = 10;
// console.log(a ?? b || c) => error
console.log((a ?? b) || c); //5
console.log(a ?? (b || c)); //5

//옵셔널 체이닝(?.)
const user = {
    name: "유진",
    address: {
        country: "대한민국",
        city: "성남",
    },
};
const user2 = {
    name: "유진",
};
let user3 = null;

console.log(user.address.country);
console.log(user2.address); //undefined
// console.log(user2.address.country); //error
console.log(user2.address?.country); //undefined
console.log(user3?.name); //undefined

//대괄호 표기법
console.log(user2["address"]?.city);
console.log(user3?.["address"]?.city);

//nullish + 옵셔널 체이닝
const country = user2?.address?.country ?? "country 정보 없음";
const city = user?.address?.city ?? "city 정보 없음";
console.log(country);
console.log(city);
