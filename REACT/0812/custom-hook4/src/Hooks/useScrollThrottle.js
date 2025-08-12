import { useState, useEffect, useRef } from "react";

export function useScrollThrottle(delay = 300) {
    const [isBottom, setIsBottom] = useState();
    const isThrottle = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isThrottle.current) {
                isThrottle.current = true;

                setTimeout(() => {
                    setIsBottom(
                        window.innerHeight +
                            document.documentElement.scrollTop +
                            10 >=
                            document.documentElement.offsetHeight
                    );
                    isThrottle.current = false;
                }, delay);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isBottom;
}
