//1. 생성자 함수
function Friends(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello, ${this.name}`);
    };
}

//인스턴스(객체) 생성 - new 키워드 사용!
const binky = new Friends("Binky", 20);
console.log(binky);
// => 문제: 객체 생성시 함수도 새로 만들어짐 -> 메모리 낭비, 관리 어려움

//2. 생성자 함수 + prototype
function FriendsV2(name, age) {
    this.name = name;
    this.age = age;
}

FriendsV2.prototype.sayHello = function () {
    console.log(`Hello, ${this.name}`);
};
// => 객체마다 메서드가 중복 생성되지 않고 공통으로 공유한다.
//문제 구문의 분산으로 전체 구조 파악이 어렵다!
const binky2 = new FriendsV2("Binky", 20);
console.log(binky2);

//3. 클래스: 객체를 여러개 만들때 구조와 기능을 한눈에 파악하기 쉬운 방식으로 정리해주는 문법
//ex) 객체를 만들기위한 청사진, 설계도, 붕어빵틀
class FriendsV3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
}
const binky3 = new FriendsV3("Binky", 20);
console.log(binky3);
