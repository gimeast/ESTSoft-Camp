import useLang from "./Hook/useLang.js";

function Header() {
    const { currentLanguage } = useLang();
    return <h2>{currentLanguage.title}</h2>;
}

export default Header;
