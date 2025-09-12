import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext({
    auth: false,
    user: null,
    login: () => {},
    logout: () => {},
    setUser: () => {},     // <— belangrijk voor de forms
});

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && isTokenValid(token)) {
            const { sub } = jwtDecode(token);
            getData(sub, token);
        } else {
            setAuthState({ isAuth: false, user: null, status: 'done' });
        }
    }, []);

    function login(token) {
        localStorage.setItem('token', token);
        const { sub } = jwtDecode(token);
        getData(sub, token, "/profile");
    }

    function logout(e) {
        e?.preventDefault?.();
        localStorage.clear();
        setAuthState({ isAuth: false, user: null, status: 'done' });
        navigate('/');
    }

    function setUser(updates) {
        setAuthState(prev => ({
            ...prev,
            user: { ...(prev.user ?? {}), ...updates },
        }));
    }

    async function getData(usernameOrId, token, redirectUrl) {
        try {
            const { data } = await axios.get(`http://localhost:8080/users/${usernameOrId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });

            const p = data.person ?? {}; // Kan ontbreken wanneer profiel nog leeg is.

            setAuthState(prev => ({
                ...prev,
                isAuth: true,
                user: {
                    username: data.username,
                    userId: data.id,
                    roles: Array.isArray(data.roles) && data.roles[0]?.authority ? data.roles[0].authority : null,

                    // Persoonsgegevens (optioneel aanwezig)
                    person_id: p.id ?? null,
                    person_firstname: p.personFirstname ?? "",
                    person_lastname: p.personLastname ?? "",
                    person_street_name: p.personStreetName ?? "",
                    person_house_number: p.personHouseNumber ?? "",
                    person_house_number_add: p.personHouseNumberAdd ?? "",
                    person_zipcode: p.personZipcode ?? "",
                    person_city: p.personCity ?? "",
                },
                status: 'done',
            }));

            if (redirectUrl) navigate(redirectUrl);
        } catch (error) {
            console.error('getData error', error);
            localStorage.clear();
            setAuthState({ isAuth: false, user: null, status: 'done' });
        }
    }

    const contextData = {
        auth: authState.isAuth, // Boolean: ingelogd of niet
        user: authState.user, // Huidige gebruiker (of null)
        login,
        logout,
        setUser, // <— Alleen user velden bijwerken (bv. na profiel-edit)
    };

    return (
        <AuthContext.Provider value={contextData}>
            {authState.status === 'done' ? children : <h2>Ogenblik geduld alstublieft...</h2>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
