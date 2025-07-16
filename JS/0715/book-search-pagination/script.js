const REST_API_KEY = "db62959ae64b80a7a0e5e762caf7c728";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

const $searchForm = document.querySelector("#search-form");
const $searchInput = document.querySelector("#search-input");
const $bookList = document.querySelector("#book-list");
const $pagination = document.querySelector("#pagination");

let currentPage = 1; //현재 페이지
let totalPage = 0;
let size = 10; //페이지당 아이템 수
const BLOCK_SIZE = 5; //페이지 수

function renderBooks(data) {
    if (!data.length) {
        $bookList.style.display = "flex";
        $bookList.innerHTML = `<li>
                                   <p>검색된 도서가 없습니다. 도서명을 확인해 주세요</p>
                               </li>`;
        return;
    }
    $bookList.style.display = "grid";

    $bookList.innerHTML = data
        .map((book) => {
            return `<li>
                    <h3>${book.title}</h3>
                    <img src="${book.thumbnail}" alt="">
                    <p>저자: ${book.authors.join(", ")}</p>
                </li>`;
        })
        .join("");
}

async function searchBooks(page = 1) {
    const query = $searchInput.value;

    if (!query.trim()) {
        alert("조회할 도서명을 입력해주세요");
        return;
    }

    const url = `${BOOK_URL}?query=${query}&page=${page}&size=${size}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `KakaoAK ${REST_API_KEY}`,
        },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    renderBooks(data.documents);

    const itemCount = data.meta.pageable_count;
    totalPage = Math.ceil(itemCount / size);
    currentPage = page;
    renderPagination();

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

$searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBooks(1);
});

function renderPagination() {
    $pagination.innerHTML = "";
    if (totalPage <= 1) return;

    const currentBlock = Math.floor((currentPage - 1) / BLOCK_SIZE);
    const currentStartPage = currentBlock * BLOCK_SIZE + 1;
    const currentEndPage = Math.min(
        totalPage,
        currentStartPage + BLOCK_SIZE - 1
    );

    if (currentBlock > 0) {
        const li = document.createElement("li");
        li.innerHTML = `<button onclick="searchBooks(${
            currentStartPage - BLOCK_SIZE
        })"><</button>`;
        $pagination.appendChild(li);
    }

    const fragment = document.createDocumentFragment();
    for (let i = currentStartPage; i <= currentEndPage; i++) {
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.textContent = i;
        button.addEventListener("click", () => {
            searchBooks(i);
        });

        if (currentPage === i) {
            button.classList.add("active");
        }
        li.appendChild(button);
        fragment.appendChild(li);
    }
    $pagination.appendChild(fragment);

    if (totalPage > currentEndPage) {
        const li = document.createElement("li");
        li.innerHTML = `<button onclick="searchBooks(${currentEndPage + 1})">></button>`;
        $pagination.appendChild(li);
    }
}
