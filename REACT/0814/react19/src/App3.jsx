import { useState, useEffect, use, Suspense } from "react";

function fetchTodo(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const todos = {
                1: { id: 1, title: "리액트 공부하기", done: false },
                2: { id: 2, title: "운동하기", done: true },
                3: { id: 3, title: "책 읽기", done: false },
            };
            resolve(todos[id]);
        }, 1000);
    });
}

function Todo({ todoPromise }) {
    const todo = use(todoPromise);
    return (
        <>
            <div>
                <h3>{todo.title}</h3>
                <p>상태: {todo.done ? "완료" : "미완료"}</p>
            </div>
        </>
    );
}

function TodoApp() {
    const [todoPromise, setTodoPromise] = useState(null);

    function handleClick(selectedId) {
        setTodoPromise(fetchTodo(selectedId));
    }

    return (
        <div>
            <h2>할 일 앱</h2>
            <button onClick={() => handleClick(1)}>할 일 1</button>
            <button onClick={() => handleClick(2)}>할 일 2</button>
            <button onClick={() => handleClick(3)}>할 일 3</button>

            {todoPromise && (
                <Suspense fallback={<p>로딩 중...</p>}>
                    <Todo todoPromise={todoPromise} />
                </Suspense>
            )}
        </div>
    );
}

export default TodoApp;
