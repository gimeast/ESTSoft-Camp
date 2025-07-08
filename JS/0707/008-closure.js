//클로저: 외부에서 내부함수가 참조하던 변수에 계속 접근할 수 있는 현상
function outer() {
    let outVar = 0;

    function inner() {
        console.log("inner:", outVar++);
    }

    return inner;
}

const innerFunc = outer();
innerFunc();
innerFunc();

//데이터 은닉
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter();
counter();

//모듈 패턴
const moduleCounter = (function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        getCount: function () {
            console.log(count);
        },
    };
})();

moduleCounter.getCount();
moduleCounter.increment();
moduleCounter.increment();
moduleCounter.decrement();

//좋아요 버튼 구현 => 좋아요 수를 관리하는 함수
function createLikeCount() {
    let count = 0;

    return {
        like: function () {
            count++;
            console.log(`좋아요 ${count}개`);
        },
        getLikes: function () {
            return count;
        },
    };
}

const likeButton = createLikeCount();
likeButton.like();
likeButton.like();
likeButton.like();
console.log(likeButton.getLikes());

//쓰로틀링: 어떤 함수를 지정한 시간 간격마다 한번만 실행되도록 제한하는것
//=> 일정 시간마다 규칙적으로 실행
//=> 함수의 최대 호출 빈도를 제어 할 수 있다.
//func : 실제로 실행하고싶은 함수
//delay: ms단위(1000ms -> 1s), 지정시간
function throttle(func, delay) {
    let isThrottle = false; //최근에 실행되었는지를 확인

    return function (...args) {
        if (!isThrottle) {
            console.log(...args);
            func(...args);
            isThrottle = true; //잠금
            setTimeout(() => {
                isThrottle = false; //해제
            }, delay);
        }
    };
}
function handleClick() {
    console.log("클릭 시간:", new Date().toLocaleTimeString());
}
handleClick();

const throttledClick = throttle(handleClick, 1000);
const button = document.getElementById("button");
button.addEventListener("click", throttledClick);
