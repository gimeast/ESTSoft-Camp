// orderCoffee라는 함수를 작성합니다.
// 첫 번째 인자로 커피 이름을, 두 번째 인자로 콜백 함수를 받습니다.
// 함수 실행 시 콘솔에 커피 준비 중...을 출력한 후, 콜백 함수를 실행합니다.
// 콜백 함수에 커피 이름을 인자로 전달하여 실행합니다.
// 커피가 준비되었습니다: 커피 이름
function orderCoffee(coffeeName, callback) {
    // 여기에 작성
    console.log("커피 준비 중...");
    callback(coffeeName);
}

// 여기에 작성
function callback(coffeeName) {
    console.log(`커피가 준비되었습니다: ${coffeeName}`);
}

orderCoffee("아메리카노", callback);

// sumUpTo라는 함수를 만듭니다.
// 인자로 받은 수까지 1부터 더한 값을 반환해야 합니다.
// 반복문 없이 재귀로 작성합니다.
// sumUpTo(5)를 실행했을 때, 15가 출력되도록 합니다.
function sumUpTo(num) {
    //종료조건
    if (num === 1) return 1;
    else if (num < 1) return "1이상만 입력 가능합니다.";
    //재귀함수
    return num + sumUpTo(num - 1);
}
console.log(sumUpTo(-1));
console.log(sumUpTo(0));
console.log(sumUpTo(1));
console.log(sumUpTo(2));
console.log(sumUpTo(3));
console.log(sumUpTo(4));
console.log(sumUpTo(5));
