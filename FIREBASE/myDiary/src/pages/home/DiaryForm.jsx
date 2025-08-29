import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore.js";

const DiaryForm = ({ uid }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { addDocument, state } = useFirestore("diary");

    const handleData = (e) => {
        if (e.target.id === "diary-title") {
            setTitle(e.target.value);
        } else if (e.target.id === "diary-content") {
            setContent(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDocument({ uid, title, content });
    };

    useEffect(() => {
        if (state.success) {
            setTitle("");
            setContent("");
        }
    }, [state.success]);

    return (
        <form onSubmit={handleSubmit}>
            <label className="a11y-hidden" htmlFor="diary-title">
                일기 제목
            </label>
            <input
                className="input-style"
                id="diary-title"
                type="text"
                value={title}
                onChange={(e) => handleData(e)}
                placeholder="제목"
                required
            />

            <label className="a11y-hidden" htmlFor="diary-content">
                일기 내용
            </label>
            <textarea
                className={styles["diary-textarea"]}
                id="diary-content"
                value={content}
                onChange={(e) => handleData(e)}
                placeholder="오늘의 비밀은 무엇인가요?"
            ></textarea>
            <button className="black-btn" type="submit">
                작성하기
            </button>
        </form>
    );
};

export default DiaryForm;
