//1. call(): 호출과 동시에 this를 바꿔주는 방법
const user = {
    name: "빙키",
    sayName() {
        console.log(`내 이름은 ${this.name}`);
    },
};

const bot = {
    name: "빙키봇",
};

user.sayName(); //this -> user객체
user.sayName.call(bot); //this -> bot객체

//2. apply
//call과 동일하게 동작하지만, 인자를 배열로 받는다는 차이만 있다.
function introduce(age, hobby) {
    console.log(`내 이름은 ${this.name}, 나이는 ${age}, 취미는 ${hobby}`);
}
// introduce(20, "ㄴㄴ");

const person = { name: "짜요" };
introduce.call(person, 20, "러닝");
introduce.apply(person, [20, "러닝"]); //인자를 배열로 전달

//3. bind
const user2 = {
    name: "binky2",
    sayName(age) {
        console.log(`내 이름은 ${this.name} ${age}`);
    },
};
const guest = { name: "게스트" };
const bindFunc = user2.sayName.bind(guest, 13); //this를 객체 guest로 고정한 새로운 함수를 반환
console.log(bindFunc);
bindFunc();

/* this는 무엇을 가리키는가?
- (생성자 함수, 클래스)new 키워드: => 새로운 인스턴스
- 객체의 메서드를 호출 -> 점(.) 앞의 객체
- 화살표 함수 -> 상위 스코프의 this를 그대로 받음
- 이벤트 핸들러 안에서의 this -> 일반함수(DOM 요소), 화살표함수(상위 스코프)
- call/apply/bind -> 명시적 this 바인딩
- 그 외 일반 함수 호출 -> window(strict mode에서는 undefined)
 */
