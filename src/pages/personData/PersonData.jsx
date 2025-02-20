/*
import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import './PersonData.css';

function PersonData({headerImageHandler, pageTitleHandler}) {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);

    const [isAdmin, setIsAdmin] = useState(false);
    const [adminInput, setAdminInput] = useState([]);

    function editUsers() {
        navigate("/admin-users/")
    }

    function editCannolis() {
        navigate("/admin-cannolis/")
    }

    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
    }, []);


    useEffect(()=> {
        async function fetchAdmin() {

            try {
                const response = await axios.get (`http://localhost:8080/cannolis/${ username }/`,
                    {
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": `Bearer ${ token }`,
                        }
                    }
                );
                setAdminInput (response.data)

                if (response.data.authorities[0].authority === 'ROLE_ADMIN') {
                    setIsAdmin (true)
                } else {
                    setIsAdmin (false)
                }
            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        fetchAdmin ();
    }, [isAdmin,token]);

    return (
        <>

            { isAdmin &&
                <div className="admin-info">

                    <div className="admin-info-button"
                         onClick={ editUsers }>Gebruiker toevoegen
                    </div>

                    <div className="admin-info-button"
                         onClick={ editCannolis }>Cannolis toevoegen
                    </div>


                </div>


            }


        </>
    );
}

export default PersonData;
*/
