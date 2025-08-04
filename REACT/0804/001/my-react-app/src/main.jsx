import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Hooks_useState3.jsx";
import { GameCharacter } from "./GameCharacter.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GameCharacter />
    </StrictMode>
);
