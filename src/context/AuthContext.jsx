// eslint-disable-next-line no-unused-vars
import React, {createContext, useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import isTokenValid from "../helpers/isTokenValid";
import jwtDecode from "jwt-decode";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState ({
        isAuth: false,
        user: null,
        status:'pending',
    });
    const navigate = useNavigate();

    // is er een token? En zo ja, is deze nog geldig?
    useEffect (() => {
        const token = localStorage.getItem ('token');

        if (token && isTokenValid (token)) {
            const decodedToken = jwtDecode (token);
            getData (decodedToken.sub, token);
        } else {
            // als er geen token is doen we niks en zetten we de status op 'done'
            toggleIsAuth ( {
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, [])

    function login(token) {
        const decodedToken = jwtDecode (token);
        localStorage.setItem ('token', token);
        getData(decodedToken.sub, token, "/profiel");
    }

    function logout(e) {
        localStorage.clear ();
        e.preventDefault ();
        toggleIsAuth ({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    async function getData(id, token, redirectUrl) {
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    password: response.data.password,
                    userId:response.data.id,
                    roles: response.data.authorities[0].authority,
                    person_id: response.data.person.id,
                    person_firstname: response.data.person.personFirstname,
                    person_lastname: response.data.person.personLastname,
                    person_street_name: response.data.person.personHouseNumber,
                    person_house_number: response.data.person.personHouseNumber,
                    person_house_number_add: response.data.person.personHouseNumberAdd,
                    person_city: response.data.person.personCity,
                    person_zipcode: response.data.person.personZipcode
                },
                status: 'done',
            });
            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            console.error('There was an error!', error);
            localStorage.clear();
        }
    }


    const contextData = {
        "auth": isAuth.isAuth,
        "login": login,
        "logout": logout,
        "user": isAuth.user,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <h2>Ogenblik geduld alstublieft...</h2>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
















