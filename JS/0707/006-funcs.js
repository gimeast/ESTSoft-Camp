//1. 콜백함수
//setTimeout, setInterval, addEventListener, forEach, map, filter 등등..

function callFunc(name, callback) {
    console.log(`안녕하세요. ${name}님`);
    callback(); //콜백함수 호출
}
function sayHello() {
    console.log("반갑습니다.");
}
callFunc("우리", sayHello);

// 2. 재귀함수: 자기 자신을 다시 호출하는 함수 => 반복적인 잡업을 할 때 유용!
// 재귀조건, 종료조건이 필요하다!
// 팩토리얼 계산, 피보나치 수열, 폴더 탐색 등
// 5! = 5*4*3*2*1 = 5*4!
// 0!, 1! => 1
// n! -> n*(n-1)!=n! -> (n-1)! = n!/n -> 1 대입

function factorial(num) {
    console.log(num);
    // 종료조건
    if (num === 0 || num === 1) {
        return 1;
    }

    // 재귀조건
    return num * factorial(num - 1);
}

console.log(factorial(5));

// num = 5
// 5 * fac(4)
// 5 * (4 * fac(3))
// 5 * (4 * (3 * fac(2)))
// 5 * (4 * (3 * (2 * fac(1))))
// 5 * (4 * (3 * (2 * 1))) = 120

//3. 즉시 실행 함수: 함수를 정의하자마자 바로 실행하는 함수
(function () {
    console.log("이 함수는 선언과 동시에 실행됩니다.");
})();
