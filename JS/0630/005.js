const statusCode = 200;
switch (statusCode) {
    case 200:
        console.log("성공입니다.");
        break;
    case 404:
        console.log("페이지를 찾을 수 없습니다.");
        break;
    case 500:
        console.log("서버 오류입니다.");
        break;
    default:
        console.log("알수없는 오류입니다.");
}

const userRole = "admin";
switch (userRole) {
    case "user":
        console.log("회원님 안녕하세요.");
        break;
    case "admin":
        console.log("관리자님 안녕하세요.");
        break;
    case "guest":
        console.log("게스트 화면입니다.");
        break;
    default:
        console.log("페이지를 보는 권한이 없습니다.");
}

const today = new Date();
console.log(today.toISOString().split("T")[0]);
console.log(
    `${today.getFullYear()}-${today.getMonth().toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}, ${today.getDay()}`
);

let day;
switch (today.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Invalid day";
}
console.log(day);

const hours = today.getHours();
const minutes = today.getMinutes();
console.log(
    `${(hours % 12 || 12).toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`
);

console.log(3 % 12);

let dan = 5;
for (let i = 1; i <= 9; i++) {
    console.log(`${dan} X ${i} = ${dan * i}`);
}
