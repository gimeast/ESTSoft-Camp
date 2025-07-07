class Robot {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`삐빅- 저는 ${this.name}입니다.`);
    }
    move() {
        console.log(`${this.name}이 이동 중 입니다.`);
    }
}

//인스턴스 생성
const robot1 = new Robot("오르미봇");
const robot2 = new Robot("위니브봇");

console.log(robot1);
console.log(robot2);
robot1.introduce();
robot2.introduce();
robot1.move();
robot2.move();

//클래스 상속: 기존 클래스의 기능을 그대로 물려받고, 자기만의 기능이나 속성을 추가하는것
//기존 클래스: 부모클래스, 기반클래스
//상속받는 클래스: 자식클래스, 파생클래스
class BabyRobot extends Robot {
    constructor(name, age) {
        super(name);
        this.age = age;
        this.company = "위니브";
    }

    //오버라이딩: 같은 메서드를 다시 정의하는것
    introduce() {
        console.log(`삐빅- 저는 ${this.company}의 ${this.name}입니다.`);
    }
}
const child = new BabyRobot("베이비오르미", 10);
console.log(child);
child.introduce();
child.move();
