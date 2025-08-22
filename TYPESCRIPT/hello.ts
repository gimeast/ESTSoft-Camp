// 간단한 타입스크립트 코드 테스트
function greet(name: string): string {
    return `안녕하세요, ${name}님!`;
}

console.log(greet("타입스크립트"));
console.log(greet(123)); // 오류: 숫자는 string 타입이 아님
