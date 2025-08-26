// 아래 인터페이스를 기반으로 유틸리티 타입을 활용해보세요.

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
}
/*
1.id 제외하는 interface를 만들어주세요.
2.모든 필드가 선택적이 되는 interface를 만들어주세요.
3.id, name, price만 포함이 되는 interface를 만들어주세요.
 */
//1
type OmitId = Omit<Product, "id">;
const omit: OmitId = {
    category: "test",
    description: "test",
    name: "test",
    price: 1111,
};
console.log(omit);
//2
type PartialEx = Partial<Product>;
const partial: PartialEx = {
    category: "test",
    price: 1111,
};
//3
type PickEx = Pick<Product, "id" | "name" | "price">;
const pick: PickEx = {
    id: 1,
    name: "test",
    price: 123,
};

// 아래 인터페이스 기반으로 다음과 같은 맵드 타입을 구현해보세요.
interface Product2 {
    id: number;
    name: string;
    price: number;
    description?: string;
    category?: string;
}
// 모든 속성을 읽기 전용으로 만드는 Readonly<T> 구현
// 모든 속성을 필수로 만드는 Required<T> 구현
type ReadonlyProduct2<T> = {
    readonly [P in keyof T]: T[P];
};
type RequiredProduct2<T> = {
    [P in keyof T]-?: T[P];
};

const readonlyProduct: ReadonlyProduct2<Product2> = {
    category: "test",
    description: "test",
    id: 1,
    name: "test",
    price: 123,
};
const requiredProduct: RequiredProduct2<Product2> = {
    category: "test",
    description: "test",
    id: 1,
    name: "test",
    price: 123,
};
