import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TextContainer from "../pageLayout/designElement/container/textContainer/TextContainer";
import Order_InfoComponent from "./Order_InfoComponent";
import './OrderListComponent.css';

function OrderListComponent() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [deliveryRequests, setDeliveryRequests] = useState([]);
    const {deliveryRequest_id} = useParams();
    const [data, setData] = useState(false);

    useEffect(() => {
        async function fetchDeliveryRequest() {
          console.log(deliveryRequest_id);
            try {
                const response = await axios.get (`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setDeliveryRequests (response.data);
            } catch (error) {
                console.log ('There was an error!',error);
            }
        }

        fetchDeliveryRequest ();
    }, [deliveryRequest_id,data]);

    async function updateStatusConfirmed() {
        try {
            await axios.put (`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    id: deliveryRequest_id,
                    status: "CONFIRMED",
                }).then (updateStatusClick)

            setData(!data)
        } catch (error) {
        console.error (error);
        }
    }

    async function updateStatusFinished() {
        try {
            await axios.put (`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                    id: deliveryRequest_id,
                    status: "FINISHED",
                }).then(updateStatusClick)

            setData(!data)
        } catch (error) {
            console.error (error);
        }
    }

    function updateStatusClick() {
        navigate(`/deliveryRequests/${deliveryRequest_id}`)
    }

    return (
        <>
            <TextContainer>
                <h3>Overzicht Bestellijst</h3>
            </TextContainer>

            <div className="orderlistComponent-container">
                <div className="orderlistComponent-status-update">
                <div className="orderlistComponent-status-deliver">
                    <h5>Hier kunt u de status in aangeven wanneer deze is aangenomen en is bezorgt</h5>
                    <br/>
                    <h5><i>*AVAILABLE</i> = De bestelling is beschikbaar voor bezorging.</h5>
                    <h5><i>*CONFIRMED</i> = De bestelling is ontvangen en wordt verwerkt.</h5>
                    <h5><i>*FINISHED</i> =  De bestelling is verwerkt en bezorgt.</h5>
                </div>
                    <br/>
                    <br/>

                    <div className="orderlistComponent-status-button">
                        <button onClick={updateStatusConfirmed}>Bevestigen</button>
                        <button onClick={updateStatusFinished}>Bezorgt</button>
                    </div>
                </div>

                <section className="orderlistComponent-info-page">
                    {deliveryRequests.applier &&
                        <Order_InfoComponent key={deliveryRequests.id}
                                             id={deliveryRequests.id }
                                             applier={deliveryRequests.applier}
                                             cannoliList={deliveryRequests.cannoliList}
                                             status={deliveryRequests.status}
                                             comment={deliveryRequests.comment}
                        />
                    }
                </section>
            </div>
        </>
    )
}

export default OrderListComponent;







