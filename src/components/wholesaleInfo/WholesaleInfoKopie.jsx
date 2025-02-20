/*
import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CannoliImage from "../cannoli/CannoliImage";
import CannoliInfo from "../cannoli/CannoliInfo";
import shoppingBasket from "../../assets/navIcon/shoppingBasket.png";
import './WholesaleInfo.css';



export const WholesaleInfo = (props) => {

    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);
    const [cannoliCount, setCannoliCount] = useState(0);
    const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
    const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
    const [remark, setRemark] = useState('');
    const [agreeTerms, toggleAgreeTerms] = useState(false);

    function resetCannolis(){
        setCannoliCount(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
        Bezorgfrequentie: ${deliveryFrequency},
        Opmerkingen: ${remark},
        Algemene voorwaarden: ${agreeTerms}
        `);
        console.log (`Cannoli bestelling - cannolis: ${cannoliCount}`);
    }


    const addToCart = () => {
        const cannoli = {
            artikelnummer: props.id,
            naam: props.cannoliName,
            prijs: props.cannoliPrice,
            url: props.url
        }
        setCart(curr => [...curr, cannoli]);
    }

    function addImage() {
        navigate(`/cannolis/image/${props.id}`)
    }

    function editCannoli() {
        navigate(`/cannolis/info/${props.id}`)
    }

    return (
        <>
            <section className="cannoli-info-container">
                <div className="cannoli-info-Image">

                    <img
                        alt={props.fileName}
                        src={props.url}
                    />

                </div>

                <div className="cannoli-info-Button">
                    <div className="cannoli-info">

                        <h2>{ props.cannoliName }</h2>

                        <h5>Artikelnummer: { props.cannoli_id }</h5>

                        <h5>Categorie: { props.cannoliType }</h5>


                        <Link to={ "/cannoli" }>
                            <h5 className="cannoli-return">Cannoli</h5>
                        </Link>

                        <h2>€ { props.cannoliPrice }</h2><h5>p.st (groothandelsprijs)</h5>
                        <br/>
                        <br/>
                        <h5>Omschrijving:</h5>
                        <h6>{ props.cannoliDescription }</h6>
                        <br/>

                        <h5>Ingrediënten:</h5>
                        <h6>{ props.cannoliIngredients }</h6>
                    </div>

                    <div>
                        <button className="button__reusable"
                                onClick={ addToCart }>
                            <img src={ shoppingBasket } alt="winkelmand"/><NavLink to="winkelmand">in
                            winkelmand</NavLink>
                        </button>
                    </div>

                    <div>
                        <div
                            onClick={ addImage }>
                            <CannoliImage/>
                        </div>

                        <div
                            onClick={ editCannoli }>
                            <CannoliInfo/>
                        </div>
                        <br/>
                    </div>



                    <div className="bezorgen">
                        <form onSubmit={ handleSubmit }>
                            <section>
                                <label htmlFor="cannoli">Bezorgfrequentie</label>
                            </section>
                            <section>
                                <select
                                    name="delivery"
                                    id="delivery-field"
                                    value={ deliveryFrequency }
                                    onChange={ (e) => toggleDeliveryFrequency (e.target.value) }
                                >
                                    <option value="week">Iedere week</option>
                                    <option value="week">Om de week</option>
                                    <option value="week">Iedere maand</option>
                                </select>
                            </section>
                            <section>
                                <input
                                    type="radio"
                                    value="daytime"
                                    name="timeslot"
                                    id="timeslot-field-daytime"
                                    checked={ (e) => toggleDeliveryTimeslot (e.target.value) }
                                />
                                <label htmlFor="timeslot-field-daytime">overdag</label>
                                <input
                                    type="radio"
                                    value="evening"
                                    checked={ deliveryTimeslot === 'evening' }
                                    onChange={ (e) => toggleDeliveryTimeslot (e.target.value) }
                                    name="timeslot"
                                    id="timeslot-field-evening"
                                />
                                <label htmlFor="timeslot-field-evening">'s Avonds</label>
                            </section>
                            <section>
                                <label htmlFor="remark-field">Opmerking</label>
                                <textarea
                                    name="remark"
                                    id="remark-field"
                                    value={ remark }
                                    onChange={ (e) => setRemark (e.target.value) }
                                    rows={ 5 }
                                    cols={ 40 }
                                />
                            </section>
                            <section>
                                <input
                                    type="checkbox"
                                    name="agree"
                                    id="agree-field"
                                    value={ agreeTerms }
                                    onChange={ (e) => toggleAgreeTerms (e.target.checked) }
                                />
                                <label htmlFor="agree-field">Ik ga akkoord met de voorwaarden</label>
                            </section>

                            <button
                                type="submit"
                                className="button-sent">Verzend</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WholesaleInfo;
*/
