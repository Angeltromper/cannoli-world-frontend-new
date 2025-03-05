import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CannoliImage from "../cannoli/CannoliImage";
import CannoliInfo from "../cannoli/CannoliInfo";
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

                <div className="cannoli-info-Button">
                    <div className="cannoli-info">

                        <h2>{ props.cannoliName }</h2>

                        <h5>Artikelnummer: { props.cannoli_id }</h5>

                        <h5>Categorie: { props.cannoliType }</h5>


                        <Link to={ "/cannoli" }>
                            <h5 className="cannoli-return">Cannoli</h5>
                        </Link>
                        { auth && <><h2>€ { props.cannoliPrice }</h2><h5>p.st (groothandelsprijs)</h5></> }

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

                </div>
        </section>
    );
}

export default WholesaleInfo;

