console.log(true && true);
console.log(true && false);
console.log(false && false);

let ko = 100;
let en = 80;
let math = 50;

let avg = (ko + en + math) / 3;

if (avg >= 70 && ko >= 60 && en >= 60 && math >= 60) {
    if (ko >= 60 && en >= 60 && math >= 60) console.log("합격입니다.");
} else {
    console.log("불합격입니다.");
}
