import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import pageImg from "../../assets/img.background/background cannolis.jpg";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import ButtonEdit from "../../components/buttonEdit/ButtonEdit";
import './ProfilePage.css';

function ProfilePage({headerImageHandler, pageTitleHandler}) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const {user:{username}} = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userAddress, setUserAddress] = useState(null);

     useEffect(() => {
         headerImageHandler(pageImg);
         pageTitleHandler();
     }, []);


    function editUsers() {
        navigate(`/user-view/`)
    }

    function editCannolis() {
        navigate(`/cannolis-add/`)
    }

    useEffect(()=> {
        // const source =axios.CancelToken.source();


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

                // setAdminInput (response.data)

                     if ( response.data.roles[0].authority ==='ROLE_ADMIN') {
                         setIsAdmin (true);
                     } else {
                         setIsAdmin (false);
                     }

                     setUserAddress(response.data.person);

            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        if (username) {
            fetchAdmin ();
        }
    }, [username, token]);


    return (
        <div className="profile-page-container">
            <h2 className="profile-header">Welkom {username}</h2>


            {userAddress && (
                <div className= "profile-adress-wrapper">
                    <ButtonEdit onClick={editUsers}/>
                    <div className="profile-adress-details">
                        <h4>Adresgegevens</h4>
                        <h5>Straatnaam: {userAddress.personStreetName}</h5>
                        <h5>Huisnummer: {userAddress.personHouseNumber}{userAddress.personHouseNumberAdd && `-${userAddress.personHouseNumberAdd}`}</h5>
                        <h5>Postcode: {userAddress.personZipcode}</h5>
                        <h5>Woonplaats: {userAddress.personCity}</h5>
                    </div>
                </div>
            )}

            <div className="profile-welcomepage scale-up-hor-left-right">
                <h5> Op deze pagina kunt u al uw gegevens bekijken.</h5>
                <h5> U kunt producten bestellen en of aanpassen.</h5>
            </div>


            {isAdmin &&
                <div>
                    <div className="profile-info-container" >
                            <h5>Voor het bekijken/wijzigen van persoongegevens en het aanpassen/toevoegen van cannoli's.</h5>
                    </div>

                    <div className="profile-info">

                        <h5>Klikt u op:</h5>

                        <div className="profile-info-view"

                             onClick={ editUsers }> Persoongegevens
                        </div>

                        <div className="profile-info-added"
                             onClick={ editCannolis }> Cannolis
                        </div>

                    </div>
                </div>
            }
            </div>
    );
}

export default ProfilePage;
