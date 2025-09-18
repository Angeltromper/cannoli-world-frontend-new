import  { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import {useFormContext} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import pageImg from "../../assets/img.background/Background cannolis.jpg";
import './UserForm.css';

function UserForm({headerImageHandler}) {
    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "...dit veld is verplicht";
    const navigate = useNavigate();
    const {user, setUser} = useContext(AuthContext);
    const token = localStorage.getItem( 'token');

    useEffect (() => {
        headerImageHandler (pageImg);
    }, [headerImageHandler]);


    async function sendPersonData(form) {
        const payload = {
            personFirstname:       form.person_firstname,
            personLastname:        form.person_lastname,
            personStreetName:      form.person_street_name,
            personHouseNumber:     form.person_house_number,
            personHouseNumberAdd:  form.person_house_number_add,
            personZipcode:         form.person_zipcode,
            personCity:            form.person_city,
        };

        try {
        const { data: updated } = await axios.put(
            "http://localhost:8080/persons/me",
            payload,
            {
                headers: {"Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        setUser(u => ({
            ...u,
            person_id: updated.id,
            personFirstname:       updated.person_firstname,
            personLastname:        updated.person_lastname,
            personStreetName:      updated.person_street_name,
            personHouseNumber:     updated.person_house_number,
            personHouseNumberAdd:  updated.person_house_number_add,
            personZipcode:         updated.person_zipcode,
            personCity:            updated.person_city,
        }));
    } catch (e) {
        console.error(e);
        throw e;
        }
    }

    async function onSubmit(personData) {
        try {
            await sendPersonData(personData);

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
                        <label htmlFor="firstname">
                            Voornaam:
                            <input
                                type="text"
                                id="firstname"
                                {...register("person_firstname", {required: {value: true, message: message} })}
                                placeholder="Voornaam"
                            />
                        </label>
                        {errors.person_firstname && <p className="form-error">{errors.person_firstname.message}</p>}

                        <label htmlFor="lastname">
                            Achternaam
                            <input
                                type="text"
                                id="lastname"
                                {...register( "person_lastname", {required: {value: true, message: message} })}
                                placeholder="Achternaam"
                            />
                        </label>
                        {errors.person_lastname && <p className="form-error">{errors.person_lastname.message}</p>}

                        <label htmlFor="streetname">
                            Straatnaam
                            <input
                                type="text"
                                id="streetname"
                                {...register("person_street_name", {required: {value: true, message: message} })}
                                placeholder="Straatnaam"
                            />
                        </label>
                        {errors.person_street_name && <p className="form-error">{errors.person_street_name.message}</p>}

                        <label htmlFor="housenumber">
                            Huisnummer
                            <input
                                type="text"
                                id="housenumber"
                                {...register( "person_house_number", {required: {value: true, message: message} })}
                                placeholder="Huisnummer"
                            />
                        </label>
                        {errors.person_house_number && <p className="form-error">{errors.person_house_number.message}</p>}

                        <label htmlFor="housenumberadd">
                            Toevoeging
                            <input
                                type="text"
                                id="housenumberadd"
                                {...register("person_house_number_add", {required: {value: false, message: message} })}
                                placeholder="Toevoeging"
                            />
                        </label>
                        {errors.person_house_number_add && <p className="form-error">{errors.person_house_number_add.message}</p>}

                        <label htmlFor="zipcode">
                            Postcode
                            <input
                                type="text"
                                id="zipcode"
                                {...register("person_zipcode", {required: {value: true, message: message} })}
                                placeholder="Postcode"
                            />
                        </label>
                        {errors.person_zipcode && <p className="form-error">{errors.person_zipcode.message}</p>}

                        <label htmlFor="city">
                            Woonplaats
                            <input
                                type="text"
                                id="city"
                                {...register("person_city", {required: {value: true, message: message} })}
                                placeholder="Woonplaats"
                            />
                        </label>
                        {errors.person_city && <p className="form-error">{errors.person_city.message}</p>}
                        <br/>
                    </div>

                    <button className="button__userform " type="submit">Opslaan</button>

                </form>
            </div>
        </>
    );
}

export default UserForm;
