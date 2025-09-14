import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { FiInfo} from "react-icons/fi";
import "./Cannoli.css";

const Cannoli = ({ cannoli_id, cannoliName, cannoliPrice, url, fileName }) => {
    const navigate = useNavigate();
    const { cart, setCart} = useContext(CartContext);
    const { auth } = useContext(AuthContext);

    const isLoggedIn = !!(auth?.isAuthenticated ?? auth?.user ?? auth?.token ?? auth);

    const currentItem = cart.find(item => item.artikelnummer === cannoli_id);
    const currentQty = currentItem ? currentItem.qty : 0;

    const addToCart = () => {
        if (!isLoggedIn) {
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
            const exists = prevCart.find(item => item.artikelnummer === cannoli_id);
            const updatedCart = exists
                ? prevCart.map(item =>
                    item.artikelnummer === cannoli_id ? { ...item, qty: item.qty + 1 } : item
                )
                : [...prevCart, { ...cannoli, qty: 1 }];

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const removeOne = () => {
        setCart(prevCart => {
            const exists = prevCart.find(item => item.artikelnummer === cannoli_id);
            if (!exists) return prevCart;

            const updatedCart =
                exists.qty > 1
                    ? prevCart.map(item =>
                        item.artikelnummer === cannoli_id ? { ...item, qty: item.qty - 1 } : item
                    )
                    : prevCart.filter(item => item.artikelnummer !== cannoli_id);

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const redirect = () => {
        navigate(`/wholesale/${cannoli_id}`);
    };

    return (
        <article className="cannoli-item">
            <div className="cannoli-item__info-icon" onClick={redirect}>
                <FiInfo />
            </div>

            <img className="cannoli-item__image" src={url || "/img/placeholder.jpg"} alt={fileName} />

            <p className="cannoli-item__name">{cannoliName}</p>
            <p className="cannoli-item__weight">25gr</p>

            {isLoggedIn ? (
                typeof  cannoliPrice === "number" && (
                    <p className="cannoli-item__price">€ {Number(cannoliPrice).toFixed(2)}</p>
                )
            ) : (
                <Link to='/register' className="cannoli-item__login-btn">
                    Registreer/Log in om prijzen te kunnen zien.
                </Link>
            )}

            {isLoggedIn && (
                <div className="cannoli-item__actions">
                    <button onClick={removeOne} className="remove-one">–</button>
                    <span className="current-qty">{currentQty}</span>
                    <button onClick={addToCart} className="add-one">+</button>
                </div>
            )}
        </article>
    );
};

export default Cannoli;
