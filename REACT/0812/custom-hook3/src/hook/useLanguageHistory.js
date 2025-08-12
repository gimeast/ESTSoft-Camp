import { useState, useEffect, useRef } from "react";
import useLang from "./useLang.js";

export default function useLanguageHistory() {
    const { currentLanguage, changeLanguage, languageData } = useLang();

    const previousLanguageRef = useRef(currentLanguage);
    const [previousLanguage, setPreviousLanguage] = useState(null);

    useEffect(() => {
        setPreviousLanguage(previousLanguageRef.current);
        previousLanguageRef.current = currentLanguage;
    }, [currentLanguage]);

    // previousLanguage 상태가 바뀔 때 로컬스토리지도 업데이트
    useEffect(() => {
        if (previousLanguage !== null) {
            localStorage.setItem("previousLanguage", previousLanguage);
        }
    }, [previousLanguage]);

    const handleChangeLanguage = (lang) => {
        changeLanguage(lang);
        localStorage.setItem("selectedLanguage", lang);
    };

    return {
        handleChangeLanguage,
        languageData,
        currentLanguage,
        previousLanguage,
    };
}
