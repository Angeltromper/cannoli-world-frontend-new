import  { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Trash2} from "lucide-react";
import axios from "axios";
import './OrderList.css';
import pageImg from "../../assets/background cannolis.jpg";

function OrderList({headerImageHandler, pageTitleHandler}) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { user } = useContext(AuthContext);
    const [deliveryRequests, setDeliveryRequests] = useState([]);
    const [loading , setLoading] = useState(false);

    const isAdmin = !!user && (
        (Array.isArray(user.roles) && user.roles.includes('ROLE_ADMIN')) ||
        (Array.isArray(user.authorities) && user.authorities.some(a => a.authority === 'ROLE_ADMIN')) ||
        user.role === 'ROLE_ADMIN' ||
        user.roles === 'ROLE_ADMIN'
    );

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Bestellijst")
    }, [headerImageHandler,pageTitleHandler]);


    useEffect(() => {
        if (!token) return;
        const url = isAdmin
            ? 'http://localhost:8080/deliveryRequests/all'
            : 'http://localhost:8080/deliveryRequests/mine';


        (async function fetchDeliveryRequests() {
            try {
                setLoading(true);
                const { data } = await axios.get (url,{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${ token }`,
                    }
                });
                setDeliveryRequests (data || []);
            } catch (error) {
                console.error ('Fout bij ophalen bestellingen:', error);
                setDeliveryRequests([]);
            } finally {
                setLoading(false);
            }
        })();
    }, [isAdmin, token]);

    async function deleteDeliveryRequest(id) {
        if (!isAdmin) return;
        try {
            await axios.delete(`http://localhost:8080/deliveryRequests/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            setDeliveryRequests(prev => prev.filter(r => r.id !== id));
        } catch (error) {
            console.error('Fout bij verwijderen bestelling:', error);
        }
    }

    return (
        <>
            <section className="orderlist-container">
                <h4>{isAdmin ? 'Overzicht status bestellijst' : 'Overzicht van uw bestellingen'}</h4>

                {isAdmin && (
                    <>
                        <h5>
                            Voor meer informatie over bezorging kunt u hier de status bekijken van de voortgang van de bestelling.
                        </h5>
                        <br/>
                        <div className="orderlist-deliver">
                            <p><strong>*AVAILABLE:</strong> De bestelling is beschikbaar voor bezorging.</p>
                            <p><strong>*CONFIRMED:</strong> De bestelling is ontvangen en wordt verwerkt.</p>
                            <p><strong>*FINISHED:</strong> De bestelling is verwerkt en bezorgd.</p>
                        </div>
                    </>
                )}

                <table className="orderlist-table">
                    <colgroup>
                        <col className="col-overzicht" />
                        <col className="col-status" />
                        <col className="col-id" />
                        {isAdmin && <col className="col-naam" />}
                        <col className="col-adres" />
                        {isAdmin && <col className="col-delete" />}
                    </colgroup>

                    <thead>
                    <tr>
                        <th>Overzicht</th>
                        <th>Status</th>
                        <th>ID</th>
                        {isAdmin &&  <th>Naam</th>}
                        <th>Adres</th>
                        {isAdmin && <th className="col-delete">Verwijderen</th>}
                    </tr>
                    </thead>

                    <tbody>
                    {deliveryRequests.map((request) => (
                        <tr key={request.id}>
                            <td>
                                <button className="orderlist-page-menu" onClick={() => navigate(`/deliveryRequests/${request.id}`)}>
                                    Bekijk
                                </button>
                            </td>
                            <td>{request.status}</td>
                            <td>{request.id}</td>

                            {isAdmin && (
                                <td>
                                    {request.applier?.personFirstname} {request.applier?.personLastname}
                                </td>
                            )}

                            <td>
                                {request.applier?.personStreetName} {request.applier?.personHouseNumber} {request.applier?.personHouseNumberAdd}<br />
                                {request.applier?.personZipcode} {request.applier?.personCity}
                            </td>

                            {isAdmin && (
                                <td className="cell-delete">
                                    <button className="delete-button"
                                            disabled={request.status !== 'FINISHED'}
                                            onClick={() => deleteDeliveryRequest(request.id)}
                                            title={request.status !== 'FINISHED' ? 'Bestelling kan alleen verwijderd worden als de status FINISHED is' : 'Verwijder'}
                                    >
                                        <Trash2 className="delete-button_icon" aria-hidden="true" />
                                        <span>Verwijderen</span>
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br/>

                {!loading && deliveryRequests.length === 0 && (
                   <p>Geen bestellingen gevonden</p>
                )}
            </section>
        </>
    );
}

export default OrderList;
