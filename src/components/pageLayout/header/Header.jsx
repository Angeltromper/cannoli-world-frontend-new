import React from 'react';
import Navbar from "../../navbar/Navbar.jsx";
import { Cart } from "../../cart/Cart";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import './Header.css';

function Header({ headerImage, pageTitle }) {
    const { auth,user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <div className="header-actions">
                        <Cart />
                        {auth ? (
                            <div className="account-section">
                                <button
                                    onClick={() => navigate('/profile')} className="account-btn"
                                >
                                    <FaUserCircle size={20}/>

                                    <span className="account-name">
                                    {user?.person_firstname || user?.username || 'Account'}
                                    </span>
                                </button>

                                <button onClick={logout} className="logout-btn">Uitloggen</button>
                            </div>
                        ) : (
                            <button onClick={() => navigate('/login')} className="login-btn">Inloggen</button>
                        )}
                    </div>
                </div>

                <Navbar />

            </header>

            <div className="header-img-container">
                <img src={headerImage} className="header-img" alt="/" />

                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>
            </div>
            <div className="skewer--bottom"></div>
        </>
    );
}

export default Header;
