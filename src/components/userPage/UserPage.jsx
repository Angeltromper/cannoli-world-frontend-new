import  { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import './UserPage.css'

function UserPage() {
    const {
        user: {
            person_firstname, person_lastname,
            person_street_name,
            person_house_number,
            person_house_number_add,
            person_zipcode,
            person_city,
        }
    } = useContext(AuthContext);

    return (
        <section className="userpage">
            <div className="userpage-container">

                <span>
                    {person_firstname} {person_lastname}
                </span>

                <span>
                    {person_street_name} {person_house_number} {person_house_number_add}
                </span>

                <span>
                    {person_zipcode} {person_city}
                </span>
            </div>
        </section>
    )
}

export default UserPage;
