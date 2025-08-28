import React, { useContext, useEffect } from 'react';
import pageImg from './../../assets/img.background/background cannolis.jpg';
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import './Admin_WholesaleComponent.css';

function Admin_WholesaleEditComponent({ headerImageHandler, pageTitleHandler }) {
    const {user} = useContext(AuthContext);
    const {cannoli_id} = useParams();
    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "..veld is verplicht";
    const navigate = useNavigate();


    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    async function sendCannoliData(data) {
        try {
            await axios.put(`http://localhost:8080/cannolis/${cannoli_id}`,
                {
                    id: data.cannoli_id,
                    cannoliName: data.cannoli_name,
                    cannoliType: data.cannoli_type,
                    description: data.cannoli_description,
                    ingredients: data.cannoli_ingredients,
                    price: data.cannoli_price
                },
                { headers: { 'Content-Type': "application/json",}}
            );
            updatedCannoli();
        } catch (error) {
            console.error(error);
        }
    }

    function updatedCannoli() {
        navigate(`/cannoli-assorti`);
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

             <div className="admin-container">
                 <ul className="admin-form-text">
                     <li><strong>Cannoli-product wijzigen:</strong> Gebruik bestaand artikelnummer.</li>
                     <li><strong>Nieuw product:</strong> Laat veld leeg; artikelnummer wordt automatisch aangemaakt.</li>
                     <li><strong>Prijsnotatie:</strong> Gebruik een punt (.) i.p.v. komma (bv. 1.75).</li>
                 </ul>

                 <form className="admin-form" onSubmit={handleSubmit(sendCannoliData)}>
                     <label htmlFor="cannoli_id">
                         Artikelnummer:
                         <input
                             type="text"
                             id="cannoli_id"
                             {...register("cannoli_id", { required: {value: true, message: message} })}
                             placeholder={cannoli_id}
                         />
                     </label>
                     {errors.cannoli_id && <p>{errors.cannoli_id.message}</p>}
                     <br/>

                     <label htmlFor="cannoli_name">
                         Cannolinaam:
                         <input
                             type="text"
                             id="cannoli_name"
                             {...register("cannoli_name", { required: {value: true, message: message }})}
                             placeholder="cannoli-naam"
                         />
                     </label>
                     {errors.cannoli_name && <p>{errors.cannoli_name.message}</p>}
                     <br/>

                     <label htmlFor="cannoli_type">
                         Cannoli-soort:
                         <select
                             id="cannoli_type"
                             {...register("cannoli_type", { required: {value: true, message: message} })}
                             placeholder="cannoli-soort"
                         >
                             <option value="Snack">Snack</option>
                             <option value="Glutenfree">Glutenfree</option>
                             <option value="Vegan">Vegan</option>
                         </select>
                     </label>
                     {errors.cannoli_type && <p>{errors.cannoli_type.message}</p>}
                     <br/>

                     <label htmlFor="cannoli_description">
                         Omschrijving:
                         <textarea
                             id="cannoli_description"
                             rows="8"
                             {...register("cannoli_description", { required: {value: false, message: message} })}
                             placeholder="Bv. Italiaanse koek gevuld met cremige vulling."
                         />
                     </label>
                     {errors.cannoli_description && <p>{errors.cannoli_description.message}</p>}
                     <br/>

                     <label htmlFor="cannoli_ingredients">
                         Ingrediënten:
                         <textarea
                             id="cannoli_ingredients"
                             rows="8"
                             {...register("cannoli_ingredients", { required: {value: false, message: message} })}
                             placeholder="Bv. Room, suiker, tiramisu-créme..."
                         />
                     </label>
                     {errors.cannoli_ingredients && <p>{errors.cannoli_ingredients.message}</p>}
                     <br/>


                     <label htmlFor="cannoli_price">
                         Prijs:
                         <input
                             type="text"
                             id="cannoli_price"
                             {...register("cannoli_price", { required: {value: true, message: message} })}
                             placeholder="Bv. 1.75"
                         />
                     </label>
                     {errors.cannoli_price && <p>{errors.cannoli_price.message}</p>}
                     <br/>

                     <button type="submit" className="admin-form-savebutton">Opslaan</button>
                 </form>
             </div>
            )}
        </>
    );
}

export default Admin_WholesaleEditComponent;
