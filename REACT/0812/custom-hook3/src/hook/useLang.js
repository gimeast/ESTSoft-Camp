import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

const useLang = () => {
    const context = useContext(LanguageContext);
    const message = () => {
        return context.greetingsData.greetings.find(
            (lang) => lang.language === context.languageState
        ).welcome;
    };
    return {
        searchData: context.searchData,
        setSearchData: context.setSearchData,
        languages: context.languages,
        languageData: context.languages[context.languageState],
        currentLanguage: context.languageState,
        changeLanguage: context.changeLanguage,
        welcomeMessage: message(),
    };
};

export default useLang;
