import React, from 'react';
import './OrderInfo.css'


function OrderInfo({cannoliList, id, status, comments, user}) {
    const [cannolis, setCannolis] = React.useState([cannoliList]);
    const [products, setProduct] = React.useState([Object.values(cannolis[0])]);

return (
    <>
        <div className="orderinfo-container">
            <span className="orderinfo">
                <span className="orderinfo-id"><h2>Ordernummer: {id} </h2></span>
                <span> <h4><i>Status: {status} </i></h4> </span>
            </span>
            <br/>

            <span className="orderinfo-user">
                Persoongegevens:
                <h4>{user.personFirstname} {user.personLastname}</h4>
                <h4>{user.personStreetName} {user.personHouseNumber}</h4>
                <h4>{user.personHouseNumberAdd} {user.personLastname}</h4>
                <h4>{user.personZipcode} {user.personCity}</h4>
            </span>

            <br/>

            <span className="orderinfo-comments">
                Opmerkingen:
                <h4>{comments}</h4>
            </span>

            <br/>

            <span className="orderlist-producten">
                Producten:
                <ul>
                    {products.map((producten) => {
                        return (
                            producten.map ((product, index) => {

                                return (
                                    <li key={ index }>
                                        <h4> {product.replaceAll("-", "").replaceAll("-", "")} </h4>
                                    </li>
                                )
                            }))
                    })}
                </ul>
            </span>
        </div>
    </>
);
}
