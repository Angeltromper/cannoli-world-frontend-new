import React, { useContext, useEffect, useState } from 'react';
import {CartContext} from "../../context/CartContext";
import {RiCloseLine, RiShoppingBasket2Line } from "react-icons/ri";

import {useNavigate} from "react-router-dom";
import './Cart.css'

export const Cart = () => {
    const navigate = useNavigate();
    const [toggleCart, setToggleCart] = useState('');
    const [cart, setCart] = useContext(CartContext);


    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    const removeItem = (index) => {
        setCart(cart.filter((o, i) => index !== i));
    };

    function cart_deliveryRequest() {
        navigate( "/cart-instruction/checkout")
    }


    return (

            <div>
                <div className="shoppingcart__menu-X">

                    {toggleCart ? <RiCloseLine size={25} onClick={() => setToggleCart(false)}/>
                        :
                        <RiShoppingBasket2Line size={35} onClick={() => setToggleCart(true)}/>
                    }

                    { toggleCart   && (

                        <div className="shoppingcart-layout">
                            {/*<div className="shoppingcart-button">*/}
                                <h3>Winkelmandje</h3>

                                <button className="shoppingcart-checkout-button"
                                        onClick={cart_deliveryRequest}>
                                    Checkout
                                </button>
                            {/*</div>*/}

                            <hr/>

                            <div className="image-animation">
                                <img /*height="85px" width="85px"*/ alt="shoppingbasket" src= "https://cdn-icons-png.flaticon.com/512/17911/17911491.png"/>
                            </div>
                            <div className="shoppingcart-number">
                                {Object.keys(cart).length}
                            </div>


                        {cart.map((cannoli,index) => {
                            return (
                                <ul key={index}>

                                    <div className="shoppingcart-items">
                                        <div className="shoppingcart-items-right">

                                            <button
                                                className="shoppingcart-button-remove"
                                                onClick={() => removeItem(index)}><RiCloseLine/>
                                            </button>

                                            <div className="shoppingcart-items-name-padding">
                                                {cannoli.naam}
                                            </div>
                                        </div>
                                        <div>
                                            € {cannoli.prijs.toFixed(2)}
                                        </div>

                                    </div>
                                </ul>
                            )
                        })}

                        {cart.length === 0 && <div> Je winkelmandje is nog leeg...</div>}
                        <br/>

                        {Object.keys(cart).length} cannoli(s)

                        <br/>
                        <h3><strong> Totaal prijs: € {totalPrice.toFixed(2)} </strong></h3>

                    </div>
                )}
                </div>
            </div>
    )
};



