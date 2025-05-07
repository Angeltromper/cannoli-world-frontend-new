import React, { useContext, useEffect, useState } from 'react';
import {CartContext} from "../../context/CartContext";
import {AuthContext} from "../../context/AuthContext";
import {useFormContext} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import pageImg from "../../assets/img.background/Background cannolis.jpg";
import TextContainer from "../pageLayout/designElement/container/textContainer/TextContainer";
import './CartDeliveryRequest.css'



function CartDeliveryRequest({headerImageHandler, pageTitleHandler}) {

    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('token');

    const [cart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    const [comment, setComment] = useState('');
    const {firstname} = useState(user.person_firstname);
    const {lastname} = useState(user.person_lastname);
    const {streetName} = useState(user.person_street_name);
    const {houseNumber} = useState(user.person_house_number);
    const {houseNumberAdd} = useState(user.person_house_number_add);
    const {zipcode} = useState(user.person_zipcode);
    const {city} = useState(user.person_city);

    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "..veld is verplicht";
    const navigate= useNavigate();

    const [cannoliListLong, setCannoliListLong] = useState([])

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);


    useEffect(() => {
        setCannoliListLong (cart.map (cannoli => {
            return cannoli.artikelnummer
        }))
    }, [cart])

    async function sendCannoliData(e) {
        try {
            await axios.post (
                `http://localhost:8080/deliveryRequests/create`,
                {
                    cannoliList: cannoliListLong,
                    comment: comment,
                    applier: user.person_id
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${ token }`
                    }
                }).then(addedDeliveryRequest)
        } catch (e) {
            console.error(e.message)
        }
    }

    function addedDeliveryRequest() {
        navigate(`/deliveryRequests`)
    }

    return (
        <div>
            <section className="shoppingcart-layout-menu">
                <section>
                    <TextContainer>
                        <h1>Order checkout</h1>
                    </TextContainer>
                    <br/>

                    {cart && cart.map((cannoli, index) => {
                        return (
                            <ul key={index}>

                                <div className="shoppingcart-items-order">
                                    <div>
                                        {cannoli.naam}
                                    </div>
                                    <div>
                                        € {cannoli.prijs}
                                    </div>
                                </div>
                            </ul>
                        )
                    })}
                    <br/>

                    <div className="shoppingcart-price-order">
                        <h3><strong>Totaal prijs: € {totalPrice.toFixed(2)} </strong></h3>
                    </div>

                    <br/>

                    <div className="naw-deliveryRequest">
                        <h5> *Controleer of uw persoongegevens juist zijn ingevuld.</h5>
                    </div>
                    <br/>

                    <div className="naw-deliveryRequest-information">
                       <h5> <Link to={'/users/:user_id'} exact activeClassName='active-link'><strong><em>Klik hier</em></strong>
                           </Link>voor het invullen van uw persoongegevens</h5>
                    </div>

                    <br/>
                    <br/>

                    <div>
                        <h3>Gebruikersgegevens:</h3>
                    </div>

                    {firstname} {lastname}  <br/>
                    {streetName} {houseNumber} {houseNumberAdd} <br/>
                    {zipcode} {city} <br/>

                    <br/>

                    <form className="form-shoppingcart-order"
                          onSubmit={handleSubmit(sendCannoliData)}>

                        <section>
                            <label htmlFor="remark-field">Opmerking</label>

                            <textarea
                                maxLength={280}
                                name="remark"
                                id="remark-field"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={8}
                                cols={50}
                                placeholder="Voor vragen en opmerkingen kunt u hier een reactie achterlaten"
                            />
                        </section>

                        <br/>
                        <button type="submit">Verzend</button>
                    </form>
                </section>
            </section>
        </div>
    )
}

export default CartDeliveryRequest;
