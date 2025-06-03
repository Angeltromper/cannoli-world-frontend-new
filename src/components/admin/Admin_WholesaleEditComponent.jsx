import React, { useContext, useEffect } from 'react';
import pageImg from './../../assets/img.background/background cannolis.jpg';
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import Button from "../button/Button";
import './Admin_WholesaleEditComponent.css';

function Admin_WholesaleEditComponent({ headerImageHandler, pageTitleHandler }) {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useFormContext();
    const navigate = useNavigate();
    const message = "..veld is verplicht";

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    async function sendCannolis(data) {
        try {
            await axios.put(`http://localhost:8080/cannolis/${id}`,
                {
                    id: data.id,
                    cannoliName: data.cannoli_name,
                    cannoliType: data.cannoli_type,
                    description: data.cannoli_description,
                    ingredients: data.cannoli_ingredients,
                    price: data.cannoli_price
                }, {
                    headers: {
                        'Content-Type': "application/json",
                    }
                }).then(() => navigate(`/cannoli-assorti`));
        } catch (error) {
            console.error(error);
        }
    }

    if (user.roles !== 'ROLE_ADMIN') {
        return (
            <div className="admin-info-container">
                <div className="admin-info">
                    <h3>
                        U moet zijn ingelogd als<br />
                        <strong>ADMINISTRATOR</strong><br />
                        om dit onderdeel te kunnen gebruiken.
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div className="cannoli-form-container">
            <div className="cannoli-form-instructions">
                <ul>
                    <li><strong>Cannoli-product wijzigen:</strong> Gebruik bestaand artikelnummer.</li>
                    <li><strong>Nieuw product:</strong> Laat veld leeg; artikelnummer wordt automatisch aangemaakt.</li>
                    <li><strong>Prijsnotatie:</strong> Gebruik een punt (.) i.p.v. komma (bv. 1.75).</li>
                </ul>
            </div>

            <form className="cannoli-form" onSubmit={handleSubmit(sendCannolis)}>
                <label>
                    Artikelnummer:
                    <input
                        type="text"
                        {...register("id", { required: true })}
                        placeholder={id}
                    />
                    {errors.id && <p>{message}</p>}
                </label>

                <label>
                    Cannolinaam:
                    <input
                        type="text"
                        {...register("cannoli_name", { required: true })}
                        placeholder="Cannolinaam"
                    />
                    {errors.cannoli_name && <p>{errors.cannoli_name.message}</p>}
                </label>

                <label>
                    Cannolitype:
                    <select {...register("cannoli_type", { required: true })}>
                        <option value="">-- Kies een type --</option>
                        <option value="Cannoli Snack">Cannoli Snack</option>
                        <option value="Cannoli Glutenfree">Cannoli Glutenfree</option>
                        <option value="Cannoli Vegan">Cannoli Vegan</option>
                    </select>
                    {errors.cannoli_type && <p>{errors.cannoli_type.message}</p>}
                </label>

                <label>
                    Omschrijving:
                    <textarea
                        rows="4"
                        {...register("cannoli_description")}
                        placeholder="Bijv. Italiaanse koek gevuld met cremige vulling."
                    />
                    {errors.cannoli_description && <p>{errors.cannoli_description.message}</p>}
                </label>

                <label>
                    Ingrediënten:
                    <textarea
                        rows="4"
                        {...register("cannoli_ingredients")}
                        placeholder="Bijv. Room, suiker, tiramisu-créme..."
                    />
                    {errors.cannoli_ingredients && <p>{errors.cannoli_ingredients.message}</p>}
                </label>

                <label>
                    Prijs:
                    <input
                        type="text"
                        {...register("cannoli_price", { required: true })}
                        placeholder="Bijv. 1.75"
                    />
                    {errors.cannoli_price && <p>{errors.cannoli_price.message}</p>}
                </label>

                <div className="cannoli-form-saveButton">
                    <Button />
                </div>
            </form>
        </div>
    );
}

export default Admin_WholesaleEditComponent;
