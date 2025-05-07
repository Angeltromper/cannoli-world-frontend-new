/*
import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./../../components/button/Button";
import './Order_ListComponent.css';

function OrderListpage() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [deliveryRequests, setDeliveryRequests] = useState([]);


    async function deleteDeliveryRequest(id) {
        try {
            await axios.delete(`http://localhost:8080/deliveryRequests/delete/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        async function fetchDeliveryRequest() {
            try {
                const response = await axios.get(`http://localhost:8080/deliveryRequests/all`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setDeliveryRequests(response.data);
            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchDeliveryRequest().then ();
    }, [deliveryRequests]);

    function redirect(deliveryRequest) {
        navigate(`deliveryRequests/${deliveryRequest}`)
    }

    return (
        <>
            <section className="orderlist-container">

                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam cum dignissimos labore
                    quae quo reiciendis repellendus sequi similique unde!
                </h4>
                <br/>

                <h4><i>
                    *AVAILABLE = Beschikbaar voor bezorging<br/>
                    *CONFIRMED = Bestelling opgepakt en bevestigd<br/>
                    *FINISHED = Bestelling bezorgd en afgehandeld
                </i></h4>

                <section className="orderlist-container">

                    <div>
                        <h2>
                            Bestellijst
                        </h2>
                    </div>

                    <br/>
                    <table>
                        <thead>
                        <tr>
                            <th>
                                X
                            </th>
                            <th> -</th>
                            <th>ID/Ordernummer.</th>
                            <th>Naam</th>
                            <th>Achternaam</th>
                            <th>Adres</th>
                            <th>Status</th>
                        </tr>
                        </thead>

                        <tbody className="orderlist_tbody">

                        {deliveryRequests && deliveryRequests.map((deliveryRequest, index) => {
                            return <tr key={ index }>

                                <td>
                                    <div
                                        onClick={() => deleteDeliveryRequest (deliveryRequest.id) }>
                                        <Button/>
                                    </div>
                                </td>

                                <td>
                                    <div className="orderlist-page-view"
                                         onClick={() => redirect (deliveryRequest.id) }>
                                        Overzicht
                                    </div>

                                </td>
                                <td>{ deliveryRequest.id }</td>
                                <td>{ deliveryRequest.applier.personFirstname }</td>
                                <td>{ deliveryRequest.applier.personLastname }</td>
                                <td>{ deliveryRequest.applier.personStreetName } { deliveryRequest.applier.personHouseNumber }
                                    { deliveryRequest.applier.personHouseNumberAdd }
                                    <br/>
                                    <strong> { deliveryRequest.applier.personZipcode } { deliveryRequest.applier.personCity }</strong>
                                </td>
                                <td>
                                    { deliveryRequest.status }
                                </td>
                            </tr>
                        })}

                        </tbody>

                    </table>
                </section>
            </section>

        </>
    )
}

export default OrderListpage;
*/
