import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { RiCloseLine, RiShoppingBasket2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [cart = []] = useContext(CartContext);
    const totalPrice = cart.reduce((sum, i) => sum + i.prijs * i.qty, 0);

    return (
        <>
            {/* Overlay */}
            <div
                className={`page-overlay${open ? ' open' : ''}`}
                onClick={() => setOpen(false)}
            />

            {/* Toggle knop */}
            <div className="cart-toggle" onClick={() => setOpen(true)}>
                <RiShoppingBasket2Line size={28} />
                <span>€ {totalPrice.toFixed(2)}</span>
            </div>

            {/* Drawer */}
            <div className={`cart-drawer${open ? ' open' : ''}`}>
                <header className="drawer-header">
                    <h3>Winkelmandje</h3>
                    <RiCloseLine
                        size={28}
                        onClick={() => setOpen(false)}
                        style={{ cursor: 'pointer' }}
                    />
                </header>

                <div className="drawer-items">
                    {cart.length === 0 ? (
                        <p>Je winkelmandje is leeg.</p>
                    ) : (
                        cart.map(i => (
                            <div key={i.artikelnummer} className="drawer-item">
                                <span>{i.qty}× {i.naam}</span>
                                <span>€ {(i.prijs * i.qty).toFixed(2)}</span>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <footer className="drawer-footer">
                        <p>Totaal: € {totalPrice.toFixed(2)}</p>
                        <button
                            className="drawer-button"
                            onClick={() => {
                                setOpen(false);
                                navigate('/cart-instruction');
                            }}
                        >
                            Bekijk order overzicht
                        </button>
                    </footer>
                )}
            </div>
        </>
    );
};
