/*
import React, { useContext, useEffect, useState } from 'react';
import {CartContext} from "../../context/CartContext";
import {AuthContext} from "../../context/AuthContext";
import {useFormContext} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import pageImg from "../../assets/img.background/Background cannolis.jpg";
import TextContainer from "../pageLayout/designElement/container/textContainer/TextContainer";
import './CartDeliveryRequest.css'

function CartDeliveryRequestCopie({headerImageHandler, pageTitleHandler}) {

    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('token');

    const [cart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, item) => acc + (item.prijs * item.qty), 0);

    // const [comment, setComment] = useState('');
    const firstname = user.person_firstname;
    const lastname = user.person_lastname;
    const streetName = user.person_street_name;
    const houseNumber = user.person_house_number;
    const houseNumberAdd = user.person_house_number_add;
    const zipcode = user.person_zipcode;
    const city = user.person_city;

    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const navigate= useNavigate();

    const [cannoliListLong, setCannoliList] = useState([])

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    useEffect(() => {
        const formattedList = cart.map(item => ({
            cannoliId: item.artikelnummer,
            amount: item.qty
        }));
        setCannoliList(formattedList);
    }, [cart]);



    async function sendCannoliData(data) {
        try {
            await axios.post (
                `http://localhost:8080/deliveryRequests/create`,
                {
                    orderItems: cannoliListLong,
                    comment: data.remark,
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
                        <h1>Online Order</h1>
                    </TextContainer>
                    <br/>

                    {cart && cart.map((cannoli, index) => {
                        return (
                            <ul key={index} className="shoppingcart-items-order">
                                <div>{cannoli.naam}</div>
                                <div>{cannoli.prijs.toFixed(2)}</div>
                                <div>{cannoli.qty}</div>
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
                        <h5> <Link to={'/userform/:user_id'} exact activeClassName='active-link'><strong><em>Klik hier</em></strong>
                        </Link>voor het invullen en of wijzigen van uw persoongegevens</h5>
                    </div>
                    <br/>


                    <div>
                        <h3>Persoongegevens:</h3>
                    </div>

                    {firstname} {lastname} <br/>
                    {streetName} {houseNumber} {houseNumberAdd} <br/>
                    {zipcode} {city} <br/>

                    <br/>
                    <br/>

                    <form className="form-shoppingcart-order"
                          onSubmit={handleSubmit(sendCannoliData)}>

                        <section>
                            <label htmlFor="remark-field">Opmerking</label>

                            <textarea
                                maxLength={280}
                                name="remark"
                                id="remark-field"
                                // value={comment}
                                // onChange={(e) => setComment(e.target.value)}
                                {...register("remark")}
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
*/
