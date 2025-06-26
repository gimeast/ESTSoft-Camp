//truthy: ' ', 'asdsad', 1, true
//falsy: '', null, undefined, 0, false
if (0) {
    console.log("true");
} else {
    console.log("false");
}

let number = 5;
number % 2 === 0 ? console.log("even") : console.log("odd");

let score = 60;

if (score >= 90) {
    console.log("합");
} else {
    console.log("불");
}

if (score >= 90) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else if (score >= 50) {
    console.log("C");
} else {
    console.log("실패");
}
