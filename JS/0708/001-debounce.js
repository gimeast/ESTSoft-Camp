//디바운싱: 일정 시간 동안 추가입력이 없을때 한번만 실행한다.
//=> 마지막 입력 후 일정 시간이 지나면 실행
//예) 검색창에 입력할때 타이핑 멈춘 후에만 검색 실행하고 싶을때 또는 유효성 검사

//유효성 검사
//=> 마지막 입력으로부터 delay 시간이 지나야 실행이 된다.
function debounce(func, delay) {
    let timer; //타이머 ID를 저장하는 변수 => 타이머 취소할 때 사용

    //args: 인자들이 담긴 배열
    return function (...args) {
        clearTimeout(timer); //타이머 취소(초기화)
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function handleInput(keyword) {
    console.log("검색어: ", keyword);
    //실제로는 검색 요청을 하는 로직
}

const debouncedSearch = debounce(handleInput, 1000);

document.querySelector("#searchInput").addEventListener("input", (e) => {
    debouncedSearch(e.target.value);
});
/*
- 정리: 마지막 입력을 기준으로 동작한다.
클로저는 의도를 코드로 명확히 표현하는 구조를 만들기 위해 활용한다!!
*/
