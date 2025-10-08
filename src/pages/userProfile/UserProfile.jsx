import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import pageImg from "../../assets/background cannolis.jpg";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import UserPage from "../../components/userPage/UserPage";
import ButtonEdit from "../../components/buttonEdit/ButtonEdit";
import './UserProfile.css';

axios.defaults.baseURL = "http://localhost:8080";

function UserProfile({ headerImageHandler, pageTitleHandler }) {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const username = user?.username;
    const [isAdmin, setIsAdmin] = useState(false);
    const [person, setPerson] = useState(null);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Profiel");
    }, [headerImageHandler, pageTitleHandler]);

    useEffect(() => {
        if (!username) return;
        let cancelled = false;
        (async () => {
            try {
                const { data: u } = await axios.get(`/users/${username}`);
                const roles = Array.isArray(u.roles)
                    ? u.roles.map(r => (typeof r === "string" ? r : r.authority))
                    : u.role
                        ? [u.role]
                        : [];
                if (!cancelled) setIsAdmin(roles.includes("ROLE_ADMIN") || roles.includes("ADMIN"));

                const { data: me } = await axios.get(`/persons/me`);
                if (!cancelled) {
                    setPerson(me);
                    if (setUser) setUser(prev => (prev ? { ...prev, person: me } : prev));
                }
            } catch (e) {
                if (e.response?.status === 401) {
                    localStorage.removeItem("token");
                    delete axios.defaults.headers.common.Authorization;
                    navigate("/login", { replace: true });
                } else {
                    console.error(e);
                }
            }
        })();
        return () => { cancelled = true; };
    }, [username, setUser, navigate]);

    return (
        <>
            <div className="profile-page-container">
                <h2 className="profile-header">Welkom {username}</h2>

                <div className="profile-welcomepage scale-up-hor-left-right">
                    <h5>Op deze pagina kunt u uw persoonlijke gegevens bekijken en aanpassen.</h5>
                </div>

                <div className="user-profile-column">
                    <ButtonEdit
                        title="Adresgegevens bewerken" />

                    <h5>
                        Klik op het potloodje om uw adresgegevens in te voeren of te wijzigen.
                    </h5>

                    <UserPage person={person} />
                </div>
            </div>

            {isAdmin ? (
                <div className="profile-info">
                    <Link className="profile-info-view" to="/user-view">
                        Gebruikersgegevens beheren
                    </Link>
                    <Link className="profile-info-added" to="/cannolis-add">
                        Cannolis toevoegen en of wijzigen
                    </Link>
                    <Link className="profile-info-added" to="/deliveryRequests">
                        Overzicht bestellijst
                    </Link>
                </div>
            ) : (
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
