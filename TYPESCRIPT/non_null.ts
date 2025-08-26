// 이벤트 핸들러 예제
document.querySelector("input")!.addEventListener("change", (e) => {
    // e.target은 기본적으로 EventTarget 타입
    const target = e.target as HTMLInputElement;
    console.log(target.value); // .value 접근 가능

    // as 없이 작성한다면:
    // const target = e.target;
    // console.log(target.value); // 에러 발생!
});

// 실제 사용 예제
interface User {
    name: string;
    age: number;
}

const userJSON = '{"name": "John", "age": 30}';
const user = JSON.parse(userJSON) as User;
console.log(user.name); // 타입 안전성 확보
