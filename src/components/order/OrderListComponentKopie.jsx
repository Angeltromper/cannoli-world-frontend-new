/*
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './OrderListComponent.css';



function OrderListComponent() {
    const navigate = useNavigate();
    const [deliveryRequests, setDeliveryRequests] = React.useState([]);
    const {deliveryRequest_id} = useParams();

    useEffect(() => {
        async function fetchDeliveryRequests() {
            try {
                const response = await axios.get (`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer $(token)`,
                        }
                    }
                );
                setDeliveryRequests (response.data);
            } catch (error) {
                console.log ('There was an error!',error);
            }
        }

        fetchDeliveryRequests ();
    }, [deliveryRequest_id]);


    async function updateConfirm() {
        try {
            await axios.put (`http://localhost:8080/deliveryRequests/$ deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer $(token)`,
                    },

                    id: deliveryRequest_id,
                    status: "CONFIRMED",

                }).then (updateStatus)
        } catch (error) {
            console.error (error);
        }
    }

    async function updateFinish() {
        try {
            await axios.put (`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer $(token)`,
                    },

                    id: deliveryRequest_id,
                    status: "FINISHED",
                }).then (updateStatus)
        } catch (error) {
            console.error (error);
        }
    }

    function updateStatus() {
        navigate (`deliveryRequests/${deliveryRequest_id}`)
    }


    return (
        <>
            <div className="orderlist-page">
                <div className="orderList-status-update">



                </div>
            </div>

        </>

    )
}

export default OrderListComponent;

*/





