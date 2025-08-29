import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Header from "./components/header/Header.jsx";
import "./app.css";
import { useAuthContext } from "./hooks/useAuthContext.js";

function App() {
    const { isAuthReady, user } = useAuthContext();

    return (
        <div className="App">
            {isAuthReady ? (
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                user ? (
                                    <Home />
                                ) : (
                                    <Navigate to="/login" replace={true} />
                                )
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                !user ? (
                                    <Login />
                                ) : (
                                    <Navigate to="/" replace={true} />
                                )
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                !user ? (
                                    <Signup />
                                ) : (
                                    <Navigate to="/" replace={true} />
                                )
                            }
                        />
                    </Routes>
                </BrowserRouter>
            ) : (
                "loading..."
            )}
        </div>
    );
}

export default App;
