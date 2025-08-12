import useLanguageHistory from "./hook/useLanguageHistory";

export default function LanguageSwitcher() {
    const { previousLanguage, currentLanguage } = useLanguageHistory();

    return (
        <div>
            <h2>언어 선택기</h2>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <p>
                    이전 언어:{" "}
                    {previousLanguage
                        ? previousLanguage
                        : "이전에 선택했던 언어 없지롱"}
                </p>
                <p>현재 언어: {currentLanguage}</p>
            </div>
        </div>
    );
}
