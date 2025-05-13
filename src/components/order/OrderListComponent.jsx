import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Order_InfoComponent from "./Order_InfoComponent";
import './Order_ListComponent.css';



function Order_ListComponent() {
    const {deliveryRequest_id} = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
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

        fetchDeliveryRequest();
    }, [deliveryRequest_id]);


    async function updateConfirm() {
        try {
            await axios.put(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },

                    id: deliveryRequest_id,
                    status: "CONFIRMED"
                }).then(updateStatus)
        } catch (error) {
            console.error('There was an error!', error);
        }
    }


    async function updateFinish() {
        try {
            await axios.put(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                         "Authorization": `Bearer ${ token }`,
                    },
                    id: deliveryRequest_id,
                    status: "FINISHED",
                }).then(updateStatus)
        } catch (error) {
            console.error('There was an error!', error);
        }
    }


    function updateStatus() {
     navigate(`/deliveryRequest/${deliveryRequest_id}`)
    }


    return (
        <>
            <div className="orderlist-status-page">
                <h5>Op deze pagina kunt u aangeven of de producten beschikbaar zijn voor levering en het bezorgen daarvan.</h5>

                <h5>
                    'AVAILABLE'= Als de bestelling beschikbaar is voor bezorging.
                    'CONFIRMED'= Voor het aannemen en bezorgen van de bestelling.
                    'FINISHED'=  Zodra de bestelling is bezorgt.
                </h5>
            </div>

            <div className="order-status-buttons">
                <button onClick={updateConfirm}> Bevestigen </button>
                <button onClick={updateFinish}> Bezorgt </button>
            </div>


            <section className="orderlist-page">
                {deliveryRequests.applier &&
                    <Order_InfoComponent key={deliveryRequests.id}
                                         id={deliveryRequests.id}
                                         applier={deliveryRequests.applier}
                                         cannoliList={deliveryRequests.cannoliList}
                                         comments={deliveryRequests.comments}
                                         status={deliveryRequests.status}
                    />
                }
            </section>
        </>
    )
}

export default Order_ListComponent;
