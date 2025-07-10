// 1. Map: 키-값 쌍을 저장하는 자료구조
// key: 숫자, 불리언, 배열, 객체까지도 가능하다
let m = new Map();
m.set("하나", 1);
m.set(1, "하나");
m.set(true, "참");
m.set([1, 2], "배열");
m.set({ name: "k" }, "객체");
const arr = [2, 2];
m.set(arr, "배열2");
const obj = { name: "k" };
m.set(obj, "객체2");

console.log(m);

console.log(m.get("하나"));
console.log(m.get(1));
console.log(m.get(true));
console.log(m.get([1, 2])); //undefined
console.log(m.get({ name: "k" })); //undefined
console.log(m.get(arr));
console.log(m.get(obj));

console.log(m.has("하나"));
console.log(m.has("둘"));

console.log(m.size);

const m2 = new Map();
m2.set("name", "라이캣");
m2.set("age", 10);

for (const [key, value] of m2) {
    console.log(key, value);
}

//----------------------------------------
const s1 = new Set();
console.log(s1);
const s2 = new Set(["apple", "banana"]);
console.log(s2);
const s3 = new Set([1, 1, 1, 2, 23, 23, 2, 2, 2, 3, 2, 2]);
console.log(s3);

//값 추가
const s4 = new Set();
s4.add(1);
s4.add(1);
s4.add(2);
s4.add(2);
s4.add(3);
s4.add(3);
s4.add(5);
s4.add(4);
console.log(s4);
console.log(s4.size);
console.log(s4.has(3) && s4.delete(3));
console.log(s4.has(3));
console.log(s4.has(6));

for (const item of s4) {
    console.log(item);
}
s4.forEach((val) => {
    console.log(val);
});

//집합 연산
const setA = new Set(["apple", "banana"]);
const setB = new Set(["banana", "kiwi", "apple"]);
console.log(setA.union(setB));
console.log(setA.intersection(setB));
