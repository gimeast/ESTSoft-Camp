import { PI, add as sum, user } from "./utils.js";
import minus from "./utils.js";

console.log(PI);
console.log(sum(1, 3));
console.log(minus(1, 2));

// 동적 임포트: import() => Promise 객체
const btn = document.getElementById("module-btn");
btn.addEventListener("click", async () => {
    const { PI, add } = await import("./utils.js");
    console.log("module", PI);
    console.log("module", add);
});

user.name = 1234; // 변경가능
// user.password = 1234; //read only로 변경 불가
console.log("app", user);

//모듈 시스템의 규칙: export 된 변수는 외부에서 직접 재할당하거나, 덮어쓸 수 없다.
// user = { // 오류 발생
//     name: "위니브",
// };
