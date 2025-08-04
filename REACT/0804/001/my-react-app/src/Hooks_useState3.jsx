import { useState } from "react";
// 그래서 감시합니다. 필요한 변수를요.
// 그리고 감시하는 변수가 변경이 되면
// 그 부분을 다시 렌더링합니다.
function App() {
    const [count, setCount] = useState({
        name: "hojun",
        age: 20,
    });

    const increment = () => {
        setCount({ ...count, age: count.age + 1 });
        console.log(count);
    };
    return (
        <div>
            <div>{count.age}</div>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;
