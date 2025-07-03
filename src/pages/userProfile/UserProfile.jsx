import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import pageImg from "../../assets/img.background/background cannolis.jpg";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import UserPage from "../../components/userPage/UserPage";
import ButtonEdit from "../../components/buttonEdit/ButtonEdit";
import './UserProfile.css';


function UserProfile({headerImageHandler, pageTitleHandler}) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const {user: {username}} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminInput, setAdminInput] = useState([]);


     useEffect(() => {
         headerImageHandler(pageImg);
         pageTitleHandler();
     }, []);


    // function editUsers() {
    //     navigate(`/user-view/`)
    // }
    //
    // function editCannolis() {
    //     navigate(`/cannolis-add/`)
    // }


        // const source =axios.CancelToken.source();

        useEffect(()=> {
        async function fetchAdmin() {
            try {
                const response = await axios.get (`http://localhost:8080/users/${username}/`,
                    {
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );

               setAdminInput (response.data)

                if ( response.data.roles[0].authority ==='ROLE_ADMIN') {
                    setIsAdmin (true);
                } else {
                    setIsAdmin (false);
                }

            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        fetchAdmin();
    }, [isAdmin, token]);

        function navigateToUserEdit() {
            navigate("/user-view/");
        }

        function navigateToCannoliEdit() {
            navigate("/cannolis-add/");
        }



    return (
        <>
            <div className="profile-page-container">
                <h2 className="profile-header">Welkom {username}</h2>

                <div className="profile-welcomepage scale-up-hor-left-right">
                    <h5> Op deze pagina kunt u uw persoonlijke gegevens bekijken en aanpassen.</h5>
                </div>

                <div className="user-profile-column">

                    <ButtonEdit title="Adresgegevens bewerken"/>
                    <h5> Klik op het potloodje om uw adresgegevens in te voeren of te wijzigen.</h5>
                    <UserPage/>
                </div>
            </div>


            {isAdmin &&
                <div className="profile-info">
                    <div className="profile-info-view" onClick={ navigateToUserEdit }>
                        Gebruikersgegevens beheren
                    </div>

                    <div className="profile-info-added" onClick={ navigateToCannoliEdit }>
                        Cannolis toevoegen en of wijzigen
                    </div>
                </div>
            }
        </>
    );
}

export default UserProfile;
