import React, {useContext, useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import './SignIn.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{4,12}$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,24}$/;


function SignIn({headerImageHandler, pageTitleHandler}) {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const navigate = useNavigate();

    const {login, logout, auth} = useContext(AuthContext);

    const [user] = useState('');
    const [validName, setValidName] = useState(false);

    const [password] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const [error, setError] = useState(false);
    const [addSucces, toggleAddSuccess] = useState(false);


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    useEffect( () => {
        setValidName (USER_REGEX.test(user));
    }, [user]);

    useEffect( () => {
        setValidPassword (PASSWORD_REGEX.test(password));
    }, [password]);

    async function signIn(data) {
        console.log(data)
        console.log("hoi")
        try {
            const response = await axios.post('http://localhost:8080/authenticate',
                {
                    username: data.username,
                    password: data.password,
               }, {
            });

            login(response.data.jwt);
            toggleAddSuccess (true);


           setTimeout (() => {
                navigate (`/profile-info`);
            }, 2500)

        } catch (error) {
            console.error('There was an error', error);
            setError(true)
        }
    }

    function handleClick() {
        console.log("hoi")
    }
    return (
        <>

            <button onClick={handleClick}>
                klik


            </button>
            {!auth ?
                <div className="page-login">
                    <form className="form-login"
                          onSubmit={ handleSubmit (signIn) }>

                        <h2 className="legend">Inloggen</h2>
                        <br/>

                        <label htmlFor="details-username">
                            Gebruikersnaam:
                            <input
                                /*   className="details-username"*/
                                type="text"
                                id="details-username"
                                { ...register ("username", {
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
                                /*   className="details-password"*/
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

                        <button type="submit" onClick={handleClick}>Inloggen</button>

                    </form>


                    <button type="button" onClick={ logout }>Uitloggen</button>

                    { error && "Er ging iets mis, controleer u gegevens en probeer het opnieuw." }


                    <section className="form-footer">
                        Heeft u nog geen account?<br/>
                        <span className="line">
                                <Link to="/register" exact activeClassName="active-link">Registreer</Link>

                            </span>
                    </section>

                </div>
                :
                <span className="timeout-succes-signin succes-slide-bottom">
                    <h2>Inloggen succesvol! <FontAwesomeIcon icon={ faCheck } className="valid-check"/></h2>
                    <h5>U bent succesvol ingelogd<br/> en wordt automatisch doorgestuurd..</h5>

                    <button type="button" onClick={ logout }>Uitloggen</button>

                </span>
            }
        </>
    )
}


export default SignIn;
