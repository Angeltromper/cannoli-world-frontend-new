import React, { useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/Logo Cannoli.png";
import { AuthContext } from "../../../context/AuthContext";
import './Navbar.css';

function Navbar() {
    const history = useNavigate ();
    const toLink = (e) => {
        e.preventDefault ();
        history ("/inloggen");
    };

    const {isAuth} = useContext (AuthContext);

    return (
        <nav className="navbar">
            <div className="navbar-content-container">
                <div className="btn">
                    <button type="button" onClick={ toLink }><span className="btn-text">inloggen</span></button>
                </div>

                <div className="navbar-menu">

                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    <NavLink to="/cannoli" exact activeClassName="active-link">Cannoli</NavLink>
                    <NavLink to="/giftbox" exact activeClassName="active-link">Giftbox</NavLink>

                    <NavLink to="/logo">
                        <figure><img src={ logo } alt="logo" className="logo"/></figure>
                    </NavLink>

                    <NavLink to="/service" exact activeClassName="active-link">Service</NavLink>
                    <NavLink to="/franchise" exact activeClassName="active-link">Franchise</NavLink>
                    <NavLink to="/contact" exact activeClassName="active-link">Contact</NavLink>
                    { isAuth && <NavLink to="/orderList" exact activeClassName="active-link">Bestellingen</NavLink> }
                </div>
                <div className="skewer--bottom">

                </div>
            </div>
        </nav>
    );
}


export default Navbar;
