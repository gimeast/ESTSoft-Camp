// this: 호출 방식에 따라 바뀌는 동적 키워드
//1. 전역 범위
console.log("전역 범위", this);

//2. 일반 함수 this
function func1() {
    console.log("일반 함수", this);
}
func1(); //기본적으로 전역 객체를 this로 설정 -> 전역 객체: window

//3. 객체 메서드 this
const obj1 = {
    name: "객체1",
    func1() {
        console.log("객체 메서드", this);
        console.log("이름", this.name);
    },
};
obj1.func1();

//4. 객체 메서드 내 일반 함수
const obj2 = {
    name: "객체2",
    func2() {
        console.log("객체 메서드", this);
        function inner() {
            console.log("내부함수", this);
        }
        inner();
    },
};
obj2.func2();

//5. 화살표함수는 this를 가지지 않음 상위 스코프의 this를 그대로 가져옴!!
//=> 장점: this가 예측 가능하게 동작한다
const obj3 = {
    name: "객체3",
    func3() {
        console.log("객체 메서드", this);
        const inner = () => {
            console.log("내부함수", this);
        };
        inner();
    },
};
obj3.func3();

//6. 생성자 함수 this => 포인트는 new 키워드
function Friends(name) {
    console.log("생성자 함수1", this);
    this.name = name;
    console.log("생성자 함수1", this);

    this.sayHello = function () {
        console.log(`Hello, ${this.name}`);
    };
    console.log("생성자 함수1", this);
    // return this; //엔진이 자동으로 완성된 객체를 반환한다.
}
//인스턴스가 생성되는 동시에 this는 생성된 인스턴스를 가리키게 된다.
const friend1 = new Friends("kk");
/*
생성자 함수에서의 this 바인딩 과정
1. 빈 객체 생성: 속성이 없는 완전히 비어있는 상태 {}
2. this 바인딩
3. 생성자 함수 코드 실행 => 속성과 메서드 추가
 */

//6-2 new 키워드 사용하지 않았을때
//this가 전역객체를 가리킨다
const friend2 = Friends("kk");
console.log("new 없이 만든 인스턴스", friend2);
console.log(window.name); //전역 변수 오염됨

//생성자 함수, 일반 함수에서의 this 결정 방식이 다르다

//7. 클래스 this
//클래스 바디: 생성자, 메서드 정의, 필드 선언 등
//=> 실행문은 올 수 없음
class Friends2 {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}
const friend3 = new Friends2("kk");
friend3.sayHello();

//8. 이벤트 핸들러
//8-1 일반 함수: 누가 이벤트를 받았는지, 실제 클릭된 DOM 요소
const $button = document.querySelector("#button");
$button.addEventListener("click", function () {
    console.log("이벤트 핸들러", this);
    console.log("클릭된 요소", this.tagName);
});
//8-2 화살표 함수: this를 가지지 않음 상위 스코프의 this를 그대로 가져옴
$button.addEventListener("click", () => {
    console.log("이벤트 핸들러", this); //window
    console.log("클릭된 요소", this.tagName);
});
