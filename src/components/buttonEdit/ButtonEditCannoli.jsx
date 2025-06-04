import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import './ButtonEditCannoli.css';

function ButtonEditCannoli() {
    const token = localStorage.getItem('token');
    const { user } = useContext(AuthContext);
    const username = user?.username;

    const [isAdmin, toggleIsAdmin] = useState(false);
    const [adminInput, toggleAdminInput] = useState([]);

    useEffect(() => {
        async function fetchAdmin() {
            try {
                const response = await axios.get(`http://localhost:8080/users/${username}/`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

                toggleAdminInput(response.data);

                if (response.data.roles?.[0]?.authority === 'ROLE_ADMIN') {
                    toggleIsAdmin(true);
                } else {
                    toggleIsAdmin(false);
                }

            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        if (username) {
            fetchAdmin();
        }
    }, [username, token]);

    return (
        <>
            {isAdmin && (
                <button className="cannoli-editInfoCannoli">
                    Wijzig Product
                </button>
            )}
        </>
    );
}

export default ButtonEditCannoli;
