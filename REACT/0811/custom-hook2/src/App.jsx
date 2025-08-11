import LanguageProvider from "./LanguageProvider.jsx";
import LanguageSelector from "./LangSelector.jsx";
import Content from "./Contents.jsx";
import Header from "./Header.jsx";

function App() {
    return (
        <LanguageProvider>
            <LanguageSelector />
            <Header />
            <Content />
        </LanguageProvider>
    );
}

export default App;
