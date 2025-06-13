import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { FaInfoCircle } from "react-icons/fa";
import "./Cannoli.css";

export const Cannoli = (props) => {
    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);
    const { auth } = useContext(AuthContext);

    const addToCart = () => {
        if (!auth) {
            alert("Log eerst in om producten toe te voegen aan je winkelmandje.");
            return;
        }

        const cannoli = {
            artikelnummer: props.cannoli_id,
            naam: props.cannoliName,
            prijs: props.cannoliPrice,
            url: props.url,
            qty: 1
        };

        setCart((prevCart) => {
            const exists = prevCart.find((item) => item.id === cannoli.artikelnummer);
            let updatedCart;

            if (exists) {
                updatedCart = prevCart.map((item) =>
                    item.id === cannoli.artikelnummer ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                updatedCart = [...prevCart, { ...cannoli, qty: 1 }];
            }

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const removeOne = () => {
        setCart((prevCart) => {
            const exists = prevCart.find((item) => item.id === props.cannoli_id);
            if (!exists) return prevCart;

            const updatedCart =
                exists.qty > 1
                    ? prevCart.map((item) =>
                        item.id === props.cannoli_id ? { ...item, qty: item.qty - 1 } : item
                    )
                    : prevCart.filter((item) => item.id !== props.cannoli_id);

            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const removeItem = () => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== props.cannoli_id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    const redirect = () => {
        navigate(`/wholesale/${props.cannoli_id}`);
    };

    return (
        <article className="cannoli-card">
            <div className="cannoli-info-icon" onClick={redirect}>
                <FaInfoCircle />
            </div>

            <div className="cannoli-image">
                <img
                    src={props.url || "/img/placeholnder.jpg"}
                    alt={props.fileName}
                />
            </div>

            <h5 className="cannoli-name">{props.cannoliName}</h5>
            <p className="cannoli-weight">35gr</p>
            <p className="cannoli-price">€ {Number(props.cannoliPrice).toFixed(2)}</p>

            {auth && (
                <div className="cannoli-actions">
                    <button onClick={removeOne} className="cannoli-remove-one">–</button>
                    <button onClick={addToCart} className="cannoli-add-one">+</button>
                </div>
            )}
        </article>
    );
};

export default Cannoli;
