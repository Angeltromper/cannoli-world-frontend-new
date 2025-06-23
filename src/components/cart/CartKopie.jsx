import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { RiCloseLine, RiDeleteBin6Line, RiShoppingBasket2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Cart.css';
import ButtonDelete from "../button/ButtonDelete";

export const CartKopie = () => {
    const navigate = useNavigate();
    const [toggleCart, setToggleCart] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const { auth } = useContext(AuthContext);

    const totalPrice = cart.reduce((acc, item) => acc + item.prijs * item.qty, 0);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.artikelnummer !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    const goToCheckout = () => {
        navigate('/cart-instruction/checkout');
    };

    return (
        <div className="shoppingcart__menu-X">
            {toggleCart ? (
                <RiCloseLine size={25} onClick={() => setToggleCart(false)} />
            ) : (
                <RiShoppingBasket2Line size={35} onClick={() => setToggleCart(true)} />
            )}


            {auth && <span className="cart-total">€ {totalPrice.toFixed(2)}</span>}

            {toggleCart && (
                <div className="shoppingcart-layout">
                    <h3>Winkelmandje</h3>

                    {cart.length === 0 ? (
                        <p>Je winkelmandje is nog leeg...</p>
                    ) : (
                        <>
                            <div className="shoppingcart-items">
                                {cart.map(item => (
                                    <div key={item.artikelnummer} className="shoppingcart-item">
                                        <div className="item-info">
                                            <span>{item.qty} × {item.naam}</span>
                                        </div>
                                        <div className="item-price">
                                            € {(item.prijs * item.qty).toFixed(2)}
                                            <button
                                                onClick={() => removeFromCart(item.artikelnummer)}
                                                className="icon-button"
                                                aria-label={`Verwijder ${item.naam}`}
                                            >
                                                <RiDeleteBin6Line size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr />

                            <div className="shoppingcart-summary">
                                <p><strong>Totaal: € {totalPrice.toFixed(2)}</strong></p>
                                <p>{cart.reduce((acc, item) => acc + item.qty, 0)} cannoli(s)</p>
                            </div>

                            <ButtonDelete onClick={clearCart} />

                            <button
                                className="shoppingcart-checkout-button"
                                onClick={goToCheckout}
                            >
                                Order afronden
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};
