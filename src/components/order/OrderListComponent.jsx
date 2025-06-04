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

    useEffect(() => {
        async function fetchDeliveryRequest() {
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
    }, [deliveryRequest_id,updateStatusConfirmed,updateStatusFinished]);


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


        } catch (error) {
            console.error (error);
        }
    }

         function updateStatusClick() {
             navigate(`/deliveryRequests/${deliveryRequest_id}`)
         }


         return (
             <>
                 <div className="orderlist-page">
                     <div className="orderlist-status-update">

                         <TextContainer>
                             <h3>Overzicht Bestellijst</h3>
                         </TextContainer>

                         <div className="orderlist-status-deliver">

                             <h5>Hier kunt u de status in aangeven wanneer deze is aangenomen en is bezorgt </h5>
                             <br/>

                             <h5><i>*AVAILABLE</i> = De bestelling is beschikbaar voor bezorging.</h5>
                             <h5><i>*CONFIRMED</i> = De bestelling is ontvangen en wordt verwerkt.</h5>
                             <h5><i>*FINISHED</i> =  De bestelling is verwerkt en bezorgt.</h5>
                         </div>

                         <br/>
                         <br/>

                         <div className="order-status">
                             <button onClick={updateStatusConfirmed}>
                                Bevestigen
                            </button>

                             {/*<div className="order-status"*/}
                             {/*    onClick{() => navigate (`deliveryRequest_id}`)}>*/}
                             {/*    Bevestigen*/}
                             {/*</div>*/}

                             <button onClick={updateStatusFinished}>
                                 Bezorgt
                             </button>
                         </div>
                     </div>
                         <section className="orderlist-info-page">
                             {deliveryRequests.applier &&
                                 <Order_InfoComponent key={deliveryRequests.id}
                                                      id={deliveryRequests.id }
                                                      applier={deliveryRequests.applier}
                                                      cannoliList={deliveryRequests.cannoliList}
                                                      status={deliveryRequests.status}
                                                      comments={deliveryRequests.comments}

                                 />
                             }
                         </section>
                     </div>
             </>
         )
}

export default OrderListComponent;







