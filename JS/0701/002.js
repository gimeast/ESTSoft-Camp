const obj = {
    name: "ghost",
    age: 1000,
    sayHello() {
        return `Hello, ${this.name}`;
    },
    sayBye: function () {
        return `Good bye, ${this.name}`;
    },
    getAge: () => {
        return this.age;
    },
};

console.log(obj.sayHello());
console.log(obj.sayBye());
console.log(obj.getAge());

const ghost = {
    age: 1000,
    mbti: "INFJ",
    say: function () {
        console.log("say hello");
    },
};

console.log(ghost.age, ghost.mbti);
ghost.age = 500;

console.log(ghost);

const type = "age";
console.log(ghost[type]);

ghost.say();
