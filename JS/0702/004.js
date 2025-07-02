const person = { name: "Ghost", age: 20 };
delete person.age;

for (const k in person) {
    console.log(k);
}
