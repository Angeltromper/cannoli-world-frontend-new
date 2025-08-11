/*
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { FaInfoCircle } from "react-icons/fa";
import "./Cannoli.css";

const CannoliKopie = ({ cannoli_id, cannoliName, cannoliPrice, url, fileName }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);
    const { auth } = useContext(AuthContext);

    const addToCart = () => {
        if (!auth) {
            alert("Log eerst in om producten toe te voegen aan je winkelmandje.");
            return;
        }

        const cannoli = {
            artikelnummer: cannoli_id,
            naam: cannoliName,
            prijs: cannoliPrice,
            url: url,
            qty: 1
        };

        setCart(prevCart => {
            const exists = prevCart.find(item => item.id === cannoli_id);
            const updatedCart = exists
                ? prevCart.map(item =>
                    item.id === cannoli_id ? { ...item, qty: item.qty + 1 } : item
                )
                : [...prevCart, { ...cannoli, qty: 1 }];

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const removeOne = () => {
        setCart(prevCart => {
            const exists = prevCart.find(item => item.id === cannoli_id);
            if (!exists) return prevCart;
            const updatedCart =
                exists.qty > 1
                    ? prevCart.map(item =>
                        item.id === cannoli_id ? { ...item, qty: item.qty - 1 } : item
                    )
                    : prevCart.filter(item => item.id !== cannoli_id);

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const redirect = () => {
        navigate(`/wholesale/${cannoli_id}`);
    };

    return (
        <article className="cannoli-card cannoli-card">
            <div className="cannoli-card__info-icon" onClick={redirect}>
                <FaInfoCircle />
            </div>

            <img className="cannoli-card__image" src={url || "/img/placeholder.jpg"} alt={fileName} />

            <p className="cannoli-card__name">{cannoliName}</p>
            <p className="cannoli-card__weight">35gr</p>
            {auth &&

                <p className="cannoli-card__price">€ {Number(cannoliPrice).toFixed(2)}</p>

            }


            {auth && (
                <div className="cannoli-card__actions">
                    <button onClick={removeOne} className="remove-one">–</button>
                    <button onClick={addToCart} className="add-one">+</button>
                </div>
            )}
        </article>
    );
};

export default CannoliKopie;
*/
