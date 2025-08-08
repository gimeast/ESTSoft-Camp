import { createContext, useContext, useReducer, useState } from "react";

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

    return (
        <div>
            {user.name}님 안녕하세요
            <button onClick={logout}>로그아웃</button>
        </div>
    );
}

function Login() {
    const { setUser } = useContext(UserContext);
    const [loginFail, setLoginFail] = useState("");

    const [state, dispatch] = useReducer(reducer, {
        username: "",
        password: "",
    });
    const { username, password } = state;

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
    console.log("user", user);
    return (
        <header>
            <nav>
                <ul>
                    {!user && (
                        <li>
                            <Login />
                        </li>
                    )}
                    {user && (
                        <li>
                            <Logout />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
function Main() {
    return <main></main>;
}
function Footer() {
    return <footer></footer>;
}

function App() {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Header />
            <Main />
            <Footer />
        </UserContext.Provider>
    );
}

export default App;
