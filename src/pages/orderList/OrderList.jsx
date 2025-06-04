import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import './OrderList.css';

function OrderList() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { user: { username } } = useContext(AuthContext);
    const [deliveryRequests, setDeliveryRequests] = useState([]);

    // Haal bestellingen op
    useEffect(() => {
        fetchDeliveryRequests();
        // eslint-disable-next-line
    }, []);

    async function fetchDeliveryRequests() {
        try {
            const response = await axios.get(`http://localhost:8080/deliveryRequests/all`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            setDeliveryRequests(response.data);
        } catch (error) {
            console.error('Fout bij ophalen bestellingen:', error);
        }
    }

    async function deleteDeliveryRequest(id) {
        try {
            await axios.delete(`http://localhost:8080/deliveryRequests/delete/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            fetchDeliveryRequests();
        } catch (error) {
            console.error('Fout bij verwijderen bestelling:', error);
        }
    }

    return (
        <>
            <TextContainer>
                <h2>Bestellijst</h2>
            </TextContainer>

            <section className="orderlist-container">
                <h4>Overzicht status bestellijst</h4>
                <h5>
                    Voor meer informatie over bezorging kunt u hier de status bekijken van de voortgang van de bestelling.
                </h5>
                <br/>

                <div className="orderlist-deliver">
                    <p><strong>*AVAILABLE:</strong> De bestelling is beschikbaar voor bezorging.</p>
                    <p><strong>*CONFIRMED:</strong> De bestelling is ontvangen en wordt verwerkt.</p>
                    <p><strong>*FINISHED:</strong> De bestelling is verwerkt en bezorgd.</p>
                </div>

                <table className="orderlist-table">
                    <thead>
                    <tr>
                        <th>Overzicht</th>
                        <th>Status</th>
                        <th>ID</th>
                        <th>Naam</th>
                        <th>Adres</th>
                        <th>Verwijderen</th>
                    </tr>
                    </thead>
                    <tbody>
                    {deliveryRequests.map((request, index) => (
                        <tr key={index}>
                            <td>
                                <button className="orderlist-page-menu" onClick={() => navigate(`${request.id}`)}>
                                    Bekijk
                                </button>
                            </td>
                            <td>{request.status}</td>
                            <td>{request.id}</td>
                            <td>
                                {request.applier.personFirstname} {request.applier.personLastname}
                            </td>
                            <td>
                                {request.applier.personStreetName} {request.applier.personHouseNumber} {request.applier.personHouseNumberAdd}<br />
                                {request.applier.personZipcode} {request.applier.personCity}
                            </td>
                            <td>
                                <button className="delete-button" onClick={() => deleteDeliveryRequest(request.id)}>
                                    Verwijder
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default OrderList;
