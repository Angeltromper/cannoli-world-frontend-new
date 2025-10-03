import  { useContext, useEffect } from "react";
import pageImg from "../../assets/background cannolis.jpg";
import { generatePath, matchPath, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import TextContainerResp from "../pageLayout/designElement/container/textContainerResp/TextContainerResp";
import "./Admin_WholesaleComponent.css";

function Admin_WholesaleEditComponent({headerImageHandler, pageTitleHandler}) {
    const { user } = useContext(AuthContext);
    const { cannoli_id } = useParams();
    const location = useLocation();
    const { register, formState: { errors }, handleSubmit,reset, getValues } = useFormContext();
    const message = "..veld is verplicht";
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler("Cannolis wijzigen");
    }, [headerImageHandler, pageTitleHandler]);


    useEffect(() => {
        const current = getValues();
        reset({ ...current, cannoli_id });
    }, [cannoli_id, reset, getValues]);

    const detailPath = generatePath("/wholesale/:cannoli_id", { cannoli_id });
    const backTo =
        typeof location.state?.from === "string" &&
        matchPath("/wholesale/:cannoli_id", location.state.from)
            ? location.state.from
            : detailPath;


    async function sendCannoliData(data) {
        try {
            await axios.put(
                `http://localhost:8080/cannolis/${cannoli_id}`,
                {
                    id: data.cannoli_id,
                    cannoliName: data.cannoli_name,
                    cannoliType: data.cannoli_type,
                    description: data.cannoli_description,
                    ingredients: data.cannoli_ingredients,
                    price: data.cannoli_price,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                }
            );
            navigate(backTo, {replace: true});
        } catch (error) {
            console.error(error);
        }
    }

    if (user?.roles !== "ROLE_ADMIN") {
        return (
            <div className="admin-container">
                <div className="admin-warning">
                    <h3>
                        U moet zijn ingelogd als<br />ADMINISTRATOR<br />om deze gegevens te beheren
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <section className="admin-container">
            <TextContainerResp className="admin-intro">
                <h2>Cannoli toevoegen/wijzigen:</h2>
                <ul className="admin-form-text">
                    <li><span><strong>Product wijzigen</strong></span>
                        <span>Pas velden aan en klik <b>Opslaan</b>. Het artikelnummer is niet wijzigbaar.</span></li>
                    <li><span><strong>Prijsnotatie</strong></span>
                        <span>Gebruik een punt (.) als decimaal, bv. <code>1.25</code>.</span></li>
                    <li><span><strong>Foto</strong></span>
                        <span>Op de productdetailpagina: <b>Wijzig afbeelding</b> → kies bestand → <b>Uploaden</b>.</span></li>
                </ul>
            </TextContainerResp>

            <form className="admin-form" onSubmit={handleSubmit(sendCannoliData)}>
                <label htmlFor="cannoli_id">
                   Artikelnummer:
                   <input
                       id="cannoli_id"
                       type="text"
                       readOnly
                       {...register("cannoli_id")}
                   />
                </label>


                <label htmlFor="cannoli_name">
                    Cannolinaam:
                    <input
                        type="text"
                        id="cannoli_name"
                        {...register("cannoli_name", { required: { value: true, message } })}
                        placeholder="cannoli-naam"
                    />
                </label>
                {errors.cannoli_name && <p>{errors.cannoli_name.message}</p>}

                <label htmlFor="cannoli_type">
                    Cannoli-soort:
                    <select
                        id="cannoli_type"
                        {...register("cannoli_type", { required: { value: true, message } })}
                    >
                        <option value="Snack">Snack</option>
                        <option value="Glutenfree">Glutenfree</option>
                        <option value="Vegan">Vegan</option>
                    </select>
                </label>
                {errors.cannoli_type && <p>{errors.cannoli_type.message}</p>}

                <label htmlFor="cannoli_description">
                    Omschrijving:
                    <textarea
                        id="cannoli_description"
                        rows={8}
                        {...register("cannoli_description", { required: { value: true, message } })}

                        placeholder="Bv. Italiaanse koek gevuld met cremige vulling."
                    />
                </label>
                {errors.cannoli_description && <p>{errors.cannoli_description.message}</p>}

                <label htmlFor="cannoli_ingredients">
                    Ingrediënten:
                    <textarea
                        id="cannoli_ingredients"
                        rows={8}
                        {...register("cannoli_ingredients", { required: { value: true, message } })}

                        placeholder="Bv. Room, suiker, tiramisu-créme..."
                    />
                </label>
                {errors.cannoli_ingredients && <p>{errors.cannoli_ingredients.message}</p>}

                <label htmlFor="cannoli_price">
                    Prijs:
                    <input
                        inputMode="decimal"
                        type="text"
                        id="cannoli_price"
                        {...register("cannoli_price", { required: { value: true, message } })}
                        placeholder="Bv. 1.75"
                    />
                </label>
                {errors.cannoli_price && <p>{errors.cannoli_price.message}</p>}

                <button type="submit" className="admin-form-savebutton">Opslaan</button>
            </form>
        </section>
    );
}

export default Admin_WholesaleEditComponent;
