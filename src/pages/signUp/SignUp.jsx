import React, {useRef, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import './SignUp.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{4,12}$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,24}$/;
const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function SignUp({headerImageHandler, pageTitleHandler}) {
    const navigate = useNavigate();
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState ('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState ('');
    const [validEmail, setValidEmail] = useState (false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState ('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [repeat, setRepeat] = useState ('');
    const [validRepeat, setValidRepeat] = useState(false);
    const [repeatFocus, setRepeatFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState ('');
    const [succes, setSuccess] = useState (false);


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler,pageTitleHandler]);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect (() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect (() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidRepeat (password === repeat);
    }, [password, repeat]);

    useEffect (() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect (() => {
        setErrorMessage ('');
    }, [user, password, repeat, email]);

    const handleSubmit = async (e) => {
        e.preventDefault ();

        const v1 = USER_REGEX.test (user);
        const v2 = PASSWORD_REGEX.test (password);
        if (!v1 || !v2) {
            setErrorMessage ('Ongeldige invoer');
            return;
        }
        console.log(user, password, email)

        try {
            const result = await axios.post ("http://localhost:8080/users/create",
                {
                    username: user,
                    password: password,
                    email: email,
                });
            setSuccess (true);
            console.log(result)

            setTimeout (() => {

                navigate('/login');

            }, 2500);

        } catch (error) {
            if(!error?.response) {
                setErrorMessage ('Geen server response');
            } else if (error.response?.status === 409) {
                setErrorMessage('Registratie is mislukt.. Gebruikersnaam en/of email is al in gebruik!')
            }
            errorRef.current.focus();
        }
    }

    return (
        <>
            {succes ? (
                <div className="timeout-succes succes-slide-down">
                    <div>
                        <h1>Gelukt! <FontAwesomeIcon icon={ faCheck } className="valid-check"/></h1>
                        <h3>U heeft succesvol een account aangemaakt<br/> en wordt doorgestuurd naar de inlog pagina..</h3>
                        <h5>Mocht u niet automatisch worden doorgestuurd<br/>
                            <NavLink to="/login" exact activeClassName="active-link">klik dan hier!</NavLink>
                        </h5>
                    </div>
                </div>

            ) : (

                <div className="register">
                    <p ref={ errorRef } className={ errorMessage ? 'error-message' : 'offscreen' }
                       aria-live="assertive">
                        { errorMessage }</p>

                    <form className="form-register"
                          onSubmit={ handleSubmit }>

                        <h2>Registreren</h2>
                        <br/>

                        <label htmlFor="user">
                            Gebruikersnaam:
                            <FontAwesomeIcon icon={ faCheck } className={ validName ? "valid" : "hide" }/>
                            <FontAwesomeIcon icon={ faTimes } className={ validName || !user ? "hide" : "invalid" }/>
                        </label>

                        <input
                            className="user"
                            type="text"
                            id="user"
                            ref={ userRef }
                            autoComplete="off"
                            onChange={ (e) => setUser (e.target.value) }
                            value={ user }
                            required
                            aria-invalid={ validName ? "false" : "true" }
                            aria-describedby="usernamenote"
                            onFocus={ () => setUserFocus (true) }
                            onBlur={ () => setUserFocus (false) }
                        />

                        <p id="uidnote" className={ userFocus && !validName ? "instructions" : "offscreen" }>
                            <FontAwesomeIcon icon={ faInfoCircle }/>
                            <em>4 tot 12 karakters. <br/>
                                Moet met een letter beginnen.<br/>
                                Letters, cijfers, underscore, middenstreep zijn toegestaan.</em>
                        </p>
                        <br/>

                        <label htmlFor="email">
                            E-mail:
                            <FontAwesomeIcon icon={ faCheck } className={ validEmail ? "valid" : "hide" }/>
                            <FontAwesomeIcon icon={ faTimes } className={ validEmail || !email ? "hide" : "invalid" }/>
                        </label>


                        <input
                            className="email"
                            type="e-mail"
                            id="email"
                            onChange={ (e) => setEmail (e.target.value) }
                            value={ email }
                            required
                            aria-invalid={ validEmail ? "false" : "true" }
                            aria-describedby="emailnote"
                            onFocus={ () => setEmailFocus (true) }
                            onBlur={ () => setEmailFocus (false) }
                        />

                        <p id="emailnote"
                           className={ emailFocus && !validEmail ? "instructions" : "offscreen" }>
                            <FontAwesomeIcon icon={ faInfoCircle }/>
                            <em>Dit veld mag niet leeg zijn!</em>
                        </p>
                        <br/>


                        <label htmlFor="password">
                            Wachtwoord:
                            <FontAwesomeIcon icon={ faCheck } className={ validPassword ? "valid" : "hide" }/>
                            <FontAwesomeIcon icon={ faTimes } className={ validPassword || !password ? "hide" : "invalid" }/>
                        </label>

                        <input
                            className="password"
                            type="password-user"
                            id="password"
                            onChange={ (e) => setPassword (e.target.value) }
                            value={ password }
                            required
                            aria-invalid={ validPassword ? "false" : "true" }
                            aria-describedby="password-note"
                            onFocus={ () => setPasswordFocus (true) }
                            onBlur={ () => setPasswordFocus (false) }
                        />

                        <p id="password-note"
                           className={ passwordFocus && !validPassword ? "instructions" : "offscreen" }>
                            <FontAwesomeIcon icon={ faInfoCircle }/>
                            <em>8 tot 24 karakters.<br/>
                                Moet een hoofd en klein letter, cijfer plus een speciaal teken bevatten.<br/>
                                De toegestane speciale tekens zijn: <span aria-label="exclamation mark">!</span>
                                <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>
                                <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></em>
                        </p>
                        <br/>

                        <label htmlFor="repeat">
                            Herhaal wachtwoord:
                            <FontAwesomeIcon icon={ faCheck } className={ validRepeat ? "valid" : "hide" }/>
                            <FontAwesomeIcon icon={ faTimes }
                                             className={ validRepeat || !repeat ? "hide" : "invalid" }/>
                        </label>

                        <input
                            className="repeat"
                            type="repeat-password"
                            id="repeat"
                            onChange={ (e) => setRepeat (e.target.value) }
                            value={ repeat }
                            required
                            aria-invalid={ validRepeat ? "false" : "true" }
                            aria-describedby="repeat-note"
                            onFocus={ () => setRepeatFocus (true) }
                            onBlur={ () => setRepeatFocus (false) }
                        />

                        <p id="repeat-note"
                           className={ repeatFocus && !validRepeat ? "instructions" : "offscreen" }>
                            <FontAwesomeIcon icon={ faInfoCircle }/>
                            <em>Wachtwoorden moeten overeenkomen.</em>
                        </p>


                        <button
                            className="button-register"
                            type="submit"
                            disabled={ !validName || !validPassword || !validRepeat || !validEmail }>Registreren
                        </button>

                        <div className="akkoord-registratie">
                            <Link to={ "/registreren/" }>

                                <h4>Door te registreren ga ik akkoord met de algemene voorwaarden <br/>
                                    en het privacybeleid</h4>

                            </Link>
                        </div>

                        <p className="btn-text-registreren">Registreer/Log in om prijzen te kunnen zien</p>


                        <section className="form-footer">
                            Heeft u al een account?<br/>
                            <span className="line">
                                 <NavLink to="/login" exact activeClassName="active-link">Log hier in!</NavLink>
                             </span>
                        </section>
                    </form>
                </div>
            )}
        </>
    );
}

export default SignUp;


