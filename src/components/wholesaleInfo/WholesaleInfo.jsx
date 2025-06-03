import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Counter from "../counter/Counter";
import ShoppingCart from './../../assets/svg/shoppingCart.svg';
import { AuthContext } from "../../context/AuthContext";
import './WholesaleInfo.css';



export const WholesaleInfo = (props) => {

    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);
    const [cannoliProduct, setCannoliProduct]= useState(0);
    const [cannoliCount, setCannoliCount] = useState(0);
    const [toggleCount, setToggleCount] = useState(false);
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

    const removeFromCart = (index) => {
        setCart(cart.filter((o, i) => index!== i));
    };


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
                    src={props.url}/>
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




                    <div className="cannoli-count-info">
                        {cannoliProduct>= 1 ? <div onClick={() => setCannoliProduct(1)}>
                        </div>
                            :
                            <button className="button-added" onClick={() => setToggleCount(true)}><img src={ShoppingCart} alt="toevoegen"/>toevoegen aan mandje</button>
                        }

                        { toggleCount &&  (

                                <div className="cannoli-counters">

                                    <Counter
                                        addToCart={addToCart}
                                        cannoliCount={cannoliProduct}
                                        setCannoliCount={setCannoliProduct}
                                        removeFromCart={removeFromCart}/>
                                </div>
                        )}
                    </div>


                    <br/>
                    <br/>

                    <div>
                        <Link to={ '/register' }>
                            <p className="btn-text-order"><em>Registreer/Log in om online te kunnen bestellen</em></p>
                        </Link>
                    </div>
                </div>

            </section>
        );
}

export default WholesaleInfo;

