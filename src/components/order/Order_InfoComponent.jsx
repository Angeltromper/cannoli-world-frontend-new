import React, { useMemo } from 'react';
import './Order_InfoComponent.css';

function Order_InfoComponent({ id, applier, cannoliList = [], status, comment }) {
    if (!applier) return null;

    const formatEuro = (n) =>
        new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' })
            .format(Number(n || 0));

    const items = Array.isArray(cannoliList) ? cannoliList : [];

    const orderTotal = useMemo(
        () => items.reduce((sum, it) => sum + Number(it.prijs || 0) * Number(it.qty || 0), 0),
        [items]
    );

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
                            {applier.personStreetName} {applier.personHouseNumber} {applier.personHouseNumberAdd || ''}<br />
                            {applier.personZipcode} {applier.personCity}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <h4 className="orderinfo-cannolis-title">Cannolis:</h4>

            {items.length > 0 ? (
                <table className="cannoli-table">
                    <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Prijs</th>
                        <th>Aantal</th>
                        <th>Totaal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item, i) => {
                        const lineTotal = Number(item.prijs || 0) * Number(item.qty || 0);
                        return (
                            <tr key={item.artikelnummer ?? `${item.naam}-${i}`}>
                                <td>{item.naam}</td>
                                <td>{formatEuro(item.prijs)}</td>
                                <td>{item.qty}</td>
                                <td>{formatEuro(lineTotal)}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colSpan={3} style={{ textAlign: 'right' }}>Totaal:</th>
                        <th>{formatEuro(orderTotal)}</th>
                    </tr>
                    </tfoot>
                </table>
            ) : (
                <p>Geen cannoli&apos;s gevonden.</p>
            )}

            <br />

            <p className="orderinfo-remark">
                <strong>Opmerking:</strong> {comment?.trim() ? comment : '–'}
            </p>
        </div>
    );
}

export default Order_InfoComponent;
