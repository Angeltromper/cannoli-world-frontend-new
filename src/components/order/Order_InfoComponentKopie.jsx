import React,{useState} from 'react';
import './Order_InfoComponent.css';



function Order_InfoComponentKopie({id, cannoliList, status, comments, applier}) {
    const [cannolis, setCannolis] = useState([cannoliList]);
    const [products, setProduct] = useState([Object.values(cannolis[0])]);

    return (
        <>
            <div className="orderinfo-container">
            <span className="orderinfo">
                <span className="orderinfo-id">
                    <h2> Ordernummer: {id} </h2></span>
                <span>
                    <h4>
                        <i> Status: {status} </i>
                    </h4>
                </span>
            </span>
                <br/>


                <span className="orderinfo-user">
                <h4>{applier.personFirstname} {applier.personLastname}</h4>
                <h4>{applier.personStreetName} {applier.personHouseNumber}</h4>
                <h4>{applier.personHouseNumberAdd} {applier.personLastname}</h4>
                <h4>{applier.personZipcode} {applier.personCity}</h4>
                </span>

                <br/>

                <span className="orderinfo-comments">
                Opmerkingen:
                <h4>{comments}</h4>
            </span>

                <br/>

                <span className="orderlist-producten">

              Cannolis:
                    <ul>
                    {products.map((product) => {
                        return (
                            product.map ((product1, index) => {

                                return (
                                    <li key={ index }>
                                        <h4> {product1.replaceAll("-", "").replaceAll("-", "")} </h4>
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

export default Order_InfoComponentKopie;

