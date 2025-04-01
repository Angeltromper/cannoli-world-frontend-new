/*
import React, {useContext, useState} from 'react';
import {CartContext} from "../../context/CartContext";
import {RiCloseLine, RiShoppingBasket2Line} from "react-icons/ri";
import {useNavigate} from "react-router-dom";
import './Cart.css'

export const Cart = () => {
    const navigate = useNavigate();
    const [toggleCart, setToggleCart] = useState(false);
    const [cart, setCart] = useContext(CartContext);

    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    const removeItem = (index) => {
        setCart(cart.filter((o, i) => index !== i));
    };

    function cart_deliveryRequest() {
        navigate( `/cart items/checkout`)
    }

    return (
        <div>
            <div className="shoppingcart-menu">
                <div className="shoppingcart-number">
                    {Object.keys(cart).length}
                </div>

                {toggleCart ?
                    <RiCloseLine size={30} onClick={() => setToggleCart(false)}/>
                    :
                    <RiShoppingBasket2Line size={30} onClick={() => setToggleCart(true)}/>
                }

                { toggleCart  && (

                    <div className="shoppingcart-layout">
                        <div className="shoppingcart-button">
                            <h1>Winkelmand</h1>
                            <div>

                                <button className="shoppingcart-checkout-button"
                                        onClick={cart_deliveryRequest}>
                                    Checkout
                                </button>
                            </div>
                        </div>

                        {cart.map((cannoli,index) => {
                            return (
                                <ul key={index}>

                                    <div className="shoppingcart-items">
                                        <div className="shoppingcart-items-left">

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

                        {cart.length === 0 && <div> Winkelwagen is leeg</div>}
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

*/
