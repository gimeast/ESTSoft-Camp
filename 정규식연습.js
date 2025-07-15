const data = "상품 A는 5개, 상품 B는 12개 있습니다.";
console.log(
    data.replace(/\d{1,}/g, (e) => {
        return e * 10;
    })
);

// 문제 10: 종합 활용 - 비밀번호 검증 및 마스킹
// 비밀번호가 다음 조건을 만족하는지 확인하고, 조건을 만족하면 일부를 마스킹(*) 처리하세요.

// 8자 이상
// 영문자와 숫자 포함
// 특수문자 최소 1개 포함

const password1 = "abc123!@#";
const password2 = "password123";
const password3 = "Pass1!";

// 검증 함수와 마스킹 함수를 만들어보세요
function validatePassword(pwd) {
    // 여기에 코드 작성
    const regx1 = /[a-zA-Z0-9]/g;
    const regx2 = /[^\w\s\d]/g;

    const etc = pwd.replace(regx1, "");
    const str = pwd.replace(regx2, "");

    return !!(etc && (str + etc).length >= 8);
}

function maskPassword(pwd) {
    // 처음 2자리와 마지막 2자리만 보이고 나머지는 * 처리
    // 여기에 코드 작성
    const validate = validatePassword(pwd);
    if (validate) {
        return pwd.replace(/[^\s]/g, (v, i) => {
            if (i !== 0 && i !== pwd.length - 1) return "*";
            return v;
        });
    }

    return false;
}

console.log(maskPassword(password1));
console.log(maskPassword(password2));
console.log(maskPassword(password3));

const html = `
<div class="container" data-id="12345" data-name="홍길동">
    <span data-role="admin" id="user1">사용자1</span>
    <p data-msg="안녕하세요!" data-count="100">내용</p>
</div>
`;
let regx = /(?<=data-\w+=")[\w가-힣!]+"/g;
console.log(html.match(regx));
