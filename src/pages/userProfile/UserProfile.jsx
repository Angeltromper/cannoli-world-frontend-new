import  { useContext, useEffect, useState } from 'react';
import { Link, } from "react-router-dom";
import pageImg from "../../assets/img.background/background cannolis.jpg";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import UserPage from "../../components/userPage/UserPage";
import ButtonEdit from "../../components/buttonEdit/ButtonEdit";
import './UserProfile.css';


function UserProfile({headerImageHandler, pageTitleHandler}) {
    const token = localStorage.getItem("token");
    const { user } = useContext(AuthContext);
    const username = user?.username;
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
         headerImageHandler(pageImg);
         pageTitleHandler("Profiel")
         }, [headerImageHandler,pageTitleHandler]);

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
                    <Link className="profile-info-view" to="/user-view">
                        Gebruikersgegevens beheren
                    </Link>

                    <Link className="profile-info-added" to="/cannolis-add">
                        Cannolis toevoegen en of wijzigen
                    </Link>

                    <Link className="profile-info-added" to= "/deliveryRequests">
                        Overzicht bestellijst
                    </Link>
                </div>
            )}

            {!isAdmin && (
                <div className="profile-info">
                    <Link className="profile-info-added" to="/deliveryRequests">
                        Mijn bestellingen
                    </Link>
                </div>

            )}
        </>
    );
}

export default UserProfile;
