const blood = "bloodType";

const user = {
    name: "Ghost",
    [blood]: "B",
    [3 + 5]: 8,
    ["best" + "Friend"]: "Irangi",
};

console.log(blood, user.bloodType);
console.log(user[8]);
console.log(user.bestFriend);
