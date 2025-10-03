import { useRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import pageImg from "../../assets/img.background/background cannolis.jpg";
import "./SignUp.css";

const USER_REGEX = /^[A-z][A-z0-9-_]{4,11}$/;
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,24}$/;
const EMAIL_REGEX =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function SignUp({ headerImageHandler }) {
    const navigate = useNavigate();
    const userRef = useRef(null);
    const errorRef = useRef(null);

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [repeat, setRepeat] = useState("");
    const [validRepeat, setValidRepeat] = useState(false);
    const [repeatFocus, setRepeatFocus] = useState(false);

    const [agreeTerms, setAgreeTerms] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (typeof headerImageHandler === "function") headerImageHandler(pageImg);
    }, [headerImageHandler]);

    useEffect(() => {
        userRef.current?.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidRepeat(password === repeat);
    }, [password, repeat]);

    useEffect(() => {
        setErrorMessage("");
    }, [user, email, password, repeat]);

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        const v1 = USER_REGEX.test(user);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PASSWORD_REGEX.test(password);
        const v4 = password === repeat;

        if (!v1 || !v2 || !v3 || !v4) {
            setErrorMessage("Ongeldige invoer");
            errorRef.current?.focus();
            return;
        }
        if (!agreeTerms) {
            setErrorMessage("Je kan je alleen registreren als je met onze voorwaarden instemt.");
            errorRef.current?.focus();
            return;
        }

        try {
            const res = await axios.post("http://localhost:8080/users/create", {
                username: user,
                password,
                email,
            });
            console.log(res);
            setSuccess(true);
            setTimeout(() => navigate("/login"), 2500);
        } catch (err) {
            if (!err?.response) setErrorMessage("Geen server response");
            else if (err.response?.status === 409)
                {setErrorMessage("Registratie is mislukt.. Gebruikersnaam en/of email is al in gebruik!");}
            else setErrorMessage("Registratie mislukt");
            errorRef.current?.focus();
        }
    }

    return (
        <>
            {success ? (
                <div className="timeout-succes succes-slide-down">
                    <div>
                        <h1>
                            Gelukt! <FontAwesomeIcon icon={faCheck} className="valid-check" />
                        </h1>
                        <h3>
                            U heeft succesvol een account aangemaakt
                            <br /> en wordt doorgestuurd naar de inlog pagina..
                        </h3>
                        <h5>
                            Mocht u niet automatisch worden doorgestuurd
                            <br />
                            <NavLink to="/login" className="active-link">
                                klik dan hier!
                            </NavLink>
                        </h5>
                    </div>
                </div>
            ) : (
                <div className="register">
                    <p
                        ref={errorRef}
                        className={errorMessage ? "error-message" : "offscreen"}
                        aria-live="assertive"
                    >
                        {errorMessage}
                    </p>

                    <form className="form-register" onSubmit={handleSubmit}>
                        <h2>Registreren</h2>
                        <br />

                        <label htmlFor="username">
                            Gebruikersnaam:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="user"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <em>
                                4 tot 12 karakters. <br />
                                Moet met een letter beginnen. <br />
                                Letters, cijfers, underscore, middenstreep zijn toegestaan.
                            </em>
                        </p>
                        <br />

                        <label htmlFor="email">
                            E-mail:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <em>Dit veld mag niet leeg zijn!</em>
                        </p>
                        <br />

                        <label htmlFor="password">
                            Wachtwoord:
                            <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            aria-describedby="password-note"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        <p id="password-note" className={passwordFocus && !validPassword ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <em>
                                8 tot 24 karakters. <br />
                                Moet een hoofd en klein letter, cijfer plus een speciaal teken bevatten. <br />
                                Toegestane tekens: ! @ # $ %
                            </em>
                        </p>
                        <br />

                        <label htmlFor="repeat">
                            Herhaal wachtwoord:
                            <FontAwesomeIcon icon={faCheck} className={validRepeat ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validRepeat || !repeat ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="repeat"
                            type="password"
                            id="repeat"
                            value={repeat}
                            onChange={(e) => setRepeat(e.target.value)}
                            required
                            aria-invalid={validRepeat ? "false" : "true"}
                            aria-describedby="repeat-note"
                            onFocus={() => setRepeatFocus(true)}
                            onBlur={() => setRepeatFocus(false)}
                        />
                        <p id="repeat-note" className={repeatFocus && !validRepeat ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <em>Wachtwoorden moeten overeenkomen.</em>
                        </p>

                        <label htmlFor="accept-terms">
                            <input
                                type="checkbox"
                                id="accept-terms"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                aria-invalid={submitted && !agreeTerms}
                                aria-describedby="agree-error"
                            />

                            Ik ga akkoord met de algemene voorwaarden.
                        </label>
                        {submitted && !agreeTerms && (
                            <p id="agree-error" className="error-label">
                                Je kan je alleen registreren als je met onze voorwaarden instemt.
                            </p>
                        )}
                        <br />

                        <button
                            type="submit"
                            className="button-register"
                            disabled={!validName || !validEmail || !validPassword || !validRepeat}
                        >
                            Registreren
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}

export default SignUp;
