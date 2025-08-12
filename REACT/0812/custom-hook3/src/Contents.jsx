import useLang from "./Hook/useLang";

export default function Contents() {
    const { languageData, welcomeMessage } = useLang();

    return (
        <>
            <h2>{welcomeMessage}</h2>
            <h3>{languageData.title}</h3>
            <p>{languageData.greeting}</p>
            <p>{languageData.description}</p>
        </>
    );
}
