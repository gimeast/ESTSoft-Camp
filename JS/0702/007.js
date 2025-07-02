const user = { name: "Ghost", age: 1000 };
const newUser = user;

user.mbti = "INFJ";
console.log(user, newUser);
console.log(user === newUser);

const irang = { name: "Irangi", bloodType: "B" };
const assignUser = Object.assign(irang, user);
console.log("irang", irang);
console.log("user", user);
console.log("assignUser", assignUser);

assignUser.name = "kk";
assignUser.age = 11;

console.log("irang", irang);
console.log("user", user);
console.log("assignUser", assignUser);

const obj = { name: "Apple" };
obj.name = "Mango";
obj.age = 1000;
console.log(obj);

const user2 = {
    name: "Ghost",
    age: 1000,
    pets: { dog: "Bobby", parret: "Cherry" },
};
console.log("=============================");
//얕은복사
const newUser2 = Object.assign({}, user2);
newUser2.age = 500;
console.log(user2);
console.log(newUser2);

console.log("=============================");
newUser2.pets.dog = "Bombi";
console.log(user2);
console.log(newUser2);

console.log("=============================");
//깊은복사
const newUser3 = JSON.parse(JSON.stringify(user2));
newUser3.pets.parret = "Alpha";
console.log(user2);
console.log(newUser3);
