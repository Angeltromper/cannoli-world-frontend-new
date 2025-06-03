import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "../../assets/navIcon/delete.png";
import { useNavigate } from "react-router-dom";
import "./Admin_UserComponent.css";
import { AuthContext } from "../../context/AuthContext";

function Admin_UserComponent() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get("http://localhost:8080/users", {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            setUsers(response.data);
        } catch (error) {
            console.error("Er ging iets mis bij het ophalen van gebruikers:", error);
        }
    }

    async function deleteUser(username) {
        try {
            await axios.delete(`http://localhost:8080/users/delete/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            setUsers(prevUsers => prevUsers.filter(user => user.username !== username));
        } catch (error) {
            console.error(`Fout bij verwijderen gebruiker ${username}:`, error);
        }
    }

    if (user.roles !== "ROLE_ADMIN") {
        return (
            <div className="admin-info-container">
                <div className="admin-info">
                    <h1>
                        U moet ingelogd zijn als <br />
                        <strong>ADMINISTRATOR</strong> <br />
                        om deze content te mogen zien.
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-user-page">
            <section className="admin_UserInfo">
                <h3>Gebruikersoverzicht</h3>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Gebruikersnaam</th>
                        <th>E-mail</th>
                        <th>Voornaam</th>
                        <th>Achternaam</th>
                        <th>Straat</th>
                        <th>Nr</th>
                        <th>Toevoeging</th>
                        <th>Postcode</th>
                        <th>Woonplaats</th>
                    </tr>
                    </thead>
                    <tbody className="admin-user">
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                <button
                                    className="delete-button-user"
                                    onClick={() => deleteUser(user.username)}
                                    title="Verwijder gebruiker"
                                >
                                    <img src={DeleteIcon} alt="Verwijderen" />
                                </button>
                            </td>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.personFirstname}</td>
                            <td>{user.personLastname}</td>
                            <td>{user.personStreetName}</td>
                            <td>{user.personHouseNumber}</td>
                            <td>{user.personHouseNumberAdd}</td>
                            <td>{user.personZipcode}</td>
                            <td>{user.personCity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Admin_UserComponent;
