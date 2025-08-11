import React, { useState, memo, useMemo, useCallback } from "react";

const UserProfile = memo(({ user, hobbies, onUpdate }) => {
    console.log("UserProfile 렌더링됨");
    return (
        <div>
            <p>
                이름: {user.name}, 나이: {user.age}
            </p>
            <p>취미: {hobbies.join(", ")}</p>
            <button onClick={() => onUpdate("프로필 업데이트됨")}>
                업데이트
            </button>
        </div>
    );
});

export default function App() {
    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(0);

    console.log("App 렌더링됨");

    // TODO: 아래 객체들이 매번 새로 생성되어 불필요한 리렌더링 발생
    const user = useMemo(() => ({ name: "김철수", age: 25 }), []);
    const hobbies = useMemo(() => ["독서", "영화감상"], []);
    const handleUpdate = useCallback((msg) => {
        setMessage(msg);
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>카운터: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>카운터 증가</button>

            <p>메시지: {message}</p>

            <UserProfile
                user={user}
                hobbies={hobbies}
                onUpdate={handleUpdate}
            />
        </div>
    );
}
