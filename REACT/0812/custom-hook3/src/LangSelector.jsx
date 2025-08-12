import useLang from "./Hook/useLang";
import { useEffect } from "react";
import useLanguageHistory from "./hook/useLanguageHistory.js";

export default function LangSelector() {
    const { languageData, currentLanguage, changeLanguage, searchData } =
        useLang();
    const { handleChangeLanguage } = useLanguageHistory();

    useEffect(() => {
        if (searchData && searchData[0]?.type) {
            handleChangeLanguage(searchData[0].type);
        }
    }, [searchData, handleChangeLanguage]);

    return (
        <>
            <h2>{languageData.languageSelector}</h2>

            <>
                <button
                    onClick={() => {
                        handleChangeLanguage("en");
                    }}
                    disabled={currentLanguage === "en"}
                >
                    English
                </button>
                <button
                    onClick={() => {
                        handleChangeLanguage("ko");
                    }}
                    disabled={currentLanguage === "ko"}
                >
                    한국어
                </button>
                <button
                    onClick={() => {
                        handleChangeLanguage("ja");
                    }}
                    disabled={currentLanguage === "ja"}
                >
                    日本語
                </button>
            </>
        </>
    );
}
