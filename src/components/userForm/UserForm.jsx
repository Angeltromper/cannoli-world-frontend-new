import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import pageImg from "../../assets/background cannolis.jpg";
import "./UserForm.css";

axios.defaults.baseURL = "http://localhost:8080";

function UserForm({ headerImageHandler }) {
    const { register, formState: { errors }, handleSubmit } = useFormContext();
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    const message = "...dit veld is verplicht";

    useEffect(() => {
        headerImageHandler(pageImg);
    }, [headerImageHandler]);

    async function sendPersonData(form) {
        const payload = {
            personFirstname:      form.person_firstname,
            personLastname:       form.person_lastname,
            personStreetName:     form.person_street_name,
            personHouseNumber:    form.person_house_number,
            personHouseNumberAdd: form.person_house_number_add,
            personCity:           form.person_city,
            personZipcode:        form.person_zipcode,
        };

        const t = localStorage.getItem("token");
        if (t) axios.defaults.headers.common.Authorization = `Bearer ${t}`;

        const { data: updated } = await axios.put("/persons/me", payload, {
            headers: { "Content-Type": "application/json" },
        });

        setUser(prev => ({
            ...(prev || {}),
            person_id:               updated.id ?? null,
            person_firstname:        updated.personFirstname ?? "",
            person_lastname:         updated.personLastname ?? "",
            person_street_name:      updated.personStreetName ?? "",
            person_house_number:     updated.personHouseNumber ?? "",
            person_house_number_add: updated.personHouseNumberAdd ?? "",
            person_zipcode:          updated.personZipcode ?? "",
            person_city:             updated.personCity ?? "",
        }));
    }

    async function onSubmit(personData) {
        try {
            await sendPersonData(personData);
            navigate("/profile", { replace: true });
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
                <h4>U kunt hier uw persoonsgegevens wijzigen/aanpassen</h4>

                <div className="form-naw-user">
                    <label htmlFor="firstname">
                        Voornaam:
                        <input
                            type="text"
                            id="firstname"
                            {...register("person_firstname", { required: { value: true, message } })}
                            placeholder="Voornaam"
                        />
                    </label>
                    {errors.person_firstname && <p className="form-error">{errors.person_firstname.message}</p>}

                    <label htmlFor="lastname">
                        Achternaam
                        <input
                            type="text"
                            id="lastname"
                            {...register("person_lastname", { required: { value: true, message } })}
                            placeholder="Achternaam"
                        />
                    </label>
                    {errors.person_lastname && <p className="form-error">{errors.person_lastname.message}</p>}

                    <label htmlFor="streetname">
                        Straatnaam
                        <input
                            type="text"
                            id="streetname"
                            {...register("person_street_name", { required: { value: true, message } })}
                            placeholder="Straatnaam"
                        />
                    </label>
                    {errors.person_street_name && <p className="form-error">{errors.person_street_name.message}</p>}

                    <label htmlFor="housenumber">
                        Huisnummer
                        <input
                            type="text"
                            id="housenumber"
                            {...register("person_house_number", { required: { value: true, message } })}
                            placeholder="Huisnummer"
                        />
                    </label>
                    {errors.person_house_number && <p className="form-error">{errors.person_house_number.message}</p>}

                    <label htmlFor="housenumberadd">
                        Toevoeging
                        <input
                            type="text"
                            id="housenumberadd"
                            {...register("person_house_number_add")}
                            placeholder="Toevoeging"
                        />
                    </label>
                    {errors.person_house_number_add && <p className="form-error">{errors.person_house_number_add.message}</p>}

                    <label htmlFor="zipcode">
                        Postcode
                        <input
                            type="text"
                            id="zipcode"
                            {...register("person_zipcode", { required: { value: true, message } })}
                            placeholder="Postcode"
                        />
                    </label>
                    {errors.person_zipcode && <p className="form-error">{errors.person_zipcode.message}</p>}

                    <label htmlFor="city">
                        Woonplaats
                        <input
                            type="text"
                            id="city"
                            {...register("person_city", { required: { value: true, message } })}
                            placeholder="Woonplaats"
                        />
                    </label>
                    {errors.person_city && <p className="form-error">{errors.person_city.message}</p>}
                </div>

                <button className="button__userform" type="submit">Opslaan</button>
            </form>
        </div>
    );
}

export default UserForm;
