import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import ButtonDelete from "../button/ButtonDelete";
import './Admin_UserComponent.css';


function Admin_UserComponent() {
    const token = localStorage.getItem('token');
    const {user} = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

function goBack() {
    navigate(`/profile`);
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
            console.error(error)
        }
    }


    return (
        <>
            {user.roles !== "ROLE_ADMIN" ?

                <div className="admin-route-container">
                    <div className="admin-route">
                        <h3>  <h3>U moet zijn ingelogd als<br />ADMINISTRATOR<br />om deze gegevens te beheren</h3>
                        </h3>
                    </div>
                </div>
                :
                <div className="admin-user-element">
                    <section className="Admin_UserComponent">
                        <div>
                            <h3> Persoon gegevens: </h3>
                        </div>

                        <table>
                            <thead>
                            <tr>
                                {/*<th></th>*/}

                                <th>Persoon-ID</th>
                                <th>Naam</th>
                                <th>Email</th>
                                <th>Voornaam:</th>
                                <th>Achternaam</th>
                                <th>Straatnaam</th>
                                <th>Huisnummer</th>
                                <th>Toevoeging</th>
                                <th>Postcode</th>
                                <th>Woonplaats</th>
                                <th>Verwijderen</th>
                            </tr>
                            </thead>

                            <tbody className="admin-tbody">

                            {users.map((user) => {
                                return <tr key={user.id}>

                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>

                                    <td>{user.person.personFirstname}</td>
                                    <td>{user.person.personLastname}</td>
                                    <td>{user.person.personStreetName}</td>
                                    <td>{user.person.personHouseNumber}</td>
                                    <td>{user.person.personHouseNumberAdd}</td>
                                    <td>{user.person.personZipcode}</td>
                                    <td>{user.person.personCity}</td>


                                    <td>
                                        <div className="delete-button"
                                             onClick={() => deleteUser(user.username)}>
                                            <ButtonDelete/>
                                        </div>
                                    </td>
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


