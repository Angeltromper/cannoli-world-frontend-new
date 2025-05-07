import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../button/Button";
import './OrderList.css';

function OrderLists() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const {deliveryRequest_id} = useParams();
    const [deliveryRequests, setDeliveryRequests] = useState([]);



    useEffect(() => {
        async function fetchDeliveryRequest() {
            try {
                const response = await axios.get(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
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
    }, [deliveryRequest_id]);


    function redirect(deliveryRequest) {
        navigate(`/delivery/${deliveryRequest.id}`)
    }


    async function updateStatusConfirm() {
        try {
            await axios.put(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },

                    id: deliveryRequest_id,
                    status: "CONFIRMED"
                }).then(updateStatusClick)
        } catch (error) {
            console.error('There was an error!', error);
        }
    }


    async function updateStatusFinish() {
        try {
            await axios.put(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${ token }`,
                    },
                    id: deliveryRequest_id,
                    status: "FINISHED",
                }).then(updateStatusClick)
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    async function deleteDeliveryRequest() {
        try {
            await axios.delete(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
        } catch (error) {
            console.error('There was an error!', error);
        }
    }


    function updateStatusClick() {
     navigate.go(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,)
    }

    return (
        <>

            <section className="orderlist">
                <div className="orderlist-status">

                    <h4>
                        Hier kunt u de status bekijken <strong>'AVAILABLE'</strong> van een bestelling of deze beschikbaar is en of afgerond is voor bezorging.
                        Hier kunt u de status veranderen naar <strong>'CONFIRMED'</strong> als u de bestelling wilt aannemen en laten bezorgen.
                        Hier kunt u de status veranderen naar <strong>'FINISHED'</strong>  als u de bestelling na bezorging wilt afronden.
                    </h4>

                    <br/>

                    <h4><i>
                        *AVAILABLE = De bestelling is beschikbaar voor bezorging<br/>
                        *CONFIRMED = De bestelling opgepakt en bevestigd<br/>
                        *FINISHED =  De bestelling is bezorgd en afgehandeld</i>
                    </h4>

                    <div className="orderlist-confirm">
                        <button onClick={() => updateStatusConfirm()}> Bestelling bevestigen </button>
                        <button onClick={() => updateStatusFinish()}> Bestelling afronden </button>
                    </div>
                </div>
            </section>

            <br/>

            <section className="orderlist-page">
                {deliveryRequests.applier &&




                }




            </section>




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

                        <tbody className="orderlist-tbody">

                        {deliveryRequests && deliveryRequests.map((deliveryRequest, index) => {
                            return <tr key={ index }>

                                <td>
                                    <div
                                        onClick={() => deleteDeliveryRequest (deliveryRequest.id) }>
                                        <Button/>
                                    </div>
                                </td>

                                <td>
                                    <div className="orderlist-view"
                                         onClick={() => redirect (deliveryRequest.id) }>
                                        Overzicht bestellijst
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
        </>
    )
}

export default OrderLists;
