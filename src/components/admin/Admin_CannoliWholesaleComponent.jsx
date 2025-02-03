import React, { useContext, useEffect } from 'react';
import pageImg from './../../assets/img.background/background cannolis.jpg';
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import SaveButton from "../button/saveButton/SaveButton";
import './Admin_CannoliWholesaleComponent.css';

function Admin_CannoliWholesaleComponent({headerImageHandler, pageTitleHandler}) {
    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "..veld is verplicht";
    const navigate = useNavigate();


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    async function sendCannoliData(cannolidata) {
        try {
            await axios.put(`http://localhost:8080/cannolis/${id}`,
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
                }).then(updatedCannoli)
        } catch (error) {
            console.error(error);
        }
    }
    function updatedCannoli() {
        navigate(`/cannoli`)
    }

    return (
        <>


            {user.roles !== 'ROLE_ADMIN' ?

                <div className="admin-info-container">
                    <div className="admin-info">
                        <h1>U moet ingelogd zijn als
                            <br/> ADMINISTRATOR
                            <br/> om deze content te mogen zien..
                        </h1>
                    </div>
                </div>
                :
                <div className="cannoli-form-container">
                    <div className="cannoli-form-text">

                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda enim eos itaque ratione!
                        Alias amet consectetur deleniti, odio omnis quidem.
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ipsum provident, quod suscipit
                        totam vero voluptas? Cupiditate ipsum officiis quaerat.
                        <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsam iste molestias natus
                        perferendis rerum sapiente? Esse ipsa quisquam sit.
                    </div>

                    <form className="cannoli-form"
                          onSubmit={handleSubmit(sendCannoliData)}>

                        <div>
                            <label htmlFor="cannoli-details-id">
                                Artikelnummer:
                                <input
                                    type="text"
                                    id="cannoli_id"
                                    {...register("cannoli_id", {
                                        required: {value: true, message: message}
                                    })}
                                    placeholder={id}
                                />
                            </label>
                            {errors.cannoli_id && <p>{errors.cannoli_id.message}</p>}
                            <br/>

                            <label htmlFor="cannoli-name">
                                Cannolinaam:
                                <input
                                    type="text"
                                    id="cannoli_name"
                                    {...register("cannoli_name", {
                                        required: {value: true, message: message}
                                    })}
                                    placeholder="cannoli-naam"
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
                                    <option value="Cannoli Snack">
                                        Cannoli Snack
                                    </option>

                                    <option value="Cannoli Glutenfree">
                                        Cannoli Glutenfree
                                    </option>

                                    <option value="Cannoli Vegan">
                                        Cannoli Vegan
                                    </option>
                                </select>

                            </label>
                            {errors.cannoli_type && <p>{errors.cannoli_type.message}</p>}
                            <br/>

                        </div>

                        <div className="cannoli-omschrijving">

                            <label htmlFor="cannoli-description">
                                Omschrijving:
                                <textarea
                                    type="text"
                                    id="cannoli_description"
                                    cols="40"
                                    rows="10"
                                    {...register("cannoli_description", {
                                        required: {value: false, message: message}
                                    })}
                                    placeholder="Cannoli's is een Italiaanse koekje gevuld met
                                    cremé in diverse smaken."
                                />

                            </label>
                            {errors.cannoli_description && <p>{errors.cannoli_description.message}</p>}
                            <br/>

                            <label htmlFor="cannoli-ingredients">
                                Ingredienten:
                                <textarea
                                    type="text"
                                    id="cannoli_ingredients"
                                    cols="40"
                                    rows="10"
                                    {...register("cannoli_ingredients", {
                                        required: {value: false, message: message}
                                    })}
                                    placeholder="Room, tiramisu-créme (52%, suiker, plantaardig vet
                               (palmolie, zonnebloemolie)."
                                />

                            </label>
                            {errors.cannoli_ingredients && <p>{errors.cannoli_ingredients.message}</p>}
                            <br/>

                        </div>

                        <div>

                            <label htmlFor="cannoli-price">
                                Prijs:
                                <input
                                    type="text"
                                    id="cannoli_price"
                                    {...register("cannoli_price", {
                                        required: {value: true, message: message}
                                    })}
                                    placeholder="prijs"
                                />

                            </label>
                            {errors.cannoli_price && <p>{errors.cannoli_price.message}</p>}
                            <br/>

                            <div className="cannoli-form-saveButton">
                                <SaveButton/>
                            </div>
                        </div>
                    </form>

                </div>
            }

            </>

    )

}

export default Admin_CannoliWholesaleComponent;





