import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import './ButtonEditCannoli.css';

function ButtonEditCannoli() {
    const {user} =useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        async function fetchAdminStatus() {
           const token = localStorage.getItem('token');
           if (!user || !token) return;

            try {
                const response = await axios.get(`http://localhost:8080/users/${user.username}/`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

                const roles= response.data.roles || [];
                const isUserAdmin = roles.some(role => role.authority === 'ROLE_ADMIN');
                setIsAdmin(isUserAdmin);

            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchAdminStatus();
    }, [user]);


    return (
        <>
            {isAdmin &&
                <button className="cannoli-editInfoCannoli">
                    Wijzig Product
                </button>
            }
        </>
    );
}

export default ButtonEditCannoli;
