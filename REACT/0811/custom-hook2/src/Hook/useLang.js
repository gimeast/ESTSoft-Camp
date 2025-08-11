import { useContext } from "react";
import LanguageContext from "../Context/LanguageContext.js";

function useLang() {
    return useContext(LanguageContext);
}

export default useLang;
