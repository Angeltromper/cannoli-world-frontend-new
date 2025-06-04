/*
import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FaInfoCircle } from "react-icons/fa";
import './Cannoli.css';

export const Cannoli = (props) => {

    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const cannoli = {
            artikelnummer: props.cannoli_id,
            naam: props.cannoliName,
            prijs: props.cannoliPrice,
            url: props.url
        }

        const exists = cart.find((x) => x.id === cannoli.artikelnummer);
        if (exists) {
            setCart(
                cart.map((x, index) => x.id === cannoli.artikelnummer ? {...exists, qty: exists.qty + 1} : x
                )
            );
        } else {
            setCart([...cart, {...cannoli, qty: 1}]);
        }
        localStorage.setItem(cart, JSON.stringify(cart));
    };


    function redirect() {
        navigate(`/wholesale/${props.cannoli_id}`)
    }

    return(
        <>
            <section className="cannoli">
                <div className="info-cannoli"
                     onClick={redirect}>
                    <FaInfoCircle/>
                </div>


                <div className="ImageCannoli-button-container">
                    <div className="image-cannoli">
                        <img alt={props.fileName} src={props.url}/>
                    </div>
                </div>


                <div className="cannoli-item-container">
                    <div className="plus_cannoli_button_container">
                        <button type="button"
                                onClick={addToCart}> +
                        </button>
                    </div>
                </div>


                <span className="price-cannoli-container">
                    <span className="cannoli-price">
                        <p>€ {Number(props.cannoliPrice).toFixed(2)}</p>
                    </span>

                    <span className="cannoli-name">
                        <h5> {props.cannoliName} </h5>
                    </span>
                </span>
            </section>
        </>
    );
}

export default Cannoli;
*/

