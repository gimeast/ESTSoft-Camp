// 간단한 타입스크립트 코드 테스트
function greet(name) {
    return "\uC548\uB155\uD558\uC138\uC694, ".concat(name, "\uB2D8!");
}
console.log(greet("타입스크립트"));
console.log(greet(123)); // 오류: 숫자는 string 타입이 아님
