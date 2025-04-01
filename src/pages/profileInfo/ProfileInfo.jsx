import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import pageImg from "../../assets/img.background/background design.jpg";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import './ProfileInfo.css';
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";

function ProfileInfo({headerImageHandler, pageTitleHandler}) {
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

    function editCannolis() {
        navigate(`/cannolis-toevoegen/`)
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
            <TextContainer>
                <h2>Welkom op uw persoonlijke pagina</h2>
            </TextContainer>

            <div className="profile-info-container">
                <h5>Op deze pagina kunt u uw gegevens bekijken en of wijzigen.
                    Producten bestellen en of aanpassen.
                </h5>
            </div>


            { isAdmin &&
                <div className="profile-info">

                    <div className="profile-info-button"
                         onClick={ editUsers }>Gegevens bekijken/wijzigen
                    </div>

                    <div className="profile-info-button"
                         onClick={ editCannolis }>Cannolis toevoegen/aanpassen
                    </div>

                </div>
            }


        </>
    );
}

export default ProfileInfo;
