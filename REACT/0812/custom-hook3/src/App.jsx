import Contents from "./Contents";
import LangSelector from "./LangSelector";
import { LanguageProvider } from "./LanguageProvider";
import InputBox from "./InputBox.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

function App() {
    return (
        <LanguageProvider>
            <InputBox />
            <LangSelector />
            <Contents />
            <LanguageSwitcher />
        </LanguageProvider>
    );
}

export default App;
