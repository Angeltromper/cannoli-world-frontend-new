/*
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-userForm";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import './SignIn.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{4,12}$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,24}$/;

function SignInKopie({ headerImageHandler, pageTitleHandler }) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login, logout, auth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [user] = useState('');
    // const [validName, setValidName] = useState(false);

    const [password] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const [error, setError] = useState(false);
    const [addSucces, toggleAddSuccess] = useState(false);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
    }, [password]);

    async function signIn(e) {
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: e.username,
                password: e.password,
            });

            login(response.data.jwt);
            toggleAddSuccess(true);

            setTimeout(() => {
                navigate('/userProfile/');
            }, 2000);

        } catch (error) {
            console.error('There was an error', error);
            setError(true);
        }
    }

    return (
        <>
            {!auth ?
                <div className="page-login">
                    <userForm className="userForm-login" onSubmit={handleSubmit(signIn)}>
                        <h2 className="legend">Inloggen</h2>

                        <label htmlFor="details-username">
                            Gebruikersnaam:
                            <input
                                type="text"
                                id="details-username"
                                {...register("username", { required: "gebruikersnaam is verplicht!" })}
                                aria-invalid={validName ? "false" : "true"}
                                placeholder="gebruikersnaam"
                            />
                        </label>
                        {errors.username && <p>{errors.username.message}</p>}

                        <label htmlFor="details-password">
                            Wachtwoord:
                            <input
                                type="password"
                                id="details-password"
                                {...register("password", { required: "wachtwoord is verplicht!" })}
                                aria-invalid={validPassword ? "false" : "true"}
                                placeholder="wachtwoord"
                            />
                        </label>
                        {errors.password && <p>{errors.password.message}</p>}

                        <div className="errorInloggen">
                            {error && "Er ging iets mis, controleer je gegevens en probeer het opnieuw."}
                        </div>

                        <button className="button-login"
                                type="submit"
                            // disabled={!validPassword || !validName}
                        >
                            Inloggen
                        </button>
                    </userForm>

                    <div className="button-row">


                        <button className="button-logout" type="button" onClick={logout}>
                            Uitloggen
                        </button>
                    </div>



                    <br/>

                    <div className="login-footer-wrapper">
                        <p className="account-text">Heeft u nog geen account?</p>
                        <Link to="/register">
                            <button className="register-button">Registreer</button>
                        </Link>
                    </div>


                    {error && (
                        <p className="error-message">
                            Er ging iets mis, controleer uw gegevens en probeer het opnieuw.
                        </p>
                    )}
                </div>

                :

                <div className="timeout-succes-signin succes-slide-bottom">
                    <h2>
                        Inloggen succesvol! <FontAwesomeIcon icon={faCheck} className="valid-check" />
                    </h2>
                    <h5>
                        U bent succesvol ingelogd<br />en wordt automatisch doorgestuurd..
                    </h5>

                    <div className="userProfile-button-wrapper">
                        <Link to="/userProfile">
                            <button className="button-userProfile">Ga naar profiel</button>
                        </Link>
                    </div>

                    <button className="button-logout" type="button" onClick={logout}>
                        Uitloggen
                    </button>
                </div>
            }

        </>
    );

}

export default SignInKopie;
*/
