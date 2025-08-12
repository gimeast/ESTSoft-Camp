import { useMouseLocation } from "./Hooks/useMouseLocation.js";
import { useScroll } from "./Hooks/useScroll.js";
import { useScrollThrottle } from "./Hooks/useScrollThrottle.js";

function App() {
    // const mouseLocation = useMouseLocation({ x: 0, y: 0 });
    // const isBottom = useScroll();
    const scrollThrottle = useScrollThrottle();

    // console.log("isBottom:", isBottom);
    console.log("scrollThrottle:", scrollThrottle);
    return <div style={{ backgroundColor: "blue", height: "1800px" }}></div>;
}

export default App;
