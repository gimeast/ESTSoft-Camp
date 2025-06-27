const str = "I like apple pie.";
console.log(str.includes("apple"));
console.log(str.indexOf("apple") > -1);
console.log(str.lastIndexOf("apple") > -1);

console.log(str.at(4));
console.log(str.charAt(4));

console.log(str.indexOf("p"));
console.log(str.lastIndexOf("p"));
console.log(str.split(" "));
console.log(str.slice(str.indexOf("apple"), str.indexOf("apple") + 5));
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

const str2 = "  Hello World  ";
let str2Trim = str2.trimStart().trimEnd();
console.log(str2Trim);
console.log(str2Trim.replace("World", "Ghost"));
console.log(str2Trim.split(" ")[0].repeat(3));
console.log(str2Trim.replaceAll("o", "-"));

const num1 = "7";
console.log(num1.padStart(3, "0"));

const a = "hello";
const b = "world";
const c = a.concat(b);
console.log(c);
