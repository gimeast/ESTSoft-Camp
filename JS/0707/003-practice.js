class Sausage {
    constructor(taste1, taste2) {
        this.taste1 = taste1;
        this.taste2 = taste2;
    }

    eat() {
        console.log(`${this.taste1}와 ${this.taste2} 맛이 난다!`);
    }
}
class GrilledSausage extends Sausage {
    //생성자 생략

    //오버라이딩
    eat() {
        console.log(`${this.taste1}와 ${this.taste2} 맛이 난다! 불 맛도 난다!`);
    }
}

//실행 예시
const sausage = new Sausage("소고기", "파");
sausage.eat();
// 소고기와 파 맛이 난다!

const grilled = new GrilledSausage("닭고기", "떡");
grilled.eat();
// 닭고기와 떡 맛이 난다! 불 맛도 난다!
