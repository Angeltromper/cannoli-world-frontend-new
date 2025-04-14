import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CannoliImage from "../cannoli/CannoliImage";
import CannoliInfo from "../cannoli/CannoliInfo";
import plus from '../../assets/navIcon/plus.png';
import shoppingBasket from "../../assets/navIcon/shoppingBasket.png";
import { AuthContext } from "../../context/AuthContext";
import './WholesaleInfo.css';


export const WholesaleInfo = (props) => {

    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);
    const {auth} = useContext(AuthContext);

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

        <section className="cannoli-info-container">
            <div className="cannoli-info-Image">

                    <img
                        alt={props.fileName}
                        src={props.url}
                    />

                </div>

                <div className="cannoli-info-description">
                    <div className="cannoli-info">

                        <h2>{ props.cannoliName }</h2>

                        <h5>Artikelnummer: { props.cannoli_id }</h5>

                        <h5>Categorie: { props.cannoliType }</h5>


                        <Link to={ "/cannoli" }>
                            <h4 className="cannoli-return">Cannoli</h4>
                        </Link>
                        { auth && <><h2>€ { props.cannoliPrice }</h2><h5>p.st (groothandelsprijs)</h5></> }
                    </div>
                        <br/>
                        <br/>



                        <div className="cannoli-description">
                        <h4>Omschrijving:</h4>
                        <h5>{ props.cannoliDescription }</h5>
                            <br/>
                            <br/>

                        <h4>Ingrediënten:</h4>
                        <h5>{ props.cannoliIngredients }</h5>
                    </div>


                    <div>
                        <div className="button-basket">
                            <button className="button__reusable"
                                    onClick={ addToCart }
                                /*<img src={ shoppingBasket } alt="winkelmand" className="shoppingbasket"*/>Toevoegen aan mandje</button>
                        </div>

                        <section className="cannoli-counters">
                            <article>
                                    <h2>



                                    </h2>



                            </article>



                        </section>







                        <Link to={'/register'}>
                            <p className="btn-text-order"><em>Registreer/Log in om online te kunnen bestellen</em></p>
                        </Link>
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
                </div>
        </section>
    );
}

export default WholesaleInfo;

