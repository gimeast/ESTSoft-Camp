import React, { useEffect, useState } from "react";
import DiaryForm from "./DiaryForm.jsx";
import DiaryList from "./DiaryList.jsx";
import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext.js";
import { useCollection } from "../../hooks/useCollection.js";

const Home = () => {
    const { user } = useAuthContext();
    const { documents, error } = useCollection("diary");

    const date = new Date();
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

    return (
        <div className={styles["container"]}>
            <main className={styles["diary-main"]}>
                <h2 className={styles["heart"]}>{formattedDate}의 비밀일기</h2>
                <DiaryForm uid={user.uid} />
            </main>
            <section>
                <h2 className="a11y-hidden">일기 목록</h2>
                <ul>
                    {documents.map((doc) => (
                        <DiaryList title={doc.title} content={doc.content} />
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Home;
