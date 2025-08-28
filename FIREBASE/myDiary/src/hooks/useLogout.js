import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config.js";
import { useAuthContext } from "./useAuthContext.js";
import { useState } from "react";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = () => {
        setError(null);
        setIsPending(true);

        signOut(appAuth)
            .then(() => {
                setError(null);
                dispatch({ type: "logout" });
            })
            .catch((error) => {
                setError(error.message);
                console.error(error);
            })
            .finally(() => {
                setIsPending(false);
            });
    };

    return { error, isPending, logout };
};
