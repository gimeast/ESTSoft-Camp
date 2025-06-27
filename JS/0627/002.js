const str = "Hello World";
console.log(str.length);

console.log(str.indexOf("l"));
console.log(str.lastIndexOf("l"));

const email = "ghost@gmail.com";
const userName = email.slice(0, email.indexOf("@"));
console.log(userName);
console.log(email.split("@")[1]);

const url1 = "http://www.ghost.com/about";
const url2 = "http://www.ghost.com/contactUs";

const match = url1.match(/[^\/]+$/);
console.log("정규식:", match[0]); // "about"
console.log(url1.substring(url1.lastIndexOf("/") + 1));
console.log(url2.substring(url2.lastIndexOf("/") + 1));
console.log(url1.split("/").at(-1));
console.log(url2.split("/").at(-1));

let str2 = "Hello World";
console.log(str2.replace("H", "w"), "/", str2);

let num = "7";
console.log(num.padStart(3, "0"));
num = "27";
console.log(num.padStart(3, "0"));

const coin = "3200";
const cost = "1000";
console.log(Number(coin.padEnd(7, "0")).toLocaleString("ko-KR"));
console.log((coin - cost) * 1000);

const num1 = "123";
const num2 = 123;
const num3 = "hello";
console.log(isNaN(num1)); //false
console.log(isNaN(num2)); //false
console.log(isNaN(num3)); //true
console.log(Number.isNaN(num1)); //false
console.log(Number.isNaN(num2)); //false
console.log(Number.isNaN(num3)); //false
