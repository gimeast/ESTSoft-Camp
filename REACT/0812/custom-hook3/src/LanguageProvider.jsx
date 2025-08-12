import { createContext, useState } from "react";
import languages from "./languages.js";
import greetingsData from "./hook/greetings.json";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const [languageState, setLanguageState] = useState("ko");
    const [searchData, setSearchData] = useState("");

    const changeLanguage = (lang) => {
        setLanguageState(lang);
    };

    return (
        <LanguageContext.Provider
            value={{
                languageState,
                changeLanguage,
                languages,
                searchData,
                setSearchData,
                greetingsData,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export { LanguageProvider, LanguageContext };
