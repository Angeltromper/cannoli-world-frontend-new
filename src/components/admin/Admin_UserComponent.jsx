import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import ConfirmPopup from '../popup/ConfirmPopup';
import { RiDeleteBin6Line } from 'react-icons/ri';
import pageImg from "../../assets/background-cannoli-glutenfree.jpg";
import './Admin_UserComponent.css';

function Admin_UserComponent({headerImageHandler, pageTitleHandler}) {
    const token = localStorage.getItem('token');
    const { user } = useContext(AuthContext);
    const me = user?.username || null;

    const [users, setUsers] = useState([]);
    const [pendingDelete, setPendingDelete] = useState(null); // user-object of null
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Werkt voor string of array van rollen
    const isAdmin = Array.isArray(user?.roles)
        ? user.roles.includes('ROLE_ADMIN')
        : user?.roles === 'ROLE_ADMIN';

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler("Persoongegevens");
    }, [headerImageHandler, pageTitleHandler]);

    useEffect(() => {
        if (!token) return;

        let cancelled = false;
        async function fetchUsers() {
            try {
                setLoading(true);
                setError('');
                const res = await axios.get('http://localhost:8080/users/all', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!cancelled) setUsers(res.data);
                // eslint-disable-next-line no-unused-vars
            } catch (e) {
                if (!cancelled) setError('Kon gebruikers niet laden.');
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        fetchUsers();
        return () => {
            cancelled = true;
        };
    }, [token]);

    async function deleteUser(username) {
        try {
            await axios.delete (`http://localhost:8080/users/delete/${ username }`, {
                headers: {
                    Authorization: `Bearer ${ token }`,
                },
            });
            return true;
        } catch (e) {
            if (e?.response?.status === 404) return true;
            return false;
        }
    }
    async function handleConfirmDelete() {
        if (!pendingDelete) return;
        const name = pendingDelete.username;

        setPendingDelete(null);

        const ok = await deleteUser(name);
        if (ok) {
            // direct uit UI verwijderen, geen reload nodig
            setUsers(prev => prev.filter(u => u.username !== name));
        } else {
            alert('Verwijderen is mislukt. Probeer het opnieuw.');
        }
    }

    if (!isAdmin) {
        return (
            <div className="admin-user-warning-container">
                <div className="admin-user-warning">
                    <h3>
                        U moet zijn ingelogd als
                        <br />
                        ADMINISTRATOR
                        <br />
                        om deze gegevens te beheren
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-user-page">
            <section className="Admin_UserComponentContainer">

                {loading && <p>Bezig met laden…</p>}
                {error && <p className="error-text">{error}</p>}

                {!loading && !error && (
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
                        {users.map(u => (
                            <tr key={u.id}>
                                <td data-label="Person-ID">{u.id}</td>
                                <td data-label="Gebruikersnaam">{u.username}</td>
                                <td data-label="Email">{u.email}</td>
                                <td data-label="Voornaam">{u.person?.personFirstname}</td>
                                <td data-label="Achternaam">{u.person?.personLastname}</td>
                                <td data-label="Adres">
                                    {u.person?.personStreetName} {u.person?.personHouseNumber}
                                    {u.person?.personHouseNumberAdd && u.person.personHouseNumberAdd}
                                    <br />
                                    {u.person?.personZipcode} {u.person?.personCity}
                                </td>
                                <td data-label="Verwijderen">
                                    {u.id !== 1 && u.username !== me && (
                                        <button
                                            type="button"
                                            onClick={() => setPendingDelete(u)}
                                            className="icon-button"
                                            aria-label={`Verwijder ${u.username}`}
                                        >
                                            <RiDeleteBin6Line size={30} />
                                            <span>Verwijderen</span>
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}

                {pendingDelete && (
                    <ConfirmPopup
                        title={`Persoonsgegevens van "${pendingDelete.username}" verwijderen?`}
                        onCancel={() => setPendingDelete(null)}
                        onConfirm={handleConfirmDelete}
                    />
                )}
            </section>
        </div>
    );
}

export default Admin_UserComponent;
