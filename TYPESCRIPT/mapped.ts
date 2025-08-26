type OptionalNotice = {
    title?: string; // 선택적
    content?: string; // 선택적
    date: string; // 필수
};

type RequiredTestNotice<T> = {
    [P in keyof T as `hello${string & P}`]-?: string;
};

const testNotice: RequiredTestNotice<OptionalNotice> = {
    hellotitle: "타입스크립트",
    hellocontent: "여긴 어디죠? 나는 누구인가요?",
    hellodate: "2024-13-30",
    // 모든 필드가 필수가 됩니다.
    // hellotitle 생략 시 에러
    // hellocontent 생략 시 에러
    // hellodate 생략 시 에러
};

console.log(testNotice);
