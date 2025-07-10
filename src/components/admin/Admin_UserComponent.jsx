import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import ButtonDelete from "../button/ButtonDelete";
import './Admin_UserComponent.css';


function Admin_UserComponent() {
    const token = localStorage.getItem('token');
    const {user} = useContext(AuthContext);
    const [users, setUsers] = useState([]);



    async function deleteUser(username) {
        try {
            await axios.delete(`http://localhost:8080/users/delete/${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
        } catch (error) {
            console.error('There was an error!', error);
        }
    }



    useEffect(()=> {

        async function fetchUsers() {
            try {
                const response = await axios.get(`http://localhost:8080/users/all`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setUsers(response.data)
            } catch (error) {
                console.error ('There was an error', error);
            }
        }
        fetchUsers();
    }, [users]);

    return (
        <>
            {user.roles !== "ROLE_ADMIN" ?

                <div className="admin-user-warning-container">
                    <div className="admin-user-warning">
                        <h3>U moet zijn ingelogd als<br />ADMINISTRATOR<br />om deze gegevens te beheren</h3>
                    </div>
                </div>

                 :

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

                            {users.map((user) => {
                                return <tr key={user.id}>

                                    <td data-label="Person-ID">{user.id}</td>
                                    <td data-label="Gebruikersnaam">{user.username}</td>
                                    <td data-label="Email">{user.email}</td>
                                    <td data-label="Voornaam">{user.person.personFirstname}</td>
                                    <td data-label="Achternaam">{user.person.personLastname}</td>
                                    <td data-label="Adres">
                                        {user.person.personStreetName}{user.person.personHouseNumber}{user.person.personHouseNumberAdd}<br/>
                                        {user.person.personZipcode}{user.person.personCity}
                                    </td>


                                    {user.id !== 1 && (
                                        <td data-label="Verwijderen">
                                            <div className="admin-user-delete-button"
                                                 onClick={() => deleteUser(user.username)}>
                                                <ButtonDelete/>
                                            </div>
                                        </td>
                                    )}
                                </tr>
                            })}

                            </tbody>
                        </table>
                    </section>
                </div>
            }
        </>
    )
}


export default Admin_UserComponent;


