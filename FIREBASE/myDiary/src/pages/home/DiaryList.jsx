import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../assets/img/icon-edit.svg";
import iconDelete from "../../assets/img/icon-delete.svg";

const DiaryList = ({ title, content }) => {
    return (
        <li>
            <article className={styles["diary-article"]}>
                <h3 className={styles["article-title"]}>{title}</h3>
                <time className={styles["article-time"]} dateTime="2023-03-15">
                    2023.02.24.THU
                </time>
                <p className={styles["article-content"]}>{content}</p>

                <div className={styles["button-group"]}>
                    <button type="button">
                        <img src={iconEdit} alt="수정" />
                    </button>
                    <span></span>
                    <button type="button">
                        <img src={iconDelete} alt="삭제" />
                    </button>
                </div>
            </article>
        </li>
    );
};

export default DiaryList;
