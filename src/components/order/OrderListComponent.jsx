import  { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Order_InfoComponent from "./Order_InfoComponent";
import { AuthContext } from "../../context/AuthContext";
import "./OrderListComponent.css";
import pageImg from "../../assets/background cannolis.jpg";

const STATUS = Object.freeze({
    NEW: "NEW",
    AVAILABLE: "AVAILABLE",
    CONFIRMED: "CONFIRMED",
    FINISHED: "FINISHED",
});

const ALLOWED_NEXT = {
    [STATUS.NEW]: [STATUS.AVAILABLE],
    [STATUS.AVAILABLE]: [STATUS.CONFIRMED],
    [STATUS.CONFIRMED]: [STATUS.FINISHED],
    [STATUS.FINISHED]: [],
};

function OrderListComponent({ headerImageHandler, pageTitleHandler }) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const { deliveryRequest_id } = useParams();
    const { user } = useContext(AuthContext);

    const [deliveryRequest, setDeliveryRequest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const isAdmin = useMemo(() => {
        if (!user) return false;
        if (typeof user.roles === "string") return user.roles === "ROLE_ADMIN";
        if (Array.isArray(user.roles)) return user.roles.includes("ROLE_ADMIN") || user.roles.includes("ADMIN");
        if (Array.isArray(user.authorities)) return user.authorities.some(a => a.authority === "ROLE_ADMIN");
        if (typeof user.role === "string") return ["ROLE_ADMIN","ADMIN"].includes(user.role);
        return false;
    }, [user]);

    const status = deliveryRequest?.status ?? STATUS.NEW;
    const canGoTo = (target) => ALLOWED_NEXT[status]?.includes(target);

    const fetchDeliveryRequest = useCallback(async () => {
        if (!deliveryRequest_id) return;
        if (!token) {
            setErrorMsg("Niet ingelogd.");
            setLoading(false);
            return;
        }
        try {
            setLoading(true);
            setErrorMsg("");
            const { data } = await axios.get(
                `http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setDeliveryRequest(data);
        } catch (e) {
            if (e?.response?.status === 403) {
                navigate("/deliveryRequests", { replace: true });
                return;
            }
            setErrorMsg(e?.response?.data?.message || e?.message || "Het ophalen van de bestelling is mislukt.");
            console.error("fetch error:", e);
        } finally {
            setLoading(false);
        }
    }, [deliveryRequest_id, token, navigate]);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);

    useEffect(() => { fetchDeliveryRequest(); }, [fetchDeliveryRequest]);

    async function updateStatus(nextStatus) {
        if (!isAdmin || !deliveryRequest || saving) return;
        if (!canGoTo(nextStatus)) return;
        if (!token) { setErrorMsg("Niet ingelogd."); return; }

        try {
            setSaving(true);
            setErrorMsg("");

            // Handige debug: zie exact wat naar de server gaat
            console.log("PUT body ->", { status: nextStatus });

            await axios.put(
                `http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                { status: nextStatus },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setDeliveryRequest(prev => (prev ? { ...prev, status: nextStatus } : prev));

            await fetchDeliveryRequest();
        } catch (e) {
            setErrorMsg(e?.response?.data?.message || e?.message || "Bijwerken van de status is mislukt.");
            console.error("update status error:", e);
        } finally {
            setSaving(false);
        }
    }

    const prettyStatus = {
        [STATUS.NEW]: "NEW",
        [STATUS.AVAILABLE]: "AVAILABLE",
        [STATUS.CONFIRMED]: "CONFIRMED",
        [STATUS.FINISHED]: "FINISHED",
    }[status] || status;

    return (
        <div className="orderlist-page">
            <div className="orderlist-status-update">
                <div className="orderlist-status-deliver">
                    <h5>Hier ziet u de status van de bestelling.</h5>
                    <br />
                    <h5><i>*AVAILABLE</i> = De bestelling is beschikbaar voor bezorging.</h5>
                    <h5><i>*CONFIRMED</i> = De bestelling is ontvangen en wordt verwerkt.</h5>
                    <h5><i>*FINISHED</i> = De bestelling is verwerkt en bezorgd.</h5>
                </div>

                <br />

                <div className="order-status">
                    <div className="order-status__current">
                        <strong>Huidige status:</strong> {prettyStatus} {saving ? "(opslaan...)" : ""}
                    </div>

                    {isAdmin && (
                        <div className="order-status__actions">
                            <button onClick={() => updateStatus(STATUS.AVAILABLE)} disabled={!canGoTo(STATUS.AVAILABLE)}>
                                Beschikbaar
                            </button>
                            <button onClick={() => updateStatus(STATUS.CONFIRMED)} disabled={!canGoTo(STATUS.CONFIRMED)}>
                                Bevestigen
                            </button>
                            <button onClick={() => updateStatus(STATUS.FINISHED)} disabled={!canGoTo(STATUS.FINISHED)}>
                                Bezorgd
                            </button>
                        </div>
                    )}

                    <button onClick={() => navigate(-1)}>Terug naar het overzicht</button>
                </div>

                {errorMsg && <p className="order-status__error">{errorMsg}</p>}
            </div>

            <section className="orderlist-info-page">
                {loading && <p className="muted">Gegevens laden...</p>}

                {!loading && deliveryRequest && (
                    <Order_InfoComponent
                        key={deliveryRequest.id}
                        id={deliveryRequest.id}
                        applier={deliveryRequest.applier}
                        cannoliList={deliveryRequest.cannoliList}
                        status={deliveryRequest.status}
                        comment={deliveryRequest.comment}
                    />
                )}

                {!loading && !deliveryRequest && <p className="muted">Geen gegevens gevonden voor deze bestelling</p>}
            </section>
        </div>
    );
}

export default OrderListComponent;
