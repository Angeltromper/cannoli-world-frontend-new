import React, { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import TextContainerResp from "../pageLayout/designElement/container/textContainerResp/TextContainerResp";
import ButtonDelete from "../button/ButtonDelete";
import './Admin_WholesaleComponent.css';

function Admin_WholesaleComponent() {

    const { register, formState: { errors }, handleSubmit } = useFormContext();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [cannolis, setCannolis] = useState([]);
    const message = ".. veld is verplicht";

    async function sendCannoliData(data) {
        try {
            await axios.post("http://localhost:8080/cannolis/create",
                {
                    id: data.cannoli_id,
                    cannoliName: data.cannoli_name,
                    cannoliType: data.cannoli_type,
                    description: data.cannoli_description,
                    ingredients: data.cannoli_ingredients,
                    price: data.cannoli_price,
                });
                addedNewCannoli();
        } catch (error) {
            console.error(error);
        }
    }

    function addedNewCannoli() {
        navigate(`/cannoli-assorti`)
    }

    useEffect(() => {
        async function fetchCannolis()   {
            try {
                const response = await axios.get(`http://localhost:8080/cannolis`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                setCannolis(response.data);
            } catch (error) {
                console.error('There was an error', error);
            }
        }
        fetchCannolis();
    }, []);

    async function deleteCannoli(cannoliId) {
        try {
            await axios.delete(`http://localhost:8080/cannolis/delete/${cannoliId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            setCannolis(prev => prev.filter(c=> c.id !== cannoliId));
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {user.roles !== "ROLE_ADMIN" ? (
                <div className="admin-container">
                    <div className="admin-warning">
                        <h3>U moet zijn ingelogd als<br />ADMINISTRATOR<br />om deze gegevens te beheren</h3>
                    </div>
                </div>
                ) : (
                    <section className="admin-container">
                        <TextContainerResp>
                            <h3>Cannoli toevoegen/wijzigen:</h3>
                            <h5>Voeg nieuwe producten toe of wijzig/verwijder bestaande cannoli-producten als administrator.</h5>
                            <ul className="admin-form-text">
                                <li><i>Cannoli-product wijzigen</i><p>Gebruik bestaand artikelnummer.</p></li>
                                <li><i>Nieuw product</i><p>Nieuw artikelnummer wordt automatisch aangemaakt.</p></li>
                                <li><i>Prijsformaat</i><p>Gebruik punt i.p.v. komma (bv. 1.75).</p></li>
                                <li><i>Foto toevoegen</i><p>Gebruik de (i) knop op de productenpagina.</p></li>
                            </ul>
                        </TextContainerResp>

                        <hr />

                        <form className="admin-form" onSubmit={handleSubmit(sendCannoliData)}>
                            <label htmlFor="cannoli_name">
                                Cannolinaam:
                                <input
                                    type="text"
                                    id="cannoli_name"
                                    {...register("cannoli_name", {required: { value: true, message: message } })}
                                    placeholder="cannoli_naam"
                                />
                            </label>
                            {errors.cannoli_name && <p>{errors.cannoli_name.message}</p>}
                            <br/>

                            <label htmlFor="cannoli-type">
                                Cannoli-soort:
                                <select
                                    id="cannoli-type"
                                    {...register("cannoli_type", { required: { value: true, message: message } })}
                                    placeholder="cannoli-soort"
                                >
                                    <option value="Snack">Snack</option>
                                    <option value="Glutenfree">Glutenfree</option>
                                    <option value="Vegan">Vegan</option>
                                </select>
                            </label>
                            {errors.cannoli_type && <p>{errors.cannoli_type.message}</p>}
                            <br/>

                            <label htmlFor="cannoli-description">
                                Omschrijving:
                                <textarea
                                    // type="text"
                                    id="cannoli-description"
                                    rows="8"
                                    cols="50"
                                    {...register("cannoli_description", { required: { value: false, message: message }})}
                                    placeholder="Bijv. Italiaanse koek gevuld met cremige vulling."
                                />
                            </label>
                            {errors.cannoli_description && <p>{errors.cannoli_description.message}</p>}
                        <br/>

                        <label htmlFor="cannoli-ingredients">
                                Ingrediënten:
                                <textarea
                                    // type="text"
                                    id="cannoli-ingredients"
                                    rows="8"
                                    cols="50"
                                    {...register("cannoli_ingredients", { required: { value: false, message: message } })}
                                    placeholder="Bijv. Room, suiker, tiramisu-créme..."
                                />
                        </label>
                        {errors.cannoli_ingredients && <p>{errors.cannoli_ingredients.message}</p>}
                        <br/>

                        <label htmlFor="cannoli-price">
                            Prijs:
                            <input
                                type="text"
                                id="cannoli_price"
                                {...register("cannoli_price", { required: { value: true, message: message } })}
                                placeholder="prijs"
                            />
                        </label>
                        {errors.cannoli_price && <p>{errors.cannoli_price.message}</p>}
                    <br/>

                        <button type="submit" className="admin-form-savebutton">Opslaan</button>
                    </form>

                    <TextContainerResp>
                        <h2>Cannoli tabel</h2>
                    </TextContainerResp>

                    <div className="admin-table-wrap">
                        <table className="admin-table">
                            <thead>
                            <tr>
                                <th>ID/Artnr.</th>
                                <th>Naam</th>
                                <th>Afbeelding</th>
                                <th>Prijs</th>
                                <th>Omschrijving</th>
                                <th>Ingrediënten</th>
                                <th>Verwijderen</th>
                            </tr>
                            </thead>
                            <tbody className="admin_tbody">

                            {cannolis.map(cannoli => {
                                return <tr key={cannoli.id}>

                                    <td>{cannoli.id}</td>
                                    <td>{cannoli.cannoliName}</td>
                                    <td>{cannoli.image && <img src={cannoli.image.url} alt={cannoli.image.fileName} />}</td>
                                    <td>{cannoli.price}</td>
                                    <td>{cannoli.description}</td>
                                    <td>{cannoli.ingredients}</td>

                                    <td>
                                        <ButtonDelete onClick={() => deleteCannoli(cannoli.id)}/>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}
        </>
    );
}

export default Admin_WholesaleComponent;
