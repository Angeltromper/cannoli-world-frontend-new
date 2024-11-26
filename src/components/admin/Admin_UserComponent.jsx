import React, { useContext, useEffect, useState } from 'react';
import './Admin_UserComponent.css';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import pageImg from "../../assets/img.background/Background cannolis.jpg";


function Admin_UserComponent(username) {
    const [users, setUsers] = useState([]);
    const [isAdmin, setIsAdmin] = useState (false);
    const [adminInput, setAdminInput] = useState ([]);
    const token = localStorage.getItem ('token');
    const {user} = useContext (AuthContext);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:8080/users/${username}/`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );

                setAdminInput(response.data);

                if (response.data.authorities[0].authority === 'ROLE_ADMIN') {
                    setIsAdmin (true)
                } else {
                    setIsAdmin (false)
                }
            } catch (error) {
                console.error ('There was an error!', error);
            }
        }

        fetchData ();
    }, [isAdmin, token]);

    async function deleteUser(username) {
        try {
            await axios.delete(`http://localhost:8080/users/delete/${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                })
        } catch (error) {

            console.error(error)
        }
    }

    useEffect(() => {

        async function fetchUsers() {
            try {
                const response = await axios.get (`http://localhost:8080/users/all`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setUsers(response.data)

            } catch (error) {
                console.error ('There was an error!', error);
            }
        }

        fetchUsers ().then ();
    }, [users]);

    return (
        <>

            {user.roles !== "ROLE_ADMIN" ?

                <div className="admin-info-container">
                    <div className="admin-info">
                        <h1>U moet ingelogd zijn als
                            <br/> ADMINISTRATIE
                            <br/> om deze content te mogen zien...
                        </h1>
                    </div>
                </div>
                :
                <div className="admin-user-page">

                    <section className="admin_UserInfo">
                        <div>
                            <h3>GEBRUIKERS</h3>
                        </div>

                        <table>
                            <thead>
                            <tr>
                                <th></th>

                                <th>Gebruikers-ID</th>
                                <th>GEBRUIKERSNAAM</th>
                                <th>E-mail</th>
                                <th>Voornaam:</th>
                                <th>Achternaam</th>
                                <th>Straatnaam</th>
                                <th>Huisnummer</th>
                                <th>Toevoeging</th>
                                <th>Postcode</th>
                                <th>Woonplaats</th>
                            </tr>
                            </thead>

                            <tbody className="admin_tbody">

                            {users.map((user) => {
                                user.person = undefined;
                                return <tr key={ user.id }>

                                    <td>
                                        <button className="delete"
                                                onClick={ () => deleteUser (user.username) }>
                                            <Delete/>
                                        </button>
                                    </td>
                                    <td>{user.id}</td>
                                    <td>{user.id}</td>
                                    <td>{user.picture && <img src={user.picture.url} alt={user.picture.fileName}/>}</td>
                                    <td>{user.email}</td>
                                    <td>{user.personFirstname}</td>
                                    <td>{user.personLastname}</td>
                                    <td>{user.personStreetName}</td>
                                    <td>{user.personHouseNumber}</td>
                                    <td>{user.personHouseNumberAdd}</td>
                                    <td>{user.personZipcode}</td>
                                    <td>{user.personCity}</td>
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


