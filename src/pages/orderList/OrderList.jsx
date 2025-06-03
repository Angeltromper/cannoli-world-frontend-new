import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import './OrderList.css';

function OrderList() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);
    const [deliveryRequests, setDeliveryRequests] = useState([]);

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

        fetchDeliveryRequest();
    }, [deliveryRequests]);

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

    function redirect(deliveryRequest) {
        navigate(`deliveryRequests/${deliveryRequest}`)
    }

    return (
        <>
            <TextContainer>
                <h2>Bestellijst</h2>
            </TextContainer>

            <section className="orderlist-container">
                


                <h4>Overzicht status bestellijst</h4>
                <h5>Voor meer informatie over bezorging kunt u hier de status bekijken van de voortgang van de bestelling.</h5>
                <br/>

                <div className="orderlist-deliver">
                    <h5><i>*AVAILABLE</i> = De bestelling is beschikbaar voor bezorging.</h5>
                    <h5><i>*CONFIRMED</i> = De bestelling is ontvangen en wordt verwerkt.</h5>
                    <h5><i>*FINISHED</i>  = De bestelling is verwerkt en bezorgt.</h5>
                </div>
                <br/>

                <table>
                    <thead>
                    <tr>
                        <th>Bestelling</th>
                        <th>Status</th>
                        <th>ID/Ordernr.</th>
                        <th>Naam</th>
                        <th>Achternaam</th>
                        <th>Adres</th>
                        <th>Verwijderen</th>
                    </tr>
                    </thead>

                    <tbody className="orderlist_body">
                            {deliveryRequests && deliveryRequests.map((deliveryRequest, index) => {
                                return <tr key={ index }>
                                    <td>
                                        <div className="orderlist-page-menu"
                                             onClick={() => navigate(`${deliveryRequest.id}`)}>
                                            Overzicht
                                        </div>
                                    </td>

                                    <td>{ deliveryRequest.status }</td>
                                    <td>{ deliveryRequest.id }</td>
                                    <td>{ deliveryRequest.applier.personFirstname } </td> <td>{ deliveryRequest.applier.personLastname }</td>
                                    <td>{ deliveryRequest.applier.personStreetName } { deliveryRequest.applier.personHouseNumber } { deliveryRequest.applier.personHouseNumberAdd }<br/>
                                        { deliveryRequest.applier.personZipcode } { deliveryRequest.applier.personCity }</td>

                                    <td>
                                        <div className="delete-button"
                                             onClick={() => deleteDeliveryRequest (deliveryRequest.id)}>
                                            Verwijder
                                        </div>
                                    </td>
                                </tr>
                            })}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default OrderList;

