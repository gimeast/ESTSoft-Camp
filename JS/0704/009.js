const cat = {
    name: "kitty",
    sound: function () {
        console.log("야옹~~");
    },
};
const dog = {
    name: "흰둥이",
    sound: function () {
        console.log("멍멍~~");
    },
};

cat.sound();
dog.sound();

//생성자 함수
function Animal(name) {
    this.name = name;
    this.sound = function () {
        console.log(`${this.name} 소리가 납니다.`);
    };
}

const tiger = new Animal("어흥");
const bird = new Animal("짹짹");

tiger.sound();
bird.sound();

class Animal2 {
    constructor(name) {
        this.name = name;
    }

    sound() {
        console.log(`${this.name} 소리가 납니다.`);
    }
}

const king = new Animal2("킹킹");
king.sound();
