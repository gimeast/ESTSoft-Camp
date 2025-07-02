import { user1, user2 } from "./datas/users.js";

const { name, age, skills } = user1;
console.log(name, age, skills);

const { name: newName, age: newAge, skills: newSkills = "No Skills" } = user2;
console.log(newName, newAge, newSkills);
