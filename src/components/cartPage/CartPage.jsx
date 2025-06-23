import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import ConfirmPopup from "./../popup/ConfirmPopup";
import './CartPage.css';


const CartPage = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);

    const totalPrice = cart.reduce((acc, item) => acc + item.prijs * item.qty, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    const handleRemoveAll = () => {
        setCart([]);
        localStorage.removeItem('cart');
        setShowPopup(false);
    };

    return (
        <div className="cart-page">
            <h3>Winkelmandje</h3>

            <div className="cart-header">
                <button onClick={() => setShowPopup(true)} className="icon-button" aria-label="Verwijder alles">
                    <RiDeleteBin6Line size={24}/>
                    <span>Alles verwijderen</span>
                </button>
            </div>

            {cart.length === 0 ? (
                <p>Je winkelmandje is leeg.</p>
            ) : (
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.artikelnummer} className="cart-item">
                            <span>{item.qty} x {item.naam}</span>
                            <span> € {(item.prijs * item.qty). toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <p><strong>Totaal: € {totalPrice.toFixed(2)}</strong></p>
                        <p>{totalItems} cannoli(s)</p>
                        <button className="checkout-button" onClick={() => navigate ('/cart-instruction/checkout')}>
                            Order afronden
                        </button>
                    </div>
                </div>
            )}

            {showPopup && (
                <ConfirmPopup
                    title="Verwijder alle artikelen"
                    message="Weet u zeker dat u alle artikelen uit uw winkelmandje wilt verwijderen?"
                    onCancel={() => setShowPopup(false)}
                    onConfirm={handleRemoveAll}
                />
            )}
        </div>
    );
};

export default CartPage;
