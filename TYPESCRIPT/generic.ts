function getValue<T>(value: T): T {
    return value;
}

const numberValue = getValue<number>(123); // number 타입
const stringValue = getValue<string>("hello"); // string 타입

console.log(numberValue);
console.log(stringValue);
