import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout.js";
import { useAuthContext } from "../../hooks/useAuthContext.js";

const Header = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <header>
            <div className={styles["header-wrap"]}>
                <h1>
                    <Link to="/">
                        <img
                            className={styles.logo}
                            src={logo}
                            alt="두근두근 비밀일기"
                        />
                    </Link>
                </h1>
                <div>
                    {!user && (
                        <>
                            <Link to="/login" className="btn-login">
                                로그인
                            </Link>
                            <Link to="/signup" className="btn-join">
                                회원가입
                            </Link>
                        </>
                    )}

                    {user && (
                        <>
                            <p className="hello">
                                환영합니다 <strong>{user.displayName}</strong>
                                님!
                            </p>
                            <Link
                                to="/"
                                className="btn-logout"
                                onClick={logout}
                            >
                                로그아웃
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
