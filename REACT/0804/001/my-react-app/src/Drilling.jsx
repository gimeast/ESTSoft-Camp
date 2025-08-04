function A({ login }) {
    return <B login={login} />;
}
function B({ login }) {
    return <C login={login} />;
}
function C({ login }) {
    return LoginComponent(login);
}

function LoginComponent(login) {
    return (
        <div>
            오른쪽 상단에 나오는 로그인 여부: {login ? "로그아웃" : "로그인"}
        </div>
    );
}
function App() {
    const login = true;
    return <A login={login} />;
}

export default App;
