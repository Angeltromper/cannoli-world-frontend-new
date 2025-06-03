import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import './ButtonEditImage.css'

function ButtonEditImage() {
    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminInput, setAdminInput] = useState([]);

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
                setAdminInput (response.data)

                if (response.data.roles[0].authority === 'ROLE_ADMIN') {
                    setIsAdmin (true);
                } else {
                    setIsAdmin (false);
                }

            } catch (error) {
                console.error ('There was an error!', error);
            }
        }

        fetchAdmin ();
    }, [isAdmin, token]);

    return (
        <>

            {isAdmin &&
                <button className="cannoli-editInfoImage">
                    Wijzig Afbeelding
                </button>
            }
        </>
    );
}
export default ButtonEditImage;




