import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    return authContext;
};
