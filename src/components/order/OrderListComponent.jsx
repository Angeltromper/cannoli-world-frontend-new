import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TextContainer from "../pageLayout/designElement/container/textContainer/TextContainer";
import Order_InfoComponent from "./Order_InfoComponent";
import { AuthContext } from "../../context/AuthContext";
import "./OrderListComponent.css";

function OrderListComponent() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const { deliveryRequest_id } = useParams();
    const { user } = useContext(AuthContext);

    const [deliveryRequest, setDeliveryRequest] = useState(null);
    const [loading, setLoading] = useState(true);

    const isAdmin = useMemo(() => {
        if (!user) return false;
        if (typeof user.roles === "string") return user.roles === "ROLE_ADMIN";
        if (Array.isArray(user.roles)) return user.roles.includes("ROLE_ADMIN") || user.roles.includes("ADMIN");
        if (Array.isArray(user.authorities)) return user.authorities.some(a => a.authority === "ROLE_ADMIN");
        if (typeof user.role === "string") return ["ROLE_ADMIN","ADMIN"].includes(user.role);
        return false;
    }, [user]);

    const fetchDeliveryRequest = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(
                `http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setDeliveryRequest(data);
        } catch (e) {
            if (e?.response?.status === 403) {
                // geen toegang → klant terug naar eigen overzicht
                navigate("/orders", { replace: true });
                return;
            }
            console.error("There was an error!", e);
        } finally {
            setLoading(false);
        }
    }, [deliveryRequest_id, token, navigate]);

    useEffect(() => {
        if (deliveryRequest_id && token) fetchDeliveryRequest();
    }, [deliveryRequest_id, token, fetchDeliveryRequest]);

    async function updateStatus(next) {
        if (!isAdmin) return; // UI guard
        try {
            await axios.put(
                `http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                { status: next },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            await fetchDeliveryRequest();
        } catch (e) {
            console.error(e);
        }
    }

    const status = deliveryRequest?.status;

    return (
        <div className="orderlist-page">
            <div className="orderlist-status-update">
                <TextContainer>
                    <h3>Overzicht bestellijst</h3>
                </TextContainer>

                <div className="orderlist-status-deliver">
                    <h5>Hier kunt u de status aangeven wanneer deze is aangenomen en bezorgd.</h5>
                    <br />
                    <h5><i>*AVAILABLE</i> = De bestelling is beschikbaar voor bezorging.</h5>
                    <h5><i>*CONFIRMED</i> = De bestelling is ontvangen en wordt verwerkt.</h5>
                    <h5><i>*FINISHED</i> = De bestelling is verwerkt en bezorgd.</h5>
                </div>

                <br /><br />

                <div className="order-status">
                    {isAdmin && (
                        <>
                            <button
                                onClick={() => updateStatus("CONFIRMED")}
                                disabled={status !== "AVAILABLE"}
                            >
                                Bevestigen
                            </button>
                            <button
                                onClick={() => updateStatus("FINISHED")}
                                disabled={status === "FINISHED"}
                            >
                                Bezorgd
                            </button>
                        </>
                    )}
                    <button onClick={() => navigate(-1)}>Terug naar het overzicht</button>
                </div>
            </div>

            <section className="orderlist-info-page">
                {!loading && deliveryRequest?.applier && (
                    <Order_InfoComponent
                        key={deliveryRequest.id}
                        id={deliveryRequest.id}
                        applier={deliveryRequest.applier}
                        cannoliList={deliveryRequest.cannoliList}
                        status={deliveryRequest.status}
                        comment={deliveryRequest.comment}
                    />
                )}
            </section>
        </div>
    );
}

export default OrderListComponent;
