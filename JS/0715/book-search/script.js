const REST_API_KEY = "db62959ae64b80a7a0e5e762caf7c728";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

// DOM 요소 선택
const $bookList = document.getElementById("book-list");
const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input");

let currentPage = 1;
const size = 10;

// TODO 1: 책 검색 함수 구현
async function searchBooks() {
    // 검색어 가져오기
    const search = $searchInput.value;
    // 빈 검색어 확인
    if (!search.trim()) {
        alert("검색어를 입력해 주세요");
        $searchInput.focus();
        return;
    }

    // API 호출
    try {
        // fetch를 사용해서 API 호출하기
        const url = `${BOOK_URL}?query=${encodeURIComponent(search)}&page=${currentPage}&size=${size}`;
        const options = {
            method: "GET",
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`,
            },
        };
        const response = await fetch(url, options);
        // 응답 상태 확인하기
        if (!response.ok) {
            throw new Error("API 통신 중 오류가 발생하였습니다.");
        }
        // JSON 데이터로 변환하기
        const data = await response.json();
        // 결과가 없다면 '검색 결과가 없습니다.' 메시지 표시
        // 검색 결과를 화면에 표시하기
        const books = data.documents;
        const meta = data.meta;
        renderBooks(books);
        renderPagination(meta);
    } catch (error) {
        // 에러 메시지 콘솔 및 화면에 표시하기
        console.error(error);
        alert(error);
    }
}

// TODO 2: 폼 제출 이벤트 처리
$searchForm.addEventListener("submit", async (e) => {
    // 기본 동작 방지하기
    e.preventDefault();
    // 검색 함수 호출하기
    await searchBooks();
});

// TODO 3: 책 목록 렌더링 함수
function renderBooks(books) {
    // 기존 내용 삭제
    // 책 정보를 화면에 표시
    if (books.length === 0) {
        $bookList.innerHTML = "<li>검색 결과가 없습니다.</li>";
        $bookList.style.display = "block";
        return;
    }
    $bookList.style.display = "grid";
    $bookList.innerHTML = books
        .map((book) => {
            return `<li><h3>${book.title}</h3><img src="${book.thumbnail}" alt=""/><p> 저자: ${book.authors.join(", ")}</p></li>`;
        })
        .join("");
}

function renderPagination(meta) {
    const $pagination = document.getElementById("pagination");
    console.log("meta", meta);
    // is_end: false;
    // pageable_count: 289;
    // total_count: 289;
}

// 🔍 구현 힌트
/*
📚 API 요청 URL 만들기:
`${BOOK_URL}?query=${encodeURIComponent(query)}&size=10`

🔑 Authorization 헤더 설정:
{
  headers: {
    'Authorization': `KakaoAK ${REST_API_KEY}`
  }
}

📊 API 응답 데이터 구조:
{
  "documents": [
    {
      "title": "책 제목",
      "authors": ["저자1", "저자2"],
      "thumbnail": "이미지 URL",
      "publisher": "출판사",
      "price": 15000
    }
  ]
}
*/
