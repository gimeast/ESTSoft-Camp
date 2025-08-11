import React, { useState } from "react";
import useInput from "./useInput.js";

function InputComponent() {
    const [value, onChange] = useInput("");

    return (
        <>
            <input type="text" onChange={onChange} />
            <div>{value}</div>
        </>
    );
}

export default InputComponent;
