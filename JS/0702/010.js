function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));

const sayHello = function (name) {
    return "Hello, " + name;
};
console.log(sayHello("Ghost"));

const getBigNumber = (arr) => {
    return Math.max(...arr) + "가 가장 큰 수입니다.";
};
console.log(getBigNumber([3, 5, 10, 12]));

function calcScores(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur);
    return [sum, sum / arr.length, Math.max(...arr)];
}
const [total, average, topScore] = calcScores([100, 50, 25, 32, 70]);
console.log(`점수의 합계는 ${total}, 평균은 ${average}, 1등점수는 ${topScore}`);
