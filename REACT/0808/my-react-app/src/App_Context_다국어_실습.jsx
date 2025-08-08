import {
    useState,
    createContext,
    useContext,
    useEffect,
    useCallback,
} from "react";
import "./App.css";

const languages = {
    en: {
        title: "Multi-language App",
        greeting: "Hello, welcome to our app!",
        description: "This app supports multiple languages.",
        languageSelector: "Select Language:",
    },
    ko: {
        title: "다국어 앱",
        greeting: "안녕하세요, 우리 앱에 오신 것을 환영합니다!",
        description: "이 앱은 여러 언어를 지원합니다.",
        languageSelector: "언어 선택:",
    },
    ja: {
        title: "多言語アプリ",
        greeting: "こんにちは、私たちのアプリへようこそ！",
        description: "このアプリは複数の言語をサポートしています。",
        languageSelector: "言語を選択：",
    },
};

const Context = createContext();

function LanguageSelector() {
    const { currentLanguage, setLanguage } = useContext(Context);
    return (
        <>
            <p>{currentLanguage.languageSelector}</p>
            <ul>
                <li>
                    <button onClick={() => setLanguage("en")}>English</button>
                </li>
                <li>
                    <button onClick={() => setLanguage("ko")}>한국어</button>
                </li>
                <li>
                    <button onClick={() => setLanguage("ja")}>일본어</button>
                </li>
            </ul>
        </>
    );
}

function Header() {
    const { currentLanguage } = useContext(Context);
    return (
        <header>
            <h1>{currentLanguage.title}</h1>
        </header>
    );
}

function Main() {
    const { currentLanguage } = useContext(Context);
    return (
        <main>
            <p>{currentLanguage.greeting}</p>
            <p>{currentLanguage.description}</p>
        </main>
    );
}

function App() {
    const [language, setLanguage] = useState("ko");
    const currentLanguage = languages[language];

    return (
        <>
            <Context.Provider value={{ currentLanguage, setLanguage }}>
                <LanguageSelector />
                <Header />
                <Main />
            </Context.Provider>
        </>
    );
}

export default App;
