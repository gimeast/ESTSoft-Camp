const numbers = [51, 20, 12, 5, 2];
const halfNumbers = numbers.map((num) => num / 2);
console.log(halfNumbers);

const under15 = numbers.filter((num) => num < 15);
console.log(under15);

const under15First = numbers.find((num) => num < 15);
console.log(under15First);

const numbers2 = [153, 7, 55];
console.log(
    numbers2
        .toString()
        .split("")
        .filter((num) => num === "5").length
);

const users = ["Daniel", "Don", "donald", "Micheal", "Juliet"];
console.log(users.filter((user) => user.toLowerCase().includes("d")));

function yangKochi(n, k) {
    let lamb = 12000;
    let drink = 2000;

    if (n >= 10) {
        let discount = Math.trunc(n / 10) * drink;
        return lamb * n + drink * k - discount;
    }
}
console.log(yangKochi(10, 3));
