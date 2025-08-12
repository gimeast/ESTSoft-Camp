import React, { useEffect, useState } from "react";
import useDebounce from "./hook/useDebounce.js";
import useLang from "./hook/useLang.js";
const InputBox = () => {
    const [text, setText] = useState("");
    const debouncedSearch = useDebounce(text, 300);
    const { languages, setSearchData } = useLang();

    const onChange = (e) => {
        const value = e.target.value;
        setText(value);
    };

    useEffect(() => {
        if (debouncedSearch) {
            const flattedLanguage = Object.values(languages)
                .flat(1)
                .filter((lang) =>
                    lang.type.toLowerCase().startsWith(debouncedSearch)
                );

            setSearchData(flattedLanguage);
        }
    }, [debouncedSearch]);

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
        </div>
    );
};

export default InputBox;
