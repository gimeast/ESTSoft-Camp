// 상품 ID를 통해 상품 상세 정보를 가져와 콘솔에 출력하세요!
// 요청 URL: https://dev.wenivops.co.kr/services/fastapi-crud/1/product/id
// 요청 방식: GET

function fetchProductById(id) {
    // 여기에 코드 작성
    fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("HTTP 응답 실패");
            }
            return res.json();
        })
        .then((json) => {
            console.log(json);
        })
        .catch((error) => {
            console.error("ERROR: ", error);
        });
}
// fetchProductById(1);

// 실습. 상품 수정하기
// 요청 URL: https://dev.wenivops.co.kr/services/fastapi-crud/1/product/id
// 요청 방식: PUT

/*
(1) fetchProductById() 함수를 사용해서 기존 상품 데이터를 가져오세요
(2) 가져온 데이터에서 price만 새로운 가격으로 변경하세요
(3) 변경된 데이터를 PUT 요청으로 서버에 전송하세요
(4) 성공 시 "상품 수정 완료!" 메시지와 응답 데이터 출력
(5) 에러 발생 시 error 메시지 출력
*/

function fetchProductByIdV2(id) {
    return fetch(
        `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("상품 정보를 가져오지 못했습니다.");
            }
            console.log(response);
            return response.json();
        })
        .catch((error) => {
            console.error("Error:", error);
            throw error;
        });
}

function updateProductPrice(id, newPrice) {
    // (1) fetchProductById() 함수를 사용해서 기존 상품 데이터를 가져오세요
    fetchProductByIdV2(id)
        .then((productData) => {
            console.log("1. 상세 정보", productData);
            // (2) 가져온 데이터에서 price만 새로운 가격으로 변경하세요
            const updateProduct = {
                ...productData,
                price: newPrice,
            };

            // (3) 변경된 데이터를 PUT 요청으로 서버에 전송하세요
            return fetch(
                `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateProduct),
                }
            );
        })
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                throw new Error("상품 수정에 실패했습니다");
            }
            return response.json();
        })
        .then((data) => {
            // (4) 성공 시 "상품 수정 완료!" 메시지와 응답 데이터 출력
            console.log("상품 수정 완료!", data);
        })
        .catch((error) => {
            // (5) 에러 발생 시 error 메시지 출력
            console.error(error);
        });
}
updateProductPrice(1, 20022);
