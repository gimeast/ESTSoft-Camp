import React, { useRef } from "react";

const App = () => {
    const inputRef = useRef(null);

    function handleClick() {
        const input = inputRef.current.value;
        console.log(input);
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>눌러</button>
        </div>
    );
};

export default App;
