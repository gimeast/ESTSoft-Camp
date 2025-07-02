// 1. 객체 person에서 name 속성의 값을 출력하세요.
const person = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요
console.log(person.name);

// 2. users 배열에서 모든 사용자의 이름만 배열로 추출하세요.
const users = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];
// 여기에 코드를 작성하세요
const names = users.map((v) => v.name);
console.log(names);

// 3. 객체 obj를 깊은 복사(Deep Copy)하는 코드를 작성하세요.
const obj = { a: 1, b: { c: 2 } };
// 여기에 코드를 작성하세요
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.b.c = 3;
console.log(obj, deepCopy);

// 4. 객체 구조분해 할당으로 name, age를 변수로 추출하세요.
// 여기에 코드를 작성하세요
const { name, age } = person;
console.log(name, age);

// 5. 객체 person에 height: 180 속성을 추가하세요.
// 여기에 코드를 작성하세요
person.height = 180;
console.log(person);

// 6. user 객체를 복사하여 age만 30으로 바꾼 새 객체를 만드세요.
const user = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요
// const copy = Object.assign({}, user);
// copy.age = 30;
const copy = Object.assign({}, user, { age: 30 });
console.log(user, copy);

// 7. 두 객체가 값이 같은지 얕은 비교(shallow equal)하는 함수를 작성하세요.
const a = { x: 1, y: 2, z: 3 };
const b = { x: 1, y: 2, z: 3 };
// 여기에 코드를 작성하세요
console.log(shallowEqual(a, b));
function shallowEqual(a, b) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    const kBool = aKeys.filter((k) => !bKeys.includes(k)).length;
    if (kBool) return false;

    return aKeys.every((key) => a[key] === b[key]);
}
// 8. 객체의 key만 순회하며 모두 출력하세요. (for...in 사용 금지)
const obj2 = { a: 1, b: 2 };
// 여기에 코드를 작성하세요
Object.keys(obj).forEach((v) => console.log(v));

// 9. person 객체에 동적으로 key와 value를 추가하세요. (key: hobby, value: soccer)
const person2 = { name: "Ghost" };
// 여기에 코드를 작성하세요
person2["hobby"] = "soccer";
console.log(person2);

// 10. 두 객체 obj1, obj2를 합쳐서 새 객체를 만드세요.
const obj3 = { a: 1 };
const obj4 = { b: 2 };
// 여기에 코드를 작성하세요
const newObj = { ...obj3, ...obj4 };
console.log(newObj);

// 11. person 객체의 모든 key와 value를 "key:value" 형태의 문자열 배열로 만드세요.
const person3 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요
// const str = Object.entries(person3).map((v) => {
//     return `${v[0]}:${v[1]}`;
// });
const str = Object.entries(person3).map(([key, value]) => {
    return `${key}:${value}`;
});
console.log("test:", str);

// 12. users 배열에서 나이가 20 이상인 사람만 추출하세요.
const users2 = [
    { name: "Ghost", age: 20 },
    { name: "Camel", age: 19 },
    { name: "Irangi", age: 22 },
];
// 여기에 코드를 작성하세요
console.log(users2.filter((obj) => obj.age >= 20));

// 13. person 객체의 key와 value를 모두 대문자로 변환한 새 객체를 만드세요.
const person4 = { name: "Ghost", hobby: "soccer" };
// 여기에 코드를 작성하세요
const keys = Object.keys(person4).map((v) => v.toUpperCase());
const values = Object.values(person4).map((v) => v.toUpperCase());
const newPerson = {};
for (let i = 0; i < keys.length; i++) {
    newPerson[keys[i]] = values[i];
}
console.log(newPerson);

// 14. 중첩 객체에서 내부 값에 접근하세요. (person.info.email)
const person5 = { name: "Ghost", info: { email: "ghost@email.com" } };
// 여기에 코드를 작성하세요
console.log(person5.info.email);

// 15. 객체의 모든 값이 숫자인지 true/false로 판별하세요.
const obj5 = { a: 1, b: 2, c: 3 };
// 여기에 코드를 작성하세요
console.log(Object.values(obj5).every((num) => !isNaN(num)));

// 16. users 배열에서 가장 나이가 많은 사람의 이름을 출력하세요.
const users3 = [
    { name: "Ghost", age: 20 },
    { name: "Irangi", age: 22 },
    { name: "Camel", age: 19 },
];
// 여기에 코드를 작성하세요
const maxAgeUser = users3.reduce((acc, cur) => (acc.age > cur.age ? acc : cur));
console.log("maxAgeUser:", maxAgeUser);

// 17. 생성자 함수로 User 객체를 만들고, 인스턴스를 생성하세요.
// 여기에 코드를 작성하세요
function User(name) {}
const obj6 = new User();
console.log(obj6);

// 18. User 생성자에 sayHello 메서드를 프로토타입으로 추가하세요.
function User2(name) {
    this.name = name;
}
const u = new User2("Ghost");
// 여기에 코드를 작성하세요
u.sayHello = function () {
    console.log(`${this.name}, hello`);
};
u.sayHello();

// 19. 객체의 key를 기준으로 정렬된 배열을 만드세요.
const obj7 = { b: 2, a: 1, c: 3 };
// 여기에 코드를 작성하세요
const sortedKeys = Object.keys(obj7).sort((a, b) => a.localeCompare(b));
console.log(sortedKeys);

// 20. 객체의 불변성을 유지하며 age를 25로 변경한 새 객체를 만드세요.
const user2 = { name: "Ghost", age: 20 };
// 여기에 코드를 작성하세요
const newUser = { ...user2 };
newUser.age = 25;
console.log(user2);
console.log(newUser);
