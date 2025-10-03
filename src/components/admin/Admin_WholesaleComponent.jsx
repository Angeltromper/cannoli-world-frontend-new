import  { useContext, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import TextContainerResp from "../pageLayout/designElement/container/textContainerResp/TextContainerResp";
import ButtonDelete from "../button/ButtonDelete";
import './Admin_WholesaleComponent.css';
import pageImg from "../../assets/background-cannoli-glutenfree.jpg";

function Admin_WholesaleComponent({headerImageHandler, pageTitleHandler}) {

    const { register, formState: { errors }, handleSubmit } = useFormContext();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [cannolis, setCannolis] = useState([]);
    const message = ".. veld is verplicht";

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler("Cannolis toevoegen");
    }, [headerImageHandler, pageTitleHandler]);

    async function sendCannoliData(data) {
        try {
            const payload = {
                id: data.cannoli_id,
                cannoliName: data.cannoli_name,
                cannoliType: data.cannoli_type,
                description: data.cannoli_description,
                ingredients: data.cannoli_ingredients,
                price: data.cannoli_price,
            };

            await axios.post("http://localhost:8080/cannolis/",
                payload,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
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
    }, [token]);

    async function deleteCannoli(cannoliId) {
        try {
            await axios.delete(`http://localhost:8080/cannolis/delete/${cannoliId}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            setCannolis(prev => prev.filter(cannoli=> cannoli.id !== cannoliId));
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
                    <TextContainerResp className="admin-intro">
                        <ul className="admin-form-text">
                            <li><i>Cannoli-product toevoegen</i>
                                <p>Open het assortiment → kies product → <b>Wijzig product</b> → pas tekst/prijs aan → <b>Opslaan</b>.</p>
                            </li>
                            <li><i>Nieuw product</i>
                                <p>Vul het formulier in en laat het artikelnummer leeg. Na opslaan kun je een afbeelding toevoegen.</p>
                            </li>
                            <li><i>Prijs</i>
                                <p>Gebruik een punt als decimaal, bijv. <code>1.25</code>.</p>
                            </li>
                            <li><i>Foto toevoegen / wijzigen</i>
                                <p>Ga via de <b>(i)</b>-knop naar de productdetailpagina → <b>Wijzig afbeelding</b> → kies bestand → <b>Uploaden</b>.</p>
                            </li>

                        </ul>
                    </TextContainerResp>

                    <hr className="admin-divider" aria-hidden="true"/>

                    <form className="admin-form" onSubmit={handleSubmit(sendCannoliData)}>
                        <label htmlFor="cannoli_name">
                            Cannolinaam:
                            <input
                                id="cannoli_name"
                                type="text"
                                {...register("cannoli_name", {required: { value: true, message } })}
                                placeholder={errors.cannoli_name ? message : "cannoli_naam"}
                                className={errors.cannoli_name ? "field is-error" : "field"}
                                aria-invalid={!!errors.cannoli_name}
                            />
                        </label>

                        <label htmlFor="cannoli-type">
                            Cannoli-soort:
                            <select
                                id="cannoli-type"
                                defaultValue=""
                                {...register("cannoli_type", { required: { value: true, message } })}
                                className={errors.cannoli_type ? "field is-error" : "field"}
                                aria-invalid={!!errors.cannoli_type}
                            >
                               <option value="" disabled hidden>
                                   {errors.cannoli_type ? message : "Maak een keuze"}
                               </option>
                                <option value="Snack">Snack</option>
                                <option value="Glutenfree">Glutenfree</option>
                                <option value="Vegan">Vegan</option>
                            </select>
                        </label>

                        <label htmlFor="cannoli-description">
                            Omschrijving:
                            <textarea
                                id="cannoli-description"
                                rows="8"
                                {...register("cannoli_description", { required: { value: true, message }})}

                                placeholder={errors.cannoli_description ? message : "Bijv. Italiaanse koek gevuld met cremige vulling."}
                                className={errors.cannoli_description ? "field is-error" : "field"}
                                aria-invalid={!!errors.cannoli_description}
                            />
                        </label>

                        <label htmlFor="cannoli-ingredients">
                            Ingrediënten:
                            <textarea
                                id="cannoli-ingredients"
                                rows="8"
                                {...register("cannoli_ingredients", { required: { value: true, message } })}

                                placeholder={errors.cannoli_ingredients ? message : "Bijv. Room, suiker, tiramisu-créme..."}
                                className={errors.cannoli_ingredients ? "field is-error" : "field"}
                                aria-invalid={!!errors.cannoli_ingredients}
                            />
                        </label>

                        <label htmlFor="cannoli_price">
                            Prijs:
                            <input
                                type="text"
                                id="cannoli_price"
                                {...register("cannoli_price", { required: { value: true, message } })}
                                placeholder={errors.cannoli_price ? message : "prijs"}
                                className={errors.cannoli_price ? "field is-error" : "field"}
                                aria-invalid={!!errors.cannoli_price}
                            />
                        </label>

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

                            <tbody>
                            {cannolis.map((cannoli) => (
                                <tr key={cannoli.id}>
                                    <td data-label="ID/Artnr.">{cannoli.id}</td>
                                    <td data-label="Naam">{cannoli.cannoliName}</td>

                                    <td data-label="Afbeelding" className="cell-image">
                                        {cannoli.image && (
                                            <img
                                                className="admin-thumb"
                                                src={cannoli.image.url}
                                                alt={cannoli.image.fileName || `Afbeelding van ${cannoli.cannoliName}`}
                                                loading="lazy" />
                                        )}
                                    </td>

                                    <td data-label="Prijs" className="price">
                                        {cannoli.price}
                                    </td>

                                    <td data-label="Omschrijving" className="cell-text">
                                        {cannoli.description}
                                    </td>

                                    <td data-label="Ingrediënten" className="cell-text">
                                        {cannoli.ingredients}
                                    </td>

                                    <td data-label="Verwijderen" className= "cell-delete">
                                        <ButtonDelete onClick={() => deleteCannoli(cannoli.id)} />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}
        </>
    );
}

export default Admin_WholesaleComponent;
