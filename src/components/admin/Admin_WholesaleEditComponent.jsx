import React, { useContext, useEffect } from 'react';
import pageImg from './../../assets/img.background/background cannolis.jpg';
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import Button from "../button/Button";

function Admin_WholesaleEditComponent({ headerImageHandler, pageTitleHandler }) {
    const { user } = useContext(AuthContext);
    const { cannoli_id } = useParams();
    const { register, formState: { errors }, handleSubmit} = useFormContext();
    const message = "..veld is verplicht";
    const navigate = useNavigate();


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    async function sendCannolisData(cannolidata) {
        try {
            await axios.put(`http://localhost:8080/cannolis/${cannoli_id}`,
                {
                    id: cannolidata.cannoli_id,
                    cannoliName: cannolidata.cannoli_name,
                    cannoliType: cannolidata.cannoli_type,
                    description: cannolidata.cannoli_description,
                    ingredients: cannolidata.cannoli_ingredients,
                    price: cannolidata.cannoli_price
                }, {
                headers: {
                        'Content-Type': "application/json",
                    }
                }).then(updatedCannoli);
        } catch (error) {
            console.error(error);
        }
    }

    function updatedCannoli() {
        navigate(`/cannoli-assorti`);
    }

    return (
        <>
            {user.roles !== "ROLE_ADMIN" ?
                <div className="admin-container">
                    <div className="admin-warning">
                        <h3>U moet zijn ingelogd als<br />ADMINISTRATOR<br />om deze gegevens te beheren</h3>
                    </div>
                </div>
                 :
                <div className="admin-container">
                    <div className="admin-instructions">
                        <ul>
                            <li><strong>Cannoli-product wijzigen:</strong> Gebruik bestaand artikelnummer.</li>
                            <li><strong>Nieuw product:</strong> Laat veld leeg; artikelnummer wordt automatisch aangemaakt.</li>
                            <li><strong>Prijsnotatie:</strong> Gebruik een punt (.) i.p.v. komma (bv. 1.75).</li>
                        </ul>
                    </div>

                    <form className="admin-form"
                          onSubmit={handleSubmit(sendCannolisData)}>

                        <div>
                            <label htmlFor="details-cannolis-id">
                                Artikelnummer:
                                <input
                                type="text"
                                id="cannoli_id"
                                {...register("cannoli_id", {
                                    required: {value: true, message: message}
                                })}
                                placeholder={cannoli_id}
                                />
                            </label>
                            {errors.cannoli_id && <p>{errors.cannoli_id.message}</p>}
                            <br/>

                            <label htmlFor="details-cannoli-name">
                                Cannolinaam:
                                <input
                                    type="text"
                                    id="cannoli_id"
                                    {...register("cannoli_name", {
                                        required: {value: true, message: message }
                                    })}
                                    placeholder="Cannolinaam"
                                />
                            </label>
                            {errors.cannoli_name && <p>{errors.cannoli_name.message}</p>}
                            <br/>

                            <label htmlFor="cannoli_type">
                                <select
                                    id="cannoli_type"
                                    {...register("cannoli_type", {
                                        required: {value: true, message: message}
                                    })}
                                    placeholder="cannoli-soort"
                                >
                                    <option value="Snack">
                                        Snack
                                    </option>
                                    <option value="Glutenfree">
                                        Glutenfree
                                    </option>
                                    <option value="Vegan">
                                        Vegan
                                    </option>
                                </select>
                            </label>
                            {errors.cannoli_type && <p>{errors.cannoli_type.message}</p>}
                            <br/>

                            <div className="cannoli-omschrijving">
                                <label htmlFor="details-cannoli-description">
                                    Omschrijving:
                                    <textarea
                                        type="text"
                                        id="cannoli_omschrijving"
                                        rows="8"
                                        cols="50"
                                        {...register("cannoli_description", {
                                            required: {value: false, message: message}
                                        })}
                                        placeholder="Bijv. Italiaanse koek gevuld met cremige vulling."
                                    />
                                </label>
                                {errors.cannoli_description && <p>{errors.cannoli_description.message}</p>}
                                <br/>

                                <label htmlFor="details-cannoli-ingredients">
                                    Ingrediënten:
                                    <textarea
                                        type="text"
                                        rows="8"
                                        cols="50"
                                        id="cannoli_ingredients"
                                        {...register("cannoli_ingredients", {
                                            required: {value: false, message: message}
                                        })}
                                        placeholder="Bijv. Room, suiker, tiramisu-créme..."
                                    />
                                </label>
                                {errors.cannoli_ingredients && <p>{errors.cannoli_ingredients.message}</p>}
                                <br/>
                            </div>

                            <label htmlFor="details-cannoli-price">
                                Prijs:
                                <input
                                    type="text"
                                    id="cannoli-price"
                                    {...register("cannoli_price", {
                                        required: {value: true, message: message}
                                    })}
                                    placeholder="Bijv. 1.75"
                                />
                            </label>
                            {errors.cannoli_price && <p>{errors.cannoli_price.message}</p>}
                            <br/>

                            <div className="admin-form-save-button">
                                <Button text="Opslaan" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            }
            </>
    );
}

export default Admin_WholesaleEditComponent;
