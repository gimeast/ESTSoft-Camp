import { useScrollObserver } from "./Hooks/useScrollObserver.js";

function App() {
    const isBottom = useScrollObserver();
    console.log("isBottom", isBottom);
    // const scrollThrottle = useScrollThrottle();
    // const scrollDebounce = useDebounce();

    // console.log("isBottom:", isBottom);
    // console.log("scrollThrottle:", scrollThrottle);
    // console.log("scrollDebounce:", scrollDebounce);
    return <div style={{ backgroundColor: "blue", height: "1800px" }}></div>;
}

export default App;
