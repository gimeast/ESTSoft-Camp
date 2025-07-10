const ul = document.querySelector("#blogList");

// 1. 렌더링
function renderingBlog(data) {
    // 여기에 작성
    console.log("data", data);

    data.forEach((item) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <h2>${item.title}</h2>
        <strong>작성자: ${item.author}</strong>
        <time datetime=${item.date}>${item.date}</time>
        <p>조회수: ${item.views_count}</p>`;

        ul.appendChild(li);
    });
}

// 2. 블로그 목록 조회
function fetchBlog() {
    // 여기에 작성
    const url = "https://dev.wenivops.co.kr/services/fastapi-crud/1/blog";
    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("조회 중 오류가 발생하였습니다.");
            }
            return res.json();
        })
        .then((json) => {
            renderingBlog(json);
        })
        .catch((error) => {
            console.error(error);
        });
}

fetchBlog();
