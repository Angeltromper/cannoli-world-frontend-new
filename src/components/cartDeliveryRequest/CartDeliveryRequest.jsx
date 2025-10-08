import  { useContext, useEffect } from 'react';
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { useFormContext } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import pageImg from "../../assets/background cannolis.jpg";
import './CartDeliveryRequest.css';

function CartDeliveryRequest({ headerImageHandler, pageTitleHandler }) {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('token');

    const { cart, clearCart } = useContext(CartContext);
    const totalPrice = cart.reduce((acc, item) => acc + (Number(item.prijs) || 0) * (Number(item.qty) || 0), 0);
    const { register, handleSubmit, reset } = useFormContext();
    const navigate = useNavigate();

    const firstname = user.person_firstname;
    const lastname = user.person_lastname;
    const streetName = user.person_street_name;
    const houseNumber = user.person_house_number;
    const houseNumberAdd = user.person_house_number_add;
    const zipcode = user.person_zipcode;
    const city = user.person_city;

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Online Order");
    }, [headerImageHandler, pageTitleHandler]);

    async function sendCannoliData(data) {
        try {
            const items = cart.map(it => ({
                cannoliId: it.artikelnummer,
                quantity: Number(it.qty) || 0,
            }));

            await axios.post(
                `http://localhost:8080/deliveryRequests/create`,
                {
                    comment: data.remark ?? "", items },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );

            clearCart();
            reset({ remark: '' });
            navigate(`/deliveryRequests`);
        } catch (e) {
            console.error(e);
            alert('Verzenden mislukt. Probeer opnieuw of neem contact op.');
        }
    }

    return (
        <div>
            <section className="shoppingcart-layout-menu">
                <section>
                    <div className="order-table-wrap">
                        <table className="shoppingcart-table">
                            <thead>
                            <tr>
                                <th>Cannoli</th>
                                <th>Prijs</th>
                                <th>Aantal</th>
                                <th>Subtotaal</th>
                            </tr>
                            </thead>
                            <tbody>
                            {cart.map((cannoli, index) => {
                                const price = Number(cannoli.prijs) || 0;
                                const qty = Number(cannoli.qty) || 0;
                                return (
                                    <tr key={`${cannoli.artikelnummer}-${index}`}>
                                        <td data-label="Cannoli"> {cannoli.naam}</td>
                                        <td data-label="Prijs">€ {price.toFixed(2)}</td>
                                        <td data-label="Aantal"> {qty}</td>
                                        <td data-label="Subtotaal">€ {(price * qty).toFixed(2)}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>

                    <div className="order-total-row">
                        <span className="order-total-label">Totaal prijs:</span>
                        <span className="order-total-amount">€ {totalPrice.toFixed(2)}</span>
                    </div>

                    <br />

                    <div className="naw-deliveryRequest">
                        <h5>*Controleer of uw persoonsgegevens juist zijn ingevuld.</h5>
                    </div>

                    <br />

                    <div className="naw-deliveryRequest-information">
                        <h5>
                            <Link to={'/userform/:user_id'}>
                                <strong><em>Klik hier</em></strong>
                            </Link> voor het invullen en/of wijzigen van uw persoonsgegevens
                        </h5>
                    </div>

                    <br />

                    <div><h3>Persoonsgegevens:</h3></div>
                    {firstname} {lastname} <br />
                    {streetName} {houseNumber} {houseNumberAdd} <br />
                    {zipcode} {city} <br />

                    <br /><br />

                    <form className="form-shoppingcart-order" onSubmit={handleSubmit(sendCannoliData)}>
                        <section>
                            <label htmlFor="remark-field">Opmerking</label>
                            <textarea
                                maxLength={280}
                                id="remark-field"
                                {...register("remark")}
                                rows={8}
                                cols={50}
                                placeholder="Voor vragen en opmerkingen kunt u hier een reactie achterlaten"
                            />
                        </section>

                        <br />
                        <button type="submit">Verzend</button>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default CartDeliveryRequest;
