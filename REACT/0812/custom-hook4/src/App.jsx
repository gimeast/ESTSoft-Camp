import { useMouseLocation } from "./Hooks/useMouseLocation.js";
import { useScroll } from "./Hooks/useScroll.js";
import { useScrollThrottle } from "./Hooks/useScrollThrottle.js";
import { useDebounce } from "./Hooks/useDebounce.js";

function App() {
    // const mouseLocation = useMouseLocation({ x: 0, y: 0 });
    // const isBottom = useScroll();
    // const scrollThrottle = useScrollThrottle();
    const scrollDebounce = useDebounce();

    // console.log("isBottom:", isBottom);
    // console.log("scrollThrottle:", scrollThrottle);
    console.log("scrollDebounce:", scrollDebounce);
    return <div style={{ backgroundColor: "blue", height: "1800px" }}></div>;
}

export default App;
