/*
### 1. 인터페이스 기본 - 사용자 정보 인터페이스

다음 요구사항에 맞는 `User` 인터페이스를 정의하세요.

- `name`: 문자열 (필수)
- `age`: 숫자 (필수)
- `email`: 문자열 (선택사항)
 */
export interface User {
    name: string;
    age: number;
    email?: string;
}
// 아래 코드가 올바르게 작동하도록 해주세요
const user1: User = {
    name: "김철수",
    age: 25,
};

const user2: User = {
    name: "이영희",
    age: 30,
    email: "younghee@example.com",
};

/*
### 2. 인터페이스 확장 - 관리자 인터페이스

위에서 만든 `User` 인터페이스를 확장하여 `Admin` 인터페이스를 만드세요.

- `User`의 모든 속성을 포함
- `permissions`: 문자열 배열 (필수)
 */
interface Admin extends User {
    permissions: string[];
}
const admin: Admin = {
    name: "박관리자",
    age: 35,
    email: "admin@example.com",
    permissions: ["read", "write", "delete"],
};

/*
### 3. 제네릭 기본 - 응답 래퍼 함수

API 응답을 감싸는 제네릭 함수를 만드세요.
 */
// 성공/실패를 나타내는 응답 타입
interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}

// 제네릭 함수 createResponse를 완성하세요
// 성공시: success: true, data 포함
// 실패시: success: false
function createResponse<T>(
    data: T | null,
    success: boolean,
    message?: string
): ApiResponse<T> {
    if (!success) {
        return { success, message };
    }
    return { success, data: data! };
}

// 사용 예시 (이 코드들이 올바르게 작동해야 합니다)
const userResponse = createResponse<User>({ name: "홍길동", age: 20 }, true);
const errorResponse = createResponse<User>(
    null,
    false,
    "사용자를 찾을 수 없습니다"
);

console.log("userResponse", userResponse);
console.log("errorResponse", errorResponse);
