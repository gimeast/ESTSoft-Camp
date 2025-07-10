//async, await
async function test() {
    return "Hello world";
}

console.log(test()); //Promise{<fulfilled>: 'Hello world'}

async function message() {
    console.log("함수시작");

    const hello = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello");
        }, 1000);
    });
    console.log(hello);

    const world = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("world");
        }, 0);
    });

    console.log(world);

    console.log(hello + world);
}
message();
console.log("여기함수있어여~");

/*
// promise로 작성했을 경우
function message2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello2");
        }, 1000);
    })
        .then((hello) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`${hello} world2`);
                }, 1000);
            });
        })
        .then((result) => {
            console.log(result);
        });
}
message2();
*/

async function getProducts() {
    try {
        const response = await fetch(
            "https://dev.wenivops.co.kr/services/fastapi-crud/1/product"
        );

        if (!response.ok) {
            throw new Error("상품 목록 조회 실패");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("오류 발생", error);
    }
}
// getProducts();

async function deleteProduct(productId) {
    try {
        const option = {
            method: "DELETE",
        };

        const response = await fetch(
            `https://dev.wenivops.co.kr/services/fastapi-crud/1/product/${productId}`,
            option
        );

        if (!response.ok) throw new Error("상품 삭제를 실패하였습니다");

        const data = await response.json();
        console.log("삭제 완료", data);
    } catch (error) {
        console.log("오류 발생", error);
    }
}

async function handleDeleteAndRefresh() {
    try {
        await deleteProduct(5); // 삭제 완료까지 대기
        await getProducts(); // 삭제 완료 후 조회
    } catch (error) {
        console.error("작업 중 오류 발생:", error);
    }
}

// handleDeleteAndRefresh();

async function createProduct() {
    try {
        const url =
            "https://dev.wenivops.co.kr/services/fastapi-crud/1/product";
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 10,
                productName: "[new] 개발 노트",
                price: 15000,
                stockCount: 10,
                thumbnailImg: "",
                option: [],
                discountRate: 0,
                shippingFee: 2500,
                detailInfoImage: [],
                viewCount: 100,
                pubDate: new Date().toISOString(),
                modDate: new Date().toISOString(),
            }),
        };

        const response = await fetch(url, option);

        if (!response.ok) throw new Error("상품 생성");

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("작업 중 오류 발생:", error);
    }
}

async function handleDeleteAndRefresh() {
    try {
        // for (let i = 11; i < 100; i++) {
        //     await createProduct(i);
        // }
        for (let i = 0; i < 100; i++) {
            await deleteProduct(10);
        }
        await getProducts();
    } catch (error) {
        console.error("작업 중 오류 발생:", error);
    }
}
handleDeleteAndRefresh();
// getProducts();
