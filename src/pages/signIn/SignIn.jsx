import React, {useContext, useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import {Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import pageImg from "../../../src/assets/img.background/background cannolis.jpg";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './SignIn.css';

const userRegex = /^[A-z][A-z0-9-_]{4,12}$/;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,24}$/;


function SignIn({headerImageHandler, pageTitleHandler}) {

    const {register, formState: {errors}, handleSubmit} = useForm();
    const navigate= useNavigate ();
    const {login, isAuth} = useContext(AuthContext);

    const [user] = useState('');
    const [validName, setValidName] = useState(false);

    const [password] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const [error, setError] = useState(false);
    const [toggleAddSucces] = useState(false);


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    useEffect( () => {
        setValidName (userRegex.test(user));
    }, [user]);

    useEffect( () => {
        setValidPassword (passwordRegex.test(password));
    }, [password]);

    async function signIn(e) {
        try {
            const response = await axios.post ('http://localhost:8080/authenticate', {
                username: e.username,
                password: e.password,
            });

            login(response.data.jwt);
            toggleAddSucces (true);

            setTimeout (() => {
                navigate ('/persoonsgegevens');
            }, 2500)

        } catch (error) {
            console.error('There was an error', error);
            setError(true)
        }
    }

    return (
        <>
            {!isAuth ?
                <div className="page-login">
                    <form className="form-login"
                          onSubmit={ handleSubmit (signIn) }>

                        <h2 className="legend">Inloggen</h2>
                        <br/>

                        <label htmlFor="details-username">
                            Gebruikersnaam:
                            <input
                                className="details-username"
                                type="text"
                                id="details-username"
                                { ...register ("text", {
                                    required: "gebruikersnaam is verplicht!",
                                }) }
                                aria-invalid={ validName ? "false" : "true" }
                                placeholder="gebruikersnaam"
                            />
                        </label>
                        { errors.username && <p>{ errors.username.message }</p> }
                        <br/>

                        <label htmlFor="details-password">
                            Wachtwoord:
                            <input
                                className="details-password"
                                type="password"
                                id="details-password"
                                { ...register ("password", {
                                    required: "wachtwoord is verplicht!"
                                }) }
                                aria-invalid={ validPassword ? "false" : "true" }
                                placeholder="wachtwoord"
                            />

                        </label>
                        { errors.password && <p>{ errors.password.message }</p> }
                        <br/>

                        <div className="error-inlog">
                            { error && "Er ging iets mis, controleer uw gegevens en probeer het later nog een keer." }
                        </div>

                        <button
                            type="submit"
                            className="button-inlog"
                            disabled={ !validName || !validPassword }>Inloggen
                        </button>


                        <section className="form-footer">
                            Heeft u nog geen account?<br/>
                            <span className="line">
                                <Link to="/registreren" exact activeClassName="active-link">Registreer</Link>
                            </span>
                        </section>
                    </form>
                </div>
                :
                <span className="timeout-succes-signin succes-slide-bottom">
                    <h2>Inloggen succesvol! <FontAwesomeIcon icon={ faCheck } className="valid-check"/></h2>
                    <h5>U bent succesvol ingelogd<br/> en wordt automatisch doorgestuurd..</h5>
                    <p>Mocht u niet automatisch doorgestuurd worden<br/>
                    <Link to="/persoonsgegevens" exact activeClassName="active-link">klik dan hier!</Link>
                    </p>
                </span>
            }
        </>
    )

}


export default SignIn;
