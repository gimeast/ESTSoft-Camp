// 여기에 알맞은 타입을 지정하세요
let userName: string = "김개발";
let userAge: number = 25;
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["typescript", 100];

// 다음 코드에서 발생할 수 있는 타입 관련 오류를 찾고 수정해보세요.
let value: string = "Hello";
value = "42";

let numbers: number[] = [1, 2, 3];
numbers.push(4);

let mixed: (string | number | boolean)[] = [1, "two", 3];
mixed.push(true);

// 다음 함수들의 반환 타입을 올바르게 지정해보세요.
// 적절한 반환 타입을 지정하세요
function logMessage(message: any): void {
    console.log(message);
}

function throwError(message: any): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("무한 루프");
    }
}

// 다음 변수를 순회하면서 하나씩 출력하는 코드를 작성하세요.
const arr: string[] = ["apple", "banana", "cherry"];
arr.forEach((v) => console.log(v));

//5
let studentName: string = "김철수";
let studentAge: number = 20;
let isGraduate: boolean = false;
let scores: number[] = [90, 85, 92];
//6
type MyFunc = (a: number, b: number) => number;
const addNumbers: MyFunc = (a, b) => {
    return a + b;
};
//8
let userId: number | string;
