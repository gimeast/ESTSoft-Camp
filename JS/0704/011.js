class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }

    sayName() {
        console.log(
            `이 차의 이름은 \'${this.model}\'이고 가격은 ${this.price}만원 입니다.`
        );
    }
}

const car1 = new Car("JEEP", 7000);
const car2 = new Car("지바겐", 10000);

car1.sayName(); //이 차의 이름은 'JEEP'이고 가격은 7000만원 입니다.
car2.sayName();
