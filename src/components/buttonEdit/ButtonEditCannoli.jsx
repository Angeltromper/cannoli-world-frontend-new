import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import './CannoliEditInfo.css';


function CannoliEditInfo() {
    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);
    const [isAdmin, toggleIsAdmin] = useState(false);
    const [adminInput, toggleAdminInput] = useState([]);

    useEffect (() => {

        async function fetchAdmin() {
            try {
                const response = await axios.get (`http//localhost:8080/users/${username}/`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                    );
                toggleAdminInput (response.data)
                if (response.data.roles[0].authority === 'ROLE_ADMIN') {
                    toggleIsAdmin (true);
                } else {
                    toggleIsAdmin (false);
                }

            } catch (error) {
                console.error ('There was an error!', error);
            }
        }

        fetchAdmin ();
    }, [isAdmin, token]);

    return (
        <>

            { isAdmin &&
                <button className="cannoli-editInfoCannoli">
                    Wijzig Product
                </button>
            }

            </>
    );
}
export default CannoliEditInfo;
