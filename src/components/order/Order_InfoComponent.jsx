import React from 'react';
import './Order_InfoComponent.css';

function Order_InfoComponent({ id, cannoliList, status, comment, applier }) {


    const cannolis = Array.isArray(cannoliList) ? cannoliList : [];

    return (
        <div className="orderinfoComponent-container">

            <div className="orderinfoComponent-orderinfo">
                <h4>Ordergegevens</h4>
                <table className="orderinfo-table">
                    <tbody>
                    <tr>
                        <th>Ordernummer:</th>
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <th>Status:</th>
                        <td>{status}</td>
                    </tr>
                    <tr>
                        <th>Naam:</th>
                        <td>{applier.personFirstname} {applier.personLastname}</td>
                    </tr>
                    <tr>
                        <th>Adres:</th>
                        <td>
                            {applier.personStreetName} {applier.personHouseNumber} {applier.personHouseNumberAdd}<br />
                            {applier.personZipcode} {applier.personCity}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="orderinfoComponent-cannolis">
                <h4>Cannolis:</h4>
                <table className="cannoli-table">
                    <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Prijs</th>
                        <th>Aantal</th>
                    </tr>
                    </thead>
                    <tbody>

                        {cannolis.map((cannoli, index) => (
                            <tr key={index}>
                                <td>{cannoli.name}</td>
                                <td>€ {cannoli.price.toFixed(2)}</td>
                                <td>{cannoli.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <br/>

            <span className="orderinfoComponent-comments">
                <h5>Opmerking:</h5>
                {comment}
            </span>
        </div>
    );
}

export default Order_InfoComponent;
