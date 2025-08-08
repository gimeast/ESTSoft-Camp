import { createContext, useContext, useReducer, useState } from "react";
import {
    BrowserRouter,
    Link,
    Outlet,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";

const users = [
    { id: 1, username: "user1", password: "1234", name: "김철수" },
    { id: 2, username: "user2", password: "5678", name: "이영희" },
    { id: 3, username: "admin", password: "admin", name: "관리자" },
];

const UserContext = createContext();

function Logout() {
    const { user, setUser } = useContext(UserContext);

    function logout() {
        setUser(null);
    }

    return <button onClick={logout}>로그아웃</button>;
}

function Login() {
    const { user, setUser } = useContext(UserContext);

    const [loginFail, setLoginFail] = useState("");
    const [state, dispatch] = useReducer(reducer, {
        username: "",
        password: "",
    });
    const { username, password } = state;

    const navigate = useNavigate();

    if (user) {
        navigate("/");
    }

    function reducer(state, action) {
        return { ...state, [action.name]: action.value };
    }

    function onChange(e) {
        dispatch(e.target);
    }

    function login(e) {
        e.preventDefault();

        const findUser = users.find(
            (v) => v.username === username && v.password === password
        );
        console.log("findUser", findUser);

        if (findUser) {
            setUser(findUser);
        } else {
            setLoginFail("아이디 또는 비밀번호가 틀렸습니다");
        }
    }

    return (
        <form onSubmit={login}>
            <fieldset>
                <legend>login</legend>
                username:
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                />
                <br />
                password:
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                <br />
                {loginFail}
            </fieldset>
            <button type="submit">로그인</button>
        </form>
    );
}
function Header() {
    const { user } = useContext(UserContext);
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">main</Link>
                    </li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        {user ? (
                            <Logout />
                        ) : (
                            <Link to="/login">로그인하러가기</Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
function Main() {
    return (
        <main>
            <Outlet />
        </main>
    );
}
function Footer() {
    return <footer>footer입니다.</footer>;
}

function App() {
    const [user, setUser] = useState();
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
