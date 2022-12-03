import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}