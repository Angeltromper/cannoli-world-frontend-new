/*
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../button/Button";
import './Admin_CannoliComponent.css';


function Admin_CannoliComponent({postLink, preloadValues}) {
    const {register, formState: {errors}, handleSubmit} = useFormContext({defaultValues: preloadValues});
    const {user} = useContext(AuthContext);
    const message = ".. veld is verplicht";
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [ cannolis, setCannolis] = useState([]);

    async function sendCannoliData(cannolidata) {
        try {
            const response = await axios.post(`http://localhost:8080/${postLink}`,
                {
                    id: cannolidata.cannoli_id,
                    cannoliName: cannolidata.cannoli_name,
                    cannoliType: cannolidata.cannoli_type,
                    cannoliDescription: cannolidata.cannoli_description,
                    cannoliIngredients: cannolidata.cannoli_ingredients,
                    cannoliPrice: cannolidata.cannoli_price,
                }).then(addedNewCannoli)

        } catch (error) {
            console.error (error);
        }
    }

    console.log();

    function addedNewCannoli() {
        navigate('/cannolis')
    }

    useEffect(() => {
        async function fetchCannolis() {
            try {
                const response = await axios.get (`http://localhost:8080/cannolis`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setCannolis(response.data)
            } catch (error) {
                console.error ('There was an error', error);
            }
        }

        fetchCannolis() ();
    }, [cannolis]);

    async function deleteCannoli(cannoliName) {
        try {
            await axios.delete (`http://localhost:8080/cannolis/delete/${cannoliName}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                })
        } catch (error) {
            console.error (error)
        }

        setTimeout(() => {
            navigate ('/cannoli-toevoegen');
        }, 1000)
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

                <section>
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

                        <form className="cannoliform"
                              onSubmit={handleSubmit(sendCannoliData)}>

                            <div>
                                <label htmlFor="cannoli-name">
                                    Productnaam:
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

                                        <option value="Giftbox">
                                            Giftbox
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
                                    Ingredient:
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
                                {errors.cannoli_ingredients && <p>{errors.cannoli_ingedrients.message}</p>}
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
                                    <Button/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <section className="Admin_CannoliAdded">

                        <div>
                            <h2> Cannoli </h2>
                        </div>

                        <table>
                            <thead>
                            <tr>
                                <th></th>
                                <th>ID/Artnr.</th>
                                <th>CannoliNaam</th>
                                <th>Afbeelding</th>
                                <th>Prijs</th>
                                <th>Omschrijving</th>
                                <th>Ingrediënten</th>
                            </tr>
                            </thead>

                            <tbody className="admin_tbody">

                            {cannolis.map((cannoli) => {
                                cannoli.ingredient = undefined;
                                return <tr key={cannoli.id}>

                                    <td>
                                        <button className="delete-button"
                                                onClick={() => deleteCannoli(cannoli.id)}>
                                        </button>
                                    </td>
                                    <td>{cannoli.id}</td>
                                    <td>{cannoli.cannoliName}</td>
                                    <td>{cannoli.image && <img src={cannoli.image.url} alt={cannoli.image.fileName}/>}</td>
                                    <td>{cannoli.price}</td>
                                    <td>{cannoli.description}</td>
                                    <td>{cannoli.ingredient}</td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </section>
                </section>
            }
        </>
    )
}

export default Admin_CannoliComponent;

*/
