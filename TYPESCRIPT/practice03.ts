/*
다음 조건을 만족하는 인터페이스들을 작성해보세요.
BaseItem 인터페이스: id(number), name(string) 속성을 가짐
Book 인터페이스: BaseItem을 확장하고 author(string), pages(number) 속성을 추가
Movie 인터페이스: BaseItem을 확장하고 director(string), duration(number) 속성을 추가
* */

interface BaseItem {
    id: number;
    name: string;
}

// interface Book extends BaseItem {
//     author: string;
//     pages: number;
// }

interface Movie extends BaseItem {
    director: string;
    duration: number;
}

//아래 코드가 정상적으로 동작하도록 필요한 인터페이스를 정의해보세요.
// interface User {
//     firstName: string;
//     lastName: string;
//     age: number;
//     role: string;
// }

interface UserDetails {
    displayName: string;
    age: number;
    isAdmin: boolean;
}

function processUser(user: User): UserDetails {
    return {
        displayName: user.firstName + " " + user.lastName,
        age: user.age,
        isAdmin: user.role === "admin",
    };
}

// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     role: "admin",
// };
//
// const details = processUser(user);
