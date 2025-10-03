import  { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import './ButtonEditImage.css';

function ButtonEditImage() {
    const {user} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {

        async function checkIfAdmin() {
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
                const userIsAdmin = roles.some(role => role.authority === 'ROLE_ADMIN');
                setIsAdmin(userIsAdmin);

            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        checkIfAdmin();
    }, [user]);

    if (!isAdmin) return null;

    return (
        <>
            <button className="cannoli-editInfoImage">
                Wijzig Afbeelding
            </button>
        </>
    );
}

export default ButtonEditImage;
