import type { Product } from "../types";

/**
 * 1. API fetch -> 데이터 불러오기(get 요청)
 * 2. 함수 이름: fetchAllProducts
 * 3. 성공 응답(받아온 데이터 리턴하기) / 실패 응답 처리(에러 메시지는 재량)
 * 중요 포인트!!
 * - 함수의 리턴 타입 정의
 */

const BASE_URL = "https://dev.wenivops.co.kr/services/fastapi-crud/1/product";

export const fetchAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) throw new Error("API 조회 중 에러 발생!");

        return response.json();
    } catch (error) {
        if (error instanceof TypeError) {
            console.error("네트워크 연결 실패:", error.message);
        }
        // HTTP 에러 응답
        else if (error instanceof Error) {
            console.error("API 응답 에러:", error.message);
        }

        return [];
    }
};
