// 타입을 지정하세요
type Book = {
    title: string;
    author: string;
    pages: number;
    isAvailable: boolean;
};
let book: Book = {
    title: "TypeScript 입문",
    author: "홍길동",
    pages: 300,
    isAvailable: true,
};

//사용자 정보를 나타내는 인터페이스를 정의해보세요
interface User {
    name: string;
    email: string;
    age: number;
}
let user: User = {
    name: "이영희",
    email: "lee@email.com",
    age: 25,
};

//다음 요구사항에 맞는 함수를 작성해보세요
// 함수명: getInfo
//매개변수 name(문자열), age(숫자), isStudent(불리언,선택적)
//반환값 {name:string, age:number, status:string}
//students는 isStudent가 true면 학생 , false나 없으면 일반
type MyFunc2 = (
    name: string,
    age: number,
    isStudent?: boolean
) => { name: string; age: number; status: string };
const getInfo: MyFunc2 = (name, age, isStudent) => {
    return { name, age, status: isStudent ? "학생" : "일반" };
};
