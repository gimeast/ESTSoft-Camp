//1
// setInterval(() => {
//     console.log("hello");
// }, 1000);

// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toLocaleDateString());

//2
// setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
// }, 3000);

//3
// let cnt = 1;
// setInterval(() => {
//     console.log(`count ${cnt++}`);
// }, 500);

//4
// const news = [
//     "코딩수업 마지막날",
//     "Javascript 최고",
//     "그동안 즐거웠다",
//     "끝까지 버티기",
// ];
// let idx = 0;
// setInterval(() => {
//     console.log(news[idx++ % news.length]);
// }, 1000);

//5
// const timer = setInterval(() => {
//     console.log("hello");
// }, 1000);
// setTimeout(() => {
//     clearInterval(timer);
// }, 3000);

//6
let cnt = 0;
const timer = setInterval(() => {
    console.log(++cnt);
    if (cnt === 5) clearInterval(timer);
}, 1000);
