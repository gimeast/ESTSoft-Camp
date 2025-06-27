const heights = [150, 169, 185, 170];
const ghost = 167;
console.log(heights.filter((val) => val > ghost).length);

const words = ["hello", "ghost", "apple", "grape", "Lemon"];
console.log(words.filter((v) => v.toLocaleLowerCase().includes("l")));
