import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import {useFormContext} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import SaveButton from '../button/saveButton/SaveButton';
import './InfoForm.css';

function InfoForm({headerImageHandler, pageTitleHandler}) {
    useEffect (() => {
        headerImageHandler ();
        pageTitleHandler ();
    }, []);

    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "...dit veld is verplicht";
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem( 'token');


    async function sendPersonData(persondata) {
        try {
            await axios.put(`http://localhost:8080/person/${user.person_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    id: user.id,
                    personFirstname: persondata.person_firstname,
                    personLastname: persondata.person_lastname,
                    personStreetName: persondata.person_street_name,
                    personHouseNumber: persondata.person_house_number,
                    personHouseNumberAdd: persondata.person_house_number_add,
                    personCity: persondata.person_city,
                    personZipcode: persondata.person_zipcode,

                });

        } catch (error) {
            console.error(error);
        }
    }

    async function onSubmit(personData) {
        try {
            await sendPersonData(personData);

            setTimeout(() => {

                navigate( `/persoonsgegevens`)

            }, 500);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>

            <form className="form-container">
                <div className="user-form">
                    onSubmit={handleSubmit(onSubmit)}

                    <h1>U kunt hier uw persoonsgegevens wijzigen</h1>
                    <p>Na het invullen van elk veld kunt u de gegevens opslaan... </p>

                    <div className="form-name-user">
                        <label htmlFor="details-firstname">
                            Voornaam:
                            <input
                                type="text"
                                id="firstname"
                                {...register("person_firstname", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Voornaam"

                            />
                        </label>
                        {errors.person_firstname && <p className="form-error">{errors.person_firstname.message}</p>}

                        <br/>

                        <label htmlFor="details-lastname">
                            Achternaam
                            <input
                                type="text"
                                id="lastname"
                                {...register( "person_lastname", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Achternaam"

                            />
                        </label>
                        {errors.person_lastname && <p className="form-error">{errors.person_lastname.message}</p>}

                        <br/>

                    </div>

                    <div className="form-adress-user">
                        <label htmlFor="details-streetname">
                            Straatnaam
                            <input
                                type="text"
                                id="streetname"
                                {...register("person_street_name", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Straatnaam"

                            />
                        </label>
                        {errors.person_street_name && <p className="form-error">{errors.person_street_name.message}</p>}

                        <br/>

                        <label htmlFor="details-housenumber">
                            Huisnummer
                            <input
                                type="text"
                                id="housenumber"
                                {...register( "person_house-number", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Huisnummer"

                            />
                        </label>
                        {errors.person_house_number && <p className="form-error">{errors.person_house_number.message}</p>}

                        <br/>

                        <label htmlFor="details-housenumberadd">
                            Toevoeging
                            <input
                                type="text"
                                id="housenumberadd"
                                {...register("person_house_number_add", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Toevoeging"

                            />
                        </label>
                        {errors.person_house_number_add && <p className="form-error">{errors.person_house_number_add.message}</p>}

                    </div>

                    <div className="form-place-user">
                        <label htmlFor="details-city">
                            Woonplaats
                            <input
                                type="text"
                                id="city"
                                {...register("person_city", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Woonplaats"

                            />
                        </label>
                        {errors.person_city && <p className="form-error">{errors.person_city.message}</p>}

                        <br/>

                        <label htmlFor="details-zipcode">
                            Postcode
                            <input
                                type="text"
                                id="zipcode"
                                {...register("person_zipcode", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Postcode"

                            />
                        </label>
                        {errors.person_zipcode && <p className="form-error">{errors.person_zipcode_message}</p>}

                        <br/>

                    </div>

                    <SaveButton/>
                </div>
            </form>
        </>
    );
}

export default InfoForm;
