import  { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import './UserPage.css'

function UserPage({person: personProp}) {
    const {user} = useContext (AuthContext);
    const person = personProp ?? user?.person ?? {};

    const {
        personFirstname = "",
        personLastname = "",
        personStreetName = "",
        personHouseNumber = "",
        personHouseNumberAdd = "",
        personZipcode = "",
        personCity = "",
    } = person


    const isEmpty =
        !personFirstname &&
        !personLastname &&
        !personStreetName &&
        !personHouseNumber &&
        !personZipcode &&
        !personCity;

    if (isEmpty) {
        return (
            <section className="userpage">
                <div className="userpage-container">
                    Nog geen adres ingevuld!
                </div>
            </section>
        );
    }


    return (
        <section className="userpage">
            <div className="userpage-container">
                <span>{personFirstname} {personLastname}</span>
                <span>
                    {personStreetName} {personHouseNumber}
                    {personHouseNumberAdd ? ` (${personHouseNumberAdd})` : ''}
                </span>
                <span>{personZipcode} {personCity}</span>
            </div>
        </section>
    );
}

export default UserPage;
