import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import {useFormContext} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import pageImg from "../../assets/img.background/Background cannolis.jpg";
import './UserForm.css';


function InfoForm({headerImageHandler, pageTitleHandler}) {
    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const token = localStorage.getItem( 'token');
    const message = "...dit veld is verplicht";
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);

    useEffect (() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
    }, []);



    async function sendPersonData(data) {
        try {
            await axios.put(`http://localhost:8080/persons/${user.person_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${ token }`,
                    },

                    id: user.id,
                    personFirstname: data.person_firstname,
                    personLastname: data.person_lastname,
                    personStreetName: data.person_street_name,
                    personHouseNumber: data.person_house_number,
                    personHouseNumberAdd: data.person_house_number_add,
                    personZipcode: data.person_zipcode,
                    personCity: data.person_city,
                });

        } catch (error) {
            console.error(error);
        }
    }

    async function onSubmit(data) {
        try {
            await sendPersonData(data);

            setTimeout(() => {
                navigate( '/profile')
            }, 800);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="form-container">
                <form className="user-form"
                    onSubmit={ handleSubmit (onSubmit)}>

                    <h4>U kunt hier uw persoonsgegevens wijzigen/aanpassen</h4>


                    <div className="form-naw-user">
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
                                    required: {value: false, message: message}
                                })}
                                placeholder="Toevoeging"

                            />
                        </label>
                        {errors.person_house_number_add && <p className="form-error">{errors.person_house_number_add.message}</p>}

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
                    </div>

                    <button className="button__reusable " type="submit">Opslaan</button>

                </form>
            </div>
        </>
    );
}

export default InfoForm;
