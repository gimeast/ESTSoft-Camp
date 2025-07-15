// TODO4: 제곱, n제곱근 함수를 구현하세요

// 제곱 함수
export function power(a, b) {
    // TODO4-1: a의 b제곱을 계산하는 로직을 작성하세요
    return Math.pow(a, b);
}

// n제곱근 함수
export function squareRoot(a, b) {
    // TODO4-2: a의 b제곱근을 계산하는 로직을 작성하세요

    //음수의 제곱근 => 복소수
    //자바스크립트에서는 복소수를 표현할 수 없음
    if (a < 0) {
        throw new Error(
            "음수의 제곱은 복소수가 되므로 이 계산기에서는 지원하지 않습니다."
        );
    }

    if (b === 0) {
        throw new Error("0제곱근은 정의되지 않습니다");
    }
    return Math.sqrt(a, b);
}
