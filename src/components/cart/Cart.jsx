import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './Cart.css';


export const Cart = () => {
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);
    // const [open, setOpen] = useState(false);
    const {cart = []} = useContext(CartContext);
    const totalPrice = cart.reduce((sum, i) => sum + i.prijs * i.qty, 0);

    const handleCartClick = () => {
        navigate('/cart-instruction');
    };

    return (
            <div className="cart-toggle" onClick={handleCartClick} style={{ cursor: `pointer`}}>
                <RiShoppingBasket2Line size={28} />
                {auth && (
                    <span>€ {totalPrice.toFixed(2)}</span>
                )}
            </div>
    );
};
