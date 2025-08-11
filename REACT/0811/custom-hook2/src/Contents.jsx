import useLang from "./Hook/useLang.js";

function Content() {
    const { currentLanguage } = useLang();
    return (
        <div>
            <p>{currentLanguage.greeting}</p>
            <p>{currentLanguage.description}</p>
        </div>
    );
}

export default Content;
