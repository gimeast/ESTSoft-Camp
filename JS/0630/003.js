const numbers = [1, 2, 3, 4, 5];
console.log(numbers.reduce((acc, cur) => acc + cur, 0));

const numbers2 = [10, 23, 15, 3, 2, 12, 30, 43, 50];
console.log(numbers2.reduce((acc, cur, idx) => (idx % 2 ? acc + cur : acc)));

function sumNumbers(number) {
    let arr = new Array(number).fill(0);
    return arr.map((v, i) => i + 1).reduce((acc, cur) => acc + cur);
}
console.log(sumNumbers(100));
console.log(sumNumbers(50));
