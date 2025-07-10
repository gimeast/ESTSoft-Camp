// 1. localStorage: 브라우저 데이터를 영구적으로 저장하는 방식
//=> 사용자가 직접 지우지 않는 한, 데이터는 브라우저를 껏다켜도 그대로 남아있다
//ex: 로그인 여부, 로그인 방식, 다크모드 설정 등
localStorage.setItem("isLogin", true);
localStorage.setItem("color-theme", "dark");

const user = {
    id: 1,
    name: "유진",
};
localStorage.setItem("user", JSON.stringify(user));

const isLogin = localStorage.getItem("isLogin");
const theme = localStorage.getItem("color-theme");
const localUser = JSON.parse(localStorage.getItem("user"));
console.log(!!isLogin);
console.log(theme);
console.log(localUser);

// 값 지우기(데이터 삭제)
// localStorage.removeItem("isLogin");
// localStorage.removeItem("color-theme");
// localStorage.removeItem("user");
localStorage.clear();

// 2. 세션 스토리지: 브라우저 세션 동안만 데이터를 저장하는 방법
//=> 브라우저를 닫으면 데이터가 삭제된다. 데이터의 지속성이 로컬 스토리지와 다름
sessionStorage.setItem("session", 1);
sessionStorage.setItem("user", JSON.stringify(user));

const session = sessionStorage.getItem("session");
const sessionUser = JSON.parse(sessionStorage.getItem("user"));
console.log("session", session);
console.log("sessionUser", sessionUser);

// sessionStorage.removeItem("session");
// sessionStorage.removeItem("user");
sessionStorage.clear();

// 3. 쿠키: 브라우저가 서버에 자동으로 전송하는 데이터
/*
- 문자로만 저장, 4KB 제한
- 자동 전송 -> 인증 정보에 자주 쓰임
- HttpOnly 속성이 설정된 쿠키는 자바스크립트로 읽을 수 없다 => 보안을 위한 장치
 */
console.log(document.cookie);
