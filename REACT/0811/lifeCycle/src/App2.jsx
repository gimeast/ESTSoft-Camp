import FunctionalComp from "./FunctionalComp.jsx";
import { useState } from "react";

function App() {
    const [unmount, setUnmount] = useState(false);
    return <>{!unmount && <FunctionalComp setUnmount={setUnmount} />}</>;
}

export default App;
