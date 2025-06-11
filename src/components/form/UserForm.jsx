import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import pageImg from "../../assets/img.background/Background cannolis.jpg";
import './UserForm.css';

function InfoForm({ headerImageHandler, pageTitleHandler }) {
    const { register, formState: { errors }, handleSubmit } = useFormContext();
    const token = localStorage.getItem('token');
    const message = "...dit veld is verplicht";
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    async function sendPersonData(data) {
        try {
            await axios.put(`http://localhost:8080/persons/${user.person_id}`,
                {
                    id: user.id,
                    personFirstname: data.person_firstname,
                    personLastname: data.person_lastname,
                    personStreetName: data.person_street_name,
                    personHouseNumber: data.person_house_number,
                    personHouseNumberAdd: data.person_house_number_add,
                    personZipcode: data.person_zipcode,
                    personCity: data.person_city,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
        } catch (error) {
            console.error(error);
        }
    }

    async function onSubmit(data) {
        try {
            await sendPersonData(data);
            setTimeout(() => {
                navigate('/profile');
            }, 800);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
                <h4>U kunt hier uw persoonsgegevens wijzigen/aanpassen</h4>

                <div className="form-naw-user">
                    <label>
                        Voornaam:
                        <input
                            type="text"
                            {...register("person_firstname", {
                                required: { value: true, message: message }
                            })}
                            placeholder="Voornaam"
                        />
                        {errors.person_firstname && <p className="form-error">{errors.person_firstname.message}</p>}
                    </label>

                    <label>
                        Achternaam:
                        <input
                            type="text"
                            {...register("person_lastname", {
                                required: { value: true, message: message }
                            })}
                            placeholder="Achternaam"
                        />
                        {errors.person_lastname && <p className="form-error">{errors.person_lastname.message}</p>}
                    </label>

                    <label>
                        Straatnaam:
                        <input
                            type="text"
                            {...register("person_street_name", {
                                required: { value: true, message: message }
                            })}
                            placeholder="Straatnaam"
                        />
                        {errors.person_street_name && <p className="form-error">{errors.person_street_name.message}</p>}
                    </label>

                    <label>
                        Huisnummer:
                        <input
                            type="text"
                            {...register("person_house_number", {
                                required: { value: true, message: message }
                            })}
                            placeholder="Huisnummer"
                        />
                        {errors.person_house_number && <p className="form-error">{errors.person_house_number.message}</p>}
                    </label>

                    <label>
                        Toevoeging:
                        <input
                            type="text"
                            {...register("person_house_number_add")}
                            placeholder="Toevoeging (optioneel)"
                        />
                    </label>

                    <label>
                        Postcode:
                        <input
                            type="text"
                            {...register("person_zipcode", {
                                required: { value: true, message: message }
                            })}
                            placeholder="Postcode"
                        />
                        {errors.person_zipcode && <p className="form-error">{errors.person_zipcode.message}</p>}
                    </label>

                    <label>
                        Woonplaats:
                        <input
                            type="text"
                            {...register("person_city", {
                                required: { value: true, message: message }
                            })}
                            placeholder="Woonplaats"
                        />
                        {errors.person_city && <p className="form-error">{errors.person_city.message}</p>}
                    </label>
                </div>

                <button className="button__reusable" type="submit">Opslaan</button>
            </form>
        </div>
    );
}

export default InfoForm;
