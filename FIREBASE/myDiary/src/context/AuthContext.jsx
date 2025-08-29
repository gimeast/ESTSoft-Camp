import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config.js";

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { ...state, user: action.payload };
        case "logout":
            return { ...state, user: null };
        case "authIsReady":
            return { ...state, user: action.payload, isAuthReady: true };
        default:
            return state;
    }
};

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false,
    });
    console.log("state", state);

    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            dispatch({ type: "authIsReady", payload: user });
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return <AuthContext value={{ ...state, dispatch }}>{children}</AuthContext>;
};

export { AuthContextProvider, AuthContext };
