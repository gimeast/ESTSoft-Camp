const users = [
    { name: "ghost", age: 1000 },
    { name: "irangi", age: 500 },
    { name: "nuvis", age: 30 },
];

const stringUser = JSON.stringify(users);
console.log(stringUser, typeof stringUser);

const parseUser = JSON.parse(stringUser);
console.log(parseUser);
