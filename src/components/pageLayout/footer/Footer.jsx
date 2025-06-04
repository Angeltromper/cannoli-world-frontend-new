import React, { useContext, useRef } from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import mail from "../../../assets/navIcon/mail.png";
import phone from "../../../assets/navIcon/phone.png";
import './Footer.css';

function Footer() {

    const {isAuth} = useContext(AuthContext);


    return (
        <div className="footer-container">

            <footer className="footer">

                <div className="footer-menu">
                    <h3>navigatie</h3>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/webshop">Webshop</NavLink></li>
                        <li><NavLink to="/faq's">Faq's</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/account">Account</NavLink></li>

                        { isAuth ? <li><NavLink to="/logout">Uitloggen</NavLink></li> :
                            <li><NavLink to="/login">Inloggen</NavLink></li> }
                        { isAuth && <li><NavLink to="/profiel">Profiel</NavLink></li> }
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>contact</h3>
                    <ul>
                        <figure><img src={ mail } alt="mail" className="mail"/><NavLink
                            to="mail"> srruffino@outlook.com</NavLink></figure>
                        <figure><img src={ phone } alt="phone" className="phone"/><NavLink
                            to="phone"> SR.Ruffino: (+31)620940691</NavLink></figure>
                        <figure><img src={ phone } alt="phone" className="phone"/><NavLink to="phone"> E.Jongh
                            Visscher: (+31)648889093</NavLink></figure>
                    </ul>
                </div>
                <div className="register-content">
                    <h3 className="register-subtitle">Wilt u onze nieuwsbrief ontvangen?</h3>
                    <form className="register-form">
                        <label>
                            <input className="register-input" type="text" placeholder="E-mail adres..."/>
                        </label>
                        <button className="footer-button" type="submit">inschrijven</button>
                    </form>
                </div>
                <hr/>

                <div className="footer-bottom">
                    <p>Eindproject Fullstack developer hogeschool Novi || gemaakt door Angelique Tromper || Copyright © 2025 Cannoli-world || Alle rechten voorbehouden </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

