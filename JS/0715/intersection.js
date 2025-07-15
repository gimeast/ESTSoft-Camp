const target = document.getElementById("target");

function callback(entries) {
    entries.forEach((entry) => {
        //entry.isIntersecting: 해당 요소가 화면에 보이고있는지 여부를 알려준다.
        //entry.intersectionRatio
        if (entry.isIntersecting) {
            console.log("요소가 들어왔습니다!");
        } else {
            console.log("요소가 나갔습니다.");
        }
    });
}

const options = {
    root: null, //뷰포트를 기준으로 감지하겠다
    rootMargin: "0px", //여유공간 없이 교차될때 감지
    threshold: [0.0, 0.5, 1.0], // 0%, 50%, 100% 가시성을 기준으로
};
const observer = new IntersectionObserver(callback, options);

observer.observe(target);
