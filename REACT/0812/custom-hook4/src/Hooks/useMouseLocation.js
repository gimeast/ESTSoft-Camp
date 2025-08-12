import { useEffect, useState } from "react";

export function useMouseLocation(initVal) {
    const [mouseLocation, setMouseLocation] = useState(
        initVal || { x: null, y: null }
    );

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMouseLocation({ x: event.x, y: event.y });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return mouseLocation;
}
