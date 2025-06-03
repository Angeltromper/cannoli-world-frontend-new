import React, { useContext, useEffect, useState } from 'react';
import {CartContext} from "../../context/CartContext";
import {RiCloseLine, RiShoppingBasket2Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import './Cart.css'



export const Cart = () => {
    const navigate = useNavigate();
    const [toggleCart, setToggleCart] = useState('');
    const [cart, setCart] = useContext(CartContext);
    const {auth} = useContext(AuthContext);


    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    const removeToCart = (index) => {
        setCart(cart.filter((o, i) => index !== i));
    };

    function cart_deliveryRequest() {
        navigate( '/cart-instruction/checkout')
    }

    return (

        <div>
            {/*{auth &&*/}

            <div className="shoppingcart__menu-X">

                <div>
                    {toggleCart ? <RiCloseLine size={25} onClick={() => setToggleCart(false)}/>
                        :
                        <RiShoppingBasket2Line size={35} onClick={() => setToggleCart(true)}/>
                    }
                </div>


                {auth &&
                    <>
                        € {totalPrice.toFixed(2)}
                    </>
                }
                { toggleCart  && (

                        <div className="shoppingcart-layout">
                                <h3>Winkelmandje</h3>

                                <button className="shoppingcart-checkout-button"
                                        onClick={cart_deliveryRequest}>
                                    Order checkout
                                </button>
                            {/*</div>*/}

                            <hr/>

                            <div className="image-animation">
                                <img src= "https://cdn-icons-png.flaticon.com/512/17911/17911491.png" alt="shoppingbasket"/>
                            </div>

                            { auth &&
                                <>
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
                                                        onClick={() => removeToCart(index)}><RiCloseLine/>
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

                        </> }

                    </div>
                )}
                </div>

            {/*}*/}

            </div>
    )
};



