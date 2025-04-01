/*
import React, { useContext, useRef } from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
// import Column from "../designElement/column/Column";
// import TwoColumn from "../designElement/column/TwoColumn";
import mail from "../../../assets/navIcon/mail.png";
import phone from "../../../assets/navIcon/phone.png";
import './Footer.css';
// import TextContainer from "../designElement/container/textContainer/TextContainer";


function Footer() {

    // eslint-disable-next-line no-unused-vars
    const refSearch = useRef(null);
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
                            to="mail">srruffino@outlook.com</NavLink></figure>
                        <figure><img src={ phone } alt="phone" className="phone"/><NavLink
                            to="phone">SR.Ruffino:(+31)620940691</NavLink></figure>
                        <figure><img src={ phone } alt="phone" className="phone"/><NavLink to="phone">E.Jongh
                            Visscher:(+31)648889093</NavLink></figure>
                    </ul>
                </div>
                <div className="register-content">
                    <h3 className="register-subtitle">Wilt u onze nieuwsbrief ontvangen?</h3>
                    <form className="register-form">
                        <label>
                            <input className="register-input" type="text" placeholder="E-mail adres..."/>
                        </label>
                        <button className="button" type="submit">inschrijven</button>
                    </form>
                </div>

            </footer>
            <div className="skewer--footer-top"></div>
        </div>
    );
}

export default Footer;
*/
