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
    const { user } = useContext(AuthContext);
    const username = user?.username;
    const [isAdmin, setIsAdmin] = useState(false);
    // const [adminInput, setAdminInput] = useState([]);


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
            if (!username || !token) return;

            let cancelled = false;

            async function fetchAdmin() {
                try {
                    const {data} = await axios.get (`http://localhost:8080/users/${ username }/`,
                        {
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": `Bearer ${ token }`,
                            }
                        }
                    );

                    const roleFromArray = Array.isArray (data.roles) ? (data.roles[0]?.authority || data.roles[0]) : undefined;
                    const role = roleFromArray ??
                        (typeof data.roles === 'string' ? data.roles : undefined) ??
                        (typeof data.role === 'string' ? data.role : undefined);

                    if (!cancelled) {
                        setIsAdmin (role === 'ROLE_ADMIN' || role === 'ADMIN');
                    }
                } catch (error) {
                    console.error ('There was an error', error);
                }
            }

            fetchAdmin();
            return () => { cancelled = true; };
            }, [username, token]);


        function navigateToUserEdit() {
            navigate("/user-view/");
        }

        function navigateToCannoliEdit() {
            navigate("/cannolis-add/");
        }

    function navigateToAdminOrders() {
        navigate("/deliveryRequests/");
    }

    function navigateTomyOrders() {
        navigate("/orders/");
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


            {isAdmin && (
                <div className="profile-info">
                    <div className="profile-info-view" onClick={ navigateToUserEdit }>
                        Gebruikersgegevens beheren
                    </div>

                    <div className="profile-info-added" onClick={ navigateToCannoliEdit }>
                        Cannolis toevoegen en of wijzigen
                    </div>

                    <div className="profile-info-added" onClick={ navigateToAdminOrders }>
                        Overzicht bestellijst
                    </div>
                </div>
            )}

            {!isAdmin && (
                <div className="profile-info">
                    <div className="profile-info-added" onClick={ navigateTomyOrders }>
                        Mijn bestellingen
                    </div>
                </div>

            )}
        </>
    );
}

export default UserProfile;
