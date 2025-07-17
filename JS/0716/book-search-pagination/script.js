const REST_API_KEY = "db62959ae64b80a7a0e5e762caf7c728";
const BOOK_URL = "https://dapi.kakao.com/v3/search/book";

// TODO 1: 페이지네이션 상태 관리 변수 선언
// - currentPage: 현재 페이지 번호
let currentPage;
// - totalPages: 전체 페이지 수
let totalPages;
// - currentQuery: 현재 검색어
let currentQuery;
const PAGE_SIZE = 10;
const BLOCK_SIZE = 5;

// DOM 요소 선택
const $bookList = document.getElementById("book-list");
const $pagination = document.getElementById("pagination");
const $searchForm = document.getElementById("search-form");
const $searchInput = document.getElementById("search-input");

// TODO 2: 책 검색 함수 수정 (페이지네이션 기능 추가)
async function searchBooks(page = 1) {
    // 2-1. 검색어 가져오기
    const query = $searchInput.value.trim();

    // 2-2. 빈 검색어 체크
    if (query === "") {
        alert("검색어를 입력해주세요!");
        $searchInput.focus();
        return;
    }

    // 2-3. 첫 번째 페이지일 때만 currentQuery 업데이트
    if (page === 1) currentQuery = query;

    try {
        // 2-4. fetch 요청 URL에 page 파라미터 추가
        const response = await fetch(
            `${BOOK_URL}?query=${encodeURIComponent(query)}&page=${page}&size=${PAGE_SIZE}`,
            {
                headers: {
                    Authorization: `KakaoAK ${REST_API_KEY}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        // 2-5. 검색 결과 없을 때 처리
        if (data.documents.length === 0) {
            $bookList.innerHTML = "<li>검색 결과가 없습니다.</li>";
            // 페이지네이션 숨기기
            $pagination.innerHTML = "";
            return;
        }

        // 책 검사 결과
        renderBooks(data.documents);

        // 2-7. 페이지 이동 시 맨 위로 스크롤
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        // 2-8. 페이지네이션 정보 업데이트
        // totalPages(data.meta.pageable_count 활용)
        const itemCounts = data.meta.pageable_count;
        totalPages = Math.ceil(itemCounts / PAGE_SIZE);
        console.log("totalPages", totalPages);
        // currentPage 업데이트
        currentPage = page;
        // 페이지네이션 렌더링 함수 호출
        renderPagination();
    } catch (error) {
        console.error("검색 실패:", error);
        $bookList.innerHTML = "<li>검색 중 오류가 발생했습니다.</li>";
        // 에러 시 페이지네이션 숨기기
        $pagination.innerHTML = "";
    }
}

// 폼 제출 이벤트
$searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBooks(1);
});

// 책 목록 렌더링 함수
function renderBooks(books) {
    $bookList.innerHTML = "";

    books.forEach((book) => {
        const bookItem = document.createElement("li");
        bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <img src="${book.thumbnail}" alt=""/>
      <p>저자: ${book.authors.join(", ")}</p>
    `;
        $bookList.appendChild(bookItem);
    });
}

// TODO 3: 페이지네이션 렌더링 함수 구현
function renderPagination() {
    // 3-1. 기존 페이지네이션 초기화
    $pagination.innerHTML = "";
    // 3-2. 페이지가 1개 이하면 페이지네이션 숨기기
    if (totalPages <= 1) return;

    // startPage와 endPage 계산
    const currentBlock = Math.floor((currentPage - 1) / BLOCK_SIZE);
    const startPage = currentBlock * BLOCK_SIZE + 1;
    const endPage = Math.min(totalPages, startPage + BLOCK_SIZE - 1);

    // 3-3. 이전 버튼 생성 (현재 페이지가 1보다 클 때만)
    if (startPage > 1) {
        const prev = document.createElement("button");
        prev.textContent = "<";
        prev.addEventListener("click", () => {
            searchBooks(startPage - 1);
        });
        $pagination.appendChild(prev);
    }

    // 3-4. 페이지 번호 버튼 생성 (최대 5개)
    // 현재 페이지면 active 클래스 추가
    const fragment = document.createDocumentFragment();
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        if (currentPage === i) pageButton.classList.add("active");
        fragment.appendChild(pageButton);
        pageButton.addEventListener("click", () => {
            searchBooks(i);
        });
    }
    $pagination.appendChild(fragment);

    // 현재 block의 마지막 페이지가 끝 페이지가 아니면 다음 버튼을 보여준다.
    if (totalPages !== endPage) {
        const next = document.createElement("button");
        next.textContent = ">";
        next.addEventListener("click", () => {
            searchBooks(endPage + 1);
        });
        $pagination.appendChild(next);
    }
}
