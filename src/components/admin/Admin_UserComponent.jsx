import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import ButtonDelete from "../button/ButtonDelete";
import ConfirmPopup from "../popup/ConfirmPopup";
import './Admin_UserComponent.css';
import { RiDeleteBin6Line } from "react-icons/ri";

function Admin_UserComponent() {
    const token = localStorage.getItem('token');
    const {user} = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [pendingDelete, setPendingDelete] = useState(false);
    const isAdmin = user?.roles === "ROLE_ADMIN";

    useEffect(()=> {
        async function fetchUsers() {
            try {
                const response = await axios.get(`http://localhost:8080/users/all`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    });
                setUsers(response.data)
            } catch (e) {
                console.error ('There was an error', e);
            }
        }
        fetchUsers();
    }, [token]);

    async function deleteUser(username) {
        // try {
            await axios.delete(`http://localhost:8080/users/delete/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
    }

    async function handleConfirmDelete(){
        if (!pendingDelete) return;
        try {
            await deleteUser (pendingDelete.username);
            setUsers (prev => prev.filte (u.username !== pendingDelete.username));
        } catch (e) {
            console.error("Delete failed", e);
        } finally {
            setPendingDelete(null);
        }
    }

    return (
        <>
        {!isAdmin ? (
            <div className="admin-user-warning-container">
                <div className="admin-user-warning">
                    <h3>U moet zijn ingelogd als<br />ADMINISTRATOR<br />om deze gegevens te beheren</h3>
                </div>
            </div>
            ) : (
                <div className="admin-user-page">
                    <section className="Admin_UserComponentContainer">
                        <div>
                            <h3> Persoon gegevens: </h3>
                        </div>

                        <table>
                            <thead>
                            <tr>
                                <th>Persoon-ID</th>
                                <th>Gebruikersnaam</th>
                                <th>Email</th>
                                <th>Voornaam</th>
                                <th>Achternaam</th>
                                <th>Adres</th>
                                <th>Verwijderen</th>
                            </tr>
                            </thead>

                            <tbody className="admin-tbody">
                            {users.map(user => (
                                 <tr key={user.id}>
                                     <td data-label="Person-ID">{user.id}</td>
                                     <td data-label="Gebruikersnaam">{user.username}</td>
                                     <td data-label="Email">{user.email}</td>
                                     <td data-label="Voornaam">{user.person.personFirstname}</td>
                                     <td data-label="Achternaam">{user.person.personLastname}</td>
                                     <td data-label="Adres">
                                        {user.person.personStreetName}{user.person.personHouseNumber}{user.person.personHouseNumberAdd}<br/>
                                        {user.person.personZipcode}{user.person.personCity}
                                    </td>

                                     <td data-label="Verwijderen">
                                         {user.id !== 1 && (
                                             <button onClick={() => setPendingDelete(true)} className="icon-button" aria-label="Verwijder alles">
                                                 <RiDeleteBin6Line size={30} />
                                                 <span>Verwijderen</span>
                                             </button>
                                         )}
                                     </td>
                                 </tr>
                            ))}
                            </tbody>
                        </table>

                        {pendingDelete && (
                            <ConfirmPopup
                                title="Persoongegevens verwijderen"
                                onCancel={() => setPendingDelete(false)}
                                onConfirm={handleConfirmDelete}
                            />
                        )}
                    </section>
                </div>
        )}
        </>
    );
}


export default Admin_UserComponent;


