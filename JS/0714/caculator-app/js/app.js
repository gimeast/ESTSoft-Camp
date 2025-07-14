// TODO2-1: 기본 계산 함수들을 import 하세요
import { add, subtract, multiply, divide } from "./calculator/basic.js";
import { changeUserState, userState } from "./user/userManager.js";
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultText = document.getElementById("result");
const upgradeBtn = document.getElementById("upgrade-btn");
const advance = document.querySelector("#advance-calculator");

// TODO2-2: 기본 계산기 이벤트 리스너를 추가하세요
document.getElementById("add").addEventListener("click", () => {
    calculator(add);
});

document.getElementById("subtract").addEventListener("click", () => {
    calculator(subtract);
});

document.getElementById("multiply").addEventListener("click", () => {
    calculator(multiply);
});

document.getElementById("divide").addEventListener("click", () => {
    calculator(divide);
});

// TODO2-3: 계산기 실행 함수를 완성하세요
function calculator(operation) {
    try {
        // [입력값]
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        // 입력값에 대한 유효성 검사를 작성하세요
        console.log(num1);
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
            throw new Error("숫자를 입력해주세요");
        }

        // [계산 결과]
        // const result = ?;
        const result = operation(num1, num2);
        // 계산 결과 유효성 검사를 작성하세요
        // 결과를 화면에 표시하세요
        resultText.innerText = result;
    } catch (error) {
        // 에러 메시지를 콘솔 및 화면에 출력하세요
        console.error(error);
        alert(error);
    }
}

// ========== Advanced Calculator 기능 ==========

// TODO5-1: 업그레이드 버튼 이벤트 리스너를 추가하세요
upgradeBtn.addEventListener("click", async () => {
    // TODO5-2: 사용자 상태를 변경하세요
    changeUserState(userState);

    // TODO5-3: userState를 확인하여 고급 기능을 활성화하세요
    if (userState) {
        try {
            // 동적 import로 advance.js 모듈을 로드하세요
            const { power, squareRoot } = await import(
                "./calculator/advance.js"
            );

            // 고급 계산기 이벤트 리스너를 추가하세요
            document.getElementById("power").addEventListener("click", () => {
                calculator(power);
            });

            document
                .getElementById("squareRoot")
                .addEventListener("click", () => {
                    calculator(squareRoot);
                });

            // UI를 변경하여 고급 계산기를 표시하고, 고급 기능이 활성화 메시지를 화면에 출력하세요
            advance.style.display = "block";
        } catch (error) {
            // 에러 메시지를 콘솔 및 화면에 출력하세요
            console.error(error);
            alert(error);
        }
    } else {
        // 권한이 없는 경우 "고급 계산기 사용 권한이 없습니다." 메시지를 화면에 출력해주세요.
        advance.style.display = "none";
    }
});
