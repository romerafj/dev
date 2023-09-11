import axios from "axios";
import { useReducer, createContext, useEffect, useState } from "react";

const initialState = {
    user: null,
};

const Context = createContext();

const rootReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        dispatch({
            type: "LOGIN",
            payload: JSON.parse(window.localStorage.getItem("user")),
        });
    }, []);

    useEffect(() => {
        const autenticarAdmin = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setCargando(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const { data } = await axios.post(
                    `${process.env.NEXT_PUBLIC_API}/profile`,
                    {},
                    config
                );
                setAuth(data);
            } catch (error) {
                console.log(error);
                setAuth({});
            } finally {
                setCargando(false);
            }
        };
        autenticarAdmin();
    }, []);

    return (
        <Context.Provider value={{ state, dispatch, auth }}>
            {children}
        </Context.Provider>
    );
};

export { Context, Provider };
