import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import ConfirmPopup from "./../popup/ConfirmPopup";
import './CartPage.css';
import pageImg from "../../assets/img.background/background cannolis.jpg";

const CartPage = ({ headerImageHandler, pageTitleHandler }) => {
    const navigate = useNavigate();
    const { cart, setCart} = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);

    const totalPrice = cart.reduce((acc, item) => acc + item.prijs * item.qty, 0);
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    const handleRemoveAll = () => {
        setCart([]);
        localStorage.removeItem('cart');
        setShowPopup(false);
    };

    const increaseQty = (artikelnummer) => {
        const updatedCart = cart.map((item) =>
            item.artikelnummer === artikelnummer
                ? { ...item, qty: item.qty + 1 }
                : item
        );
        setCart(updatedCart);
    };

   const decreaseQty = (artikelnummer) => {
        const updatedCart = cart.map((item) =>
            item.artikelnummer === artikelnummer && item.qty > 1
                ? { ...item, qty: item.qty - 1 }
                : item
        ).filter(item => item.qty > 0);
        setCart(updatedCart);
    };

   const removeItem = (artikelnummer) => {
        const updatedCart = cart.filter((item) => item.artikelnummer !== artikelnummer);
        setCart(updatedCart);
    };

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Winkelmandje");
    }, [headerImageHandler, pageTitleHandler]);

    return (
        <div className="cart-page">
            <div className="cart-main-container">
                <div className="cart-left">
                    <div className="cart-header">
                        <button onClick={() => setShowPopup(true)} className="icon-button" aria-label="Verwijder alles">
                            <RiDeleteBin6Line size={30} />
                            <span>Verwijderen</span>
                        </button>
                    </div>

                    {cart.length === 0 ? (
                        <p>Je winkelmandje is leeg.</p>
                    ) : (
                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.artikelnummer} className="cart-item">
                                    <div className="item-info">
                                        <span className="item-name">{item.naam}</span>
                                        <span className="item-price">€ {(item.prijs * item.qty).toFixed(2)}</span>
                                    </div>
                                    <div className="item-controls">
                                        <div className="qty-buttons">
                                            {item.qty > 1 ? (
                                                <button className="qty-button minus" onClick={() => decreaseQty(item.artikelnummer)}>−</button>
                                            ) : (
                                                <button className="qty-button delete" onClick={() => removeItem(item.artikelnummer)}>
                                                    <RiDeleteBin6Line size={18} />
                                                </button>
                                            )}
                                            <span className="qty-display">{item.qty}</span>
                                            <button className="qty-button plus" onClick={() => increaseQty(item.artikelnummer)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-summary">
                        <p><strong>Totaal: € {totalPrice.toFixed(2)}</strong></p>
                        <p>{totalItems} cannoli(s)</p>
                        <button className="order-button" onClick={() => navigate('/cart-instruction/checkout')}>
                            Online bestellen
                        </button>
                    </div>
                    )}
                </div>


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
