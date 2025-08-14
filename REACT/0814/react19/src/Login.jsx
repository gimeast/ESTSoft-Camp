import { useActionState, useRef } from "react";

const Login = () => {
    const [state, formAction, isPending] = useActionState(action, {
        success: false,
        message: "",
    });

    const msgRef = useRef();

    async function action(previousState, formData) {
        const username = formData.get("username");
        const password = formData.get("password");

        if (!username) {
            return { success: false, message: "아이디를 입력해주세요" };
        } else if (!password) {
            return { success: false, message: "비밀번호를 입력해주세요" };
        }

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                return {
                    success: true,
                    message: `로그인 성공! ${result.user.username}님 환영합니다.`,
                };
            } else {
                return {
                    success: false,
                    message: result.message || "로그인에 실패했습니다.",
                };
            }
        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: error.message,
            };
        }
    }

    function msgReset() {
        msgRef.current.innerText = "";
    }

    return (
        <div className="container">
            <h2>로그인</h2>
            <form action={formAction}>
                <div>
                    <label htmlFor="username">아이디:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="아이디를 입력하세요"
                        autoComplete="username"
                    />
                </div>
                <div>
                    <label htmlFor="password">비밀번호:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력하세요"
                        autoComplete="current-password"
                    />
                </div>
                {state.message && (
                    <div>
                        <span className="msg" ref={msgRef}>
                            {state.message}
                        </span>
                    </div>
                )}

                <div className="btn-group">
                    <button type="submit" disabled={isPending}>
                        {isPending ? "로그인중..." : "로그인"}
                    </button>
                    <button type="reset" onClick={msgReset}>
                        초기화
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
