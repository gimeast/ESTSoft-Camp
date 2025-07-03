const ghost = new Friends("Ghost", 1000);
ghost.sayHello(); //Hello, Ghost

function Friends(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello, ${this.name}`);
    };
}

class Friends2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, ${this.name}`);
    }
    sayAge() {
        console.log(`Your age is, ${this.age}`);
    }
}
const ghost2 = new Friends2("Ghost2", 1000);
ghost2.sayHello();
