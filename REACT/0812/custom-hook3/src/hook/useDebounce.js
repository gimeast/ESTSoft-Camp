import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler); //value, delay 변경감지시 정리함수 실행됨
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;
