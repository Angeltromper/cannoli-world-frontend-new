import React, { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import TextContainerResp from "../pageLayout/designElement/container/textContainerResp/TextContainerResp";
import Column from "../pageLayout/designElement/column/Column";
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
            await axios.post("http://localhost:8080/cannolis/create", {
                id: data.cannoli_id,
                cannoliName: data.cannoli_name,
                cannoliType: data.cannoli_type,
                description: data.cannoli_description,
                ingredients: data.cannoli_ingredients,
                price: data.cannoli_price
            });
            navigate("/cannoli-assorti/");
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchCannolis = async () => {
            try {
                const response = await axios.get("http://localhost:8080/cannolis/", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                setCannolis(response.data);
            } catch (error) {
                console.error('Fout bij ophalen:', error);
            }
        };

        fetchCannolis();
    }, []);


    async function deleteCannoli(id) {
        try {
            await axios.delete(`http://localhost:8080/cannolis/delete/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            setTimeout(() => navigate("/cannolis-add/"), 600);
        } catch (error) {
            console.error(error);
        }
    }

    { user.roles !== 'ROLE_ADMIN'
        return (
            <div className="admin-route-container">
                <div className="admin-route">
                    <h3>U moet zijn ingelogd als<br />ADMINISTRATOR<br />om deze gegevens te beheren</h3>
                </div>
            </div>
        );
    }


    return (
        <section className="Admin-Form-container">
            <TextContainerResp>
                <h3>Cannoli toevoegen/wijzigen:</h3>
                <h5>Voeg nieuwe producten toe of wijzig bestaande cannoli-artikelen.</h5>
                <ul className="admin-form-text">
                    <li><i>Cannoli-product wijzigen</i><p>Gebruik bestaand artikelnummer.</p></li>
                    <li><i>Nieuw product</i><p>Nieuw artikelnummer wordt automatisch aangemaakt.</p></li>
                    <li><i>Prijsformaat</i><p>Gebruik punt i.p.v. komma (bv. 1.75).</p></li>
                    <li><i>Foto toevoegen</i><p>Gebruik de (i) knop op de productenpagina.</p></li>
                </ul>
            </TextContainerResp>

            <hr />


            <form className="admin-cannoli-form" onSubmit={handleSubmit(sendCannoliData)}>
                <Column>
                    <label>
                        Cannolinaam:
                        <input
                            type="text"
                            {...register("cannoli_name", { required: { value: true, message } })}
                            placeholder="cannoli-naam"
                        />
                        {errors.cannoli_name && <p>{errors.cannoli_name.message}</p>}
                    </label>

                    <label>
                        Soort:
                        <select {...register("cannoli_type", { required: { value: true, message } })}>
                            <option value="Cannoli Snack">Cannoli Snack</option>
                            <option value="Cannoli Glutenfree">Cannoli Glutenfree</option>
                            <option value="Cannoli Vegan">Cannoli Vegan</option>
                            <option value="Giftbox">Giftbox</option>
                        </select>
                        {errors.cannoli_type && <p>{errors.cannoli_type.message}</p>}
                    </label>
                </Column>

                <Column>
                    <label>
                        Omschrijving:
                        <textarea
                            rows="5"
                            {...register("cannoli_description")}
                            placeholder="Omschrijving van de cannoli"
                        />
                        {errors.cannoli_description && <p>{errors.cannoli_description.message}</p>}
                    </label>

                    <label>
                        Ingrediënten:
                        <textarea
                            rows="5"
                            {...register("cannoli_ingredients")}
                            placeholder="Ingrediënten van de cannoli"
                        />
                        {errors.cannoli_ingredients && <p>{errors.cannoli_ingredients.message}</p>}
                    </label>
                </Column>

                <Column>
                    <label>
                        Prijs:
                        <input
                            type="text"
                            {...register("cannoli_price", { required: { value: true, message } })}
                            placeholder="prijs"
                        />
                        {errors.cannoli_price && <p>{errors.cannoli_price.message}</p>}
                    </label>

                    <button type="submit" className="cannoli-form-savebutton">Opslaan</button>
                </Column>
            </form>

            <TextContainerResp>
                <h2>Cannoli tabel</h2>
            </TextContainerResp>

            <div className="Admin_WholesaleComponent">
                <table>
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
                    {cannolis.map(cannoli => (
                        <tr key={cannoli.id}>
                            <td>{cannoli.id}</td>
                            <td>{cannoli.cannoliName}</td>
                            <td>{cannoli.image && <img src={cannoli.image.url} alt={cannoli.image.fileName} />}</td>
                            <td>{cannoli.price}</td>
                            <td>{cannoli.description}</td>
                            <td>{cannoli.ingredients}</td>
                            <td>
                                <button className="delete-button" onClick={() => deleteCannoli(cannoli.id)}>
                                    <ButtonDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Admin_WholesaleComponent;
