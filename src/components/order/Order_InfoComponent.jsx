import React,{useState} from 'react';
import './Order_InfoComponent.css';

function Order_InfoComponent({id, cannoliList, status, comment, applier}) {
    const [cannolis, setCannolis] = useState([cannoliList]);
    const [products, setProduct] = useState([Object.values(cannolis[0])]);

    return (
        <div className="orderinfoComponent-container">
            <span className="orderinfoComponent">
                <table>
                    <thead>
                    <tr>
                        <th>Ordernummer:</th>
                        <th>Status</th>
                        <th>Naam</th>
                        <th>Achternaam</th>
                        <th>Adres</th>
                    </tr>
                    </thead>

                    <tbody className="orderinfoComponent_body">
                    <tr>
                        <td>
                           {id}
                        </td>

                        <td>
                            {status}
                        </td>

                        <td>{applier.personFirstname}</td> <td>{applier.personLastname}</td>
                        <td>{applier.personStreetName} {applier.personHouseNumber} {applier.personHouseNumberAdd} <br/>{applier.personZipcode} {applier.personCity}</td>
                    </tr>
                    </tbody>
                </table>
            </span>
            <br/>

            <span className= "orderinfoComponent-cannolis">
                <h5>Cannolis:</h5>

                    {products.map((product) => {
                        return (
                            product.map ((product1, index) => {
                                return (
                                    <ul key={ index }>
                                        {product1.replaceAll("-", "").replaceAll("-", " ")}
                                    </ul>
                                )
                            }))
                    })}
            </span>
            <br/>

            <span className="orderinfoComponent-comments">
                <h5>Opmerking:</h5>
                {comment}
            </span>
        </div>
    );
}

export default Order_InfoComponent;

