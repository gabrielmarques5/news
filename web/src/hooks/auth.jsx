import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function SignIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@tumaechaves:user", JSON.stringify(user));
            localStorage.setItem("@tumaechaves:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token })
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel entrar.");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@tumaechaves:token");
        localStorage.removeItem("@tumaechaves:user");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@tumaechaves:token");
        const user = localStorage.getItem("@tumaechaves:user");

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ token, user: JSON.parse(user) })
        }
    }, []);

    return (
        <AuthContext.Provider value={{ SignIn, signOut, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };