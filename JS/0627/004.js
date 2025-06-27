const str = "123";
const num = 123;
console.log(num.toString());

const arr = ["a", "b", "c"];
console.log(arr.toString());
console.log(true.toString());

const obj = { mbti: "INTJ", bloodType: "A" };
console.log(obj.toString()); //객체타입을 문자열로 그대로 반환

const data = JSON.stringify(obj);
console.log(data);
console.log(JSON.parse(data));

const r = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
const g = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
const b = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
console.log(r, g, b);

function createHexValue() {
    const rgb = new Array(3).fill(0);
    rgb.forEach(
        (v, i) =>
            (rgb[i] = Math.floor(Math.random() * 256)
                .toString(16)
                .padStart(2, "0"))
    );
    return rgb;
}
console.log(`#(${createHexValue()})`);
