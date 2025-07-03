function print(val) {
    console.log(`3초후에 실행되는 print() 입니다.${val}`);
}

//내가 지정한 시간 이후에 매개변수로 들어온 함수를 실행하겠다.
setTimeout(print, 3000, "hi");
console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000);
console.log(3);

let cnt = 0;
function sayHello(name) {
    cnt++;
    console.log(`${cnt} hello ${name}`);

    if (cnt === 5) {
        clearInterval(interval);
    }
}
const interval = setInterval(sayHello, 1000, "hello");
setTimeout(() => {
    console.log("...");
}, 4000);
