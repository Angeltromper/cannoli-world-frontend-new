import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormContext } from "react-hook-form";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import './SignIn.css';




function SignIn({ headerImageHandler, pageTitleHandler }) {
    const {register, formState: { errors }, handleSubmit} = useFormContext();
    const navigate = useNavigate();
    const { login, logout, auth } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [addSucces, toggleAddSuccess] = useState(false);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    async function signIn(data) {
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: data.username,
                password: data.password,
            });

            login(response.data.jwt);
            toggleAddSuccess(true);

            setTimeout(() => {
                navigate('/profile/');
            }, 2000);

        } catch (error) {
            console.error('There was an error', error);
            setError(true);
        }
    }

    return (
        <>
            {!auth && !addSucces && (
                <div className="page-login">
                    <h2 className="legend">Inloggen</h2>
                        <form className="form-login" onSubmit={handleSubmit(signIn)}>

                        <label htmlFor="details-username">
                            Gebruikersnaam:
                            <input
                                type="text"
                                id="details-username"
                                {...register("username", {
                                    required: "gebruikersnaam is verplicht!",
                                })}
                                // aria-invalid={validName ? "false" : "true"}
                                placeholder="gebruikersnaam"
                            />
                        </label>
                            {errors.username && <p>{errors.username.message}</p>}
                            <br/>

                        <label htmlFor="details-password">
                            Wachtwoord:
                            <input
                                type="password"
                                id="details-password"
                                {...register("password", {
                                    required: "wachtwoord is verplicht!"
                                })}
                                // aria-invalid={validPassword ? "false" : "true"}
                                placeholder="wachtwoord"
                            />
                        </label>
                            {errors.password && <p>{errors.password.message}</p>}
                            <br/>

                            <div className="errorInloggen">
                                {error && "Inloggen mislukt. Controleer je gegevens en probeer het opnieuw."}
                            </div>


                        <button className="button-login" type="submit">
                            Inloggen
                        </button>
                    </form>

                        <div className="button-row">
                            <button className="button-logout" type="button" onClick={logout}>
                                Uitloggen
                            </button>
                        </div>

                        <div className="login-footer-wrapper">
                            <p className="account-text">Heeft u nog geen account?</p>
                            <Link to="/register">
                                <button className="button-register">Registreer</button>
                            </Link>
                        </div>
                </div>
            )}

            {addSucces && (
                        <div className="timeout-succes-signin">
                            <h3>
                                Inloggen succesvol! <FontAwesomeIcon icon={faCheck} className="valid-check"/>
                            </h3>

                            <h5>U wordt doorgestuurd naar uw profiel...</h5>



                            <div className="profile-button-wrapper">
                        <Link to="/profile">
                            <button className="button-profile">Ga naar profiel</button>
                        </Link>
                    </div>

                    <button className="button-logout" type="button" onClick={logout}>
                        Uitloggen
                    </button>
                </div>
            )}

        </>
    );

}

export default SignIn;
