import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import pageImg from "../../assets/img.background/background cannolis.jpg";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import './ProfilePage.css';


function ProfilePage({headerImageHandler, pageTitleHandler}) {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminInput, setAdminInput] = useState([]);


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    function editUsers() {
        navigate(`/user-view/`)
    }

    function addCannolis() {
        navigate(`/cannolis-add/`)
    }

    useEffect(()=> {
        async function fetchAdmin() {

            try {
                const response = await axios.get (`http://localhost:8080/cannolis/${username}/`,
                    {
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": `Bearer ${ token }`,
                        }
                    }
                );
                setAdminInput (response.data)

                if (response.data.roles[0].authority === 'ROLE_ADMIN') {
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
            <TextContainer>
                <h2>Welkom</h2>
            </TextContainer>

            <div className="profile-welcomepage scale-up-hor-left-right">
                <h2> {username} op uw persoonlijke pagina</h2>
            </div>

            <div className="profile-info-container">
                <h5>Op deze pagina kunt u uw gegevens bekijken en of wijzigen.
                    Producten bestellen en of aanpassen.
                </h5>
            </div>

            { isAdmin &&
                <div className="admin-buttons">
                    <button className="admin-button" onClick={() => navigate('/cannolis-add/')}>
                        Producten Toevoegen
                    </button>
                    <button className="admin-button" onClick={() => navigate('/user-view/')}>
                        Gebruikers Bekijken
                    </button>
                </div>

            }

        </>
    );
}

export default ProfilePage;
