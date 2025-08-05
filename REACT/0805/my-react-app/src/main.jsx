import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import StyledComponent from "./StyledComponent.jsx";
import SynthesisComponent from "./SynthesisComponent2.jsx";
import ModuleCSS from "./ModuleCSS.jsx";
import Card from "./Card.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <main>
            <Card />
        </main>
    </StrictMode>
);
