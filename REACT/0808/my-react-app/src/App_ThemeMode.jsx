import { createContext, useContext, useState } from "react";

const themes = {
    light: {
        name: "라이트 모드",
        container: "bg-white text-gray-900",
        card: "bg-gray-100 border-gray-300",
        button: "bg-blue-500 hover:bg-blue-600 text-white",
        header: "bg-gray-200 text-gray-900 h-30 text-center",
        footer: "border-gray-300",
    },
    dark: {
        name: "다크 모드",
        container: "bg-gray-900 text-white",
        card: "bg-gray-800 border-gray-700",
        button: "bg-green-500 hover:bg-green-600 text-white",
        header: "bg-gray-800 text-white h-30 text-center",
        footer: "bg-gray-700 text-white",
    },
};

const Context = createContext();
function CardList() {
    const { currentTheme } = useContext(Context);
    return (
        <div
            className={`flex flex-wrap gap-30 px-30 ${currentTheme.container}`}
        >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}
function Card() {
    const { currentTheme } = useContext(Context);

    return (
        <article
            className={`${currentTheme.card} border-1 rounded-2xl w-[350px] h-[500px]`}
        >
            <h2>카드</h2>
            <div>content</div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                구독
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white">
                좋아요
            </button>
        </article>
    );
}

function ThemeModeBtn() {
    const { currentTheme, changeTheme } = useContext(Context);
    return (
        <button className={currentTheme.button} onClick={changeTheme}>
            모드 변경
        </button>
    );
}

function Header() {
    const { currentTheme } = useContext(Context);
    return <header className={currentTheme.header}>헤더입니다</header>;
}

function Footer() {
    const { currentTheme } = useContext(Context);
    return (
        <footer className={`${currentTheme.footer} border-2`}>
            푸터 입니다
        </footer>
    );
}

function App() {
    const [theme, setTheme] = useState("light");
    const currentTheme = themes[theme];

    function changeTheme() {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
        <Context.Provider value={{ currentTheme, changeTheme }}>
            <Header />
            <ThemeModeBtn />
            <CardList />
            <Footer />
        </Context.Provider>
    );
}

export default App;
