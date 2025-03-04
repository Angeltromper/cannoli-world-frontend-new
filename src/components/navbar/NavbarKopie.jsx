/*
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo Cannoli.png";
import { AuthContext } from "../../context/AuthContext";
import './Navbar.css';

function Navbar() {
    const { auth } = useContext ( AuthContext );
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        if(window.innerWidth <= 992) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setShowMenu(false)
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    },[]);



    return (

        <nav className="navbar__main-container">
            {console.log(showMenu)}
            <div className="navbar-register-menu">
                <NavLink to="/register" exact activeClassName="active-link">
                    <button type="button">Registreren</button>
                </NavLink>
                <NavLink to="/login" exact activeClassName="active-link">
                    <button type="button">Inloggen</button>
                </NavLink>
            </div>


            <div className={`mobile-nav ${showMenu ? 'active' : ''}`}>
                <div className="navbar__menu">
                    <NavLink to="/" exact activeClassName='active-link'>Home</NavLink>
                    <NavLink to="/cannoli" exact activeClassName='active-link'>Cannoli</NavLink>
                    <NavLink to="/giftbox" exact activeClassName='active-link'>Giftbox</NavLink>

                    <NavLink to="/logo">
                        <figure><img src={ logo } alt="logo" className="logo"/></figure>
                    </NavLink>

                    <NavLink to="/service" exact activeClassName='active-link'>Service</NavLink>
                    <NavLink to="/franchise" exact activeClassName='active-link'>Franchise</NavLink>
                    <NavLink to="/contact" exact activeClassName='active-link'>Contact</NavLink>
                    { auth &&
                        <NavLink to="/orderlist" exact activeClassName='active-link'>Online Bestellen</NavLink> }
                </div>
            </div>

            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>


            <div className="skewer--bottom">

            </div>
        </nav>
    );
}


export default Navbar;

*/
