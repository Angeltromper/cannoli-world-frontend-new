import { useContext, useState } from 'react';
import {NavLink} from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext.jsx";
import mail from "../../../assets/navIcon/mail.png";
import phone from "../../../assets/navIcon/phone.png";
import './Footer.css';

function Footer() {
    const [popupOpen, setPopupOpen] = useState(false);
    const  { auth } =useContext(AuthContext);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        setPopupOpen(true);

        setTimeout(() => {
            setPopupOpen(false);
        }, 5000);
    };

    return (
        <div className="footer-container">

            <footer className="footer">

                <div className="footer-menu">
                    <h3>navigatie</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/faq's">Faq's</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to={auth ? "/profile" : "/login"}>
                                {auth ? "Account" : "Inloggen"}
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>contact</h3>
                    <ul>
                        <figure><img src={ mail } alt="mail" className="mail"/>
                           srruffino@outlook.com</figure>
                        <figure><img src={ phone } alt="phone" className="phone"/>
                            SR.Ruffino: (+31)620940691</figure>
                        <figure><img src={ phone } alt="phone" className="phone"/> E.Jongh
                            Visscher: (+31)648889093</figure>
                    </ul>
                </div>
                <div className="register-content" onSubmit={handleNewsletterSubmit}>
                    <h3 className="register-subtitle">Wilt u onze nieuwsbrief ontvangen?</h3>
                    <form className="register-form">
                        <label>
                            <input className="register-input" type="text" placeholder="E-mail adres..."/>
                        </label>
                        <button className="footer-button" type="submit">inschrijven</button>
                    </form>
                </div>
                <hr/>

                {popupOpen && (
                    <div className="popup-newsletter">
                        <div className="popup-newsletter-content">
                            <p>Dank u wel voor uw inschrijving!</p>
                            <p>We zullen u zo spoedig mogelijk mailen met info over de nieuwsbrief</p>
                            <button onClick={() => setPopupOpen(false)}>Sluiten</button>
                        </div>
                    </div>
                )}

                <div className="footer-bottom">
                    <p>Eindproject Fullstack developer hogeschool Novi || gemaakt door Angelique Tromper || Copyright © 2025 Cannoli-world || Alle rechten voorbehouden </p>
                </div>

            </footer>
        </div>
    );
}

export default Footer;

