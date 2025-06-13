import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import ButtonEditCannoli from "../buttonEdit/ButtonEditCannoli";
import Counter1 from "../counter/Counter";
import ButtonEditImage from "../buttonEdit/ButtonEditImage";
import ShoppingCart from './../../assets/svg/shoppingCart.svg';
import TextContainer from "../pageLayout/designElement/container/textContainer/TextContainer";
import TwoColumn from "../pageLayout/designElement/column/TwoColumn";
import Column from "../pageLayout/designElement/column/Column";
import TextContainerResp from "../pageLayout/designElement/container/textContainerResp/TextContainerResp";
import './WholesaleInfo.css';

export const WholesaleInfo = (props) => {
    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);
    const [cannoliProduct, setCannoliProduct] = useState(0);
    const [toggleCount, setToggleCount] = useState(false);
    const { auth } = useContext(AuthContext);

    const addToCart = () => {
        const existing = cart.find(item => item.artikelnummer === props.cannoli_id);

        if (existing) {
            const updatedCart = cart.map(item =>
                item.artikelnummer === props.cannoli_id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            const cannoli = {
                artikelnummer: props.cannoli_id,
                naam: props.cannoliName,
                prijs: Number(props.cannoliPrice),
                url: props.url,
                qty: 1
            };
            setCart(prev => [...prev, cannoli]);
        }

        setCannoliProduct(prev => prev + 1);
    };

    const removeFromCart = () => {
        const existing = cart.find(item => item.artikelnummer === props.cannoli_id);
        if (!existing) return;

        if (existing.qty > 1) {
            const updatedCart = cart.map(item =>
                item.artikelnummer === props.cannoli_id
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            const updatedCart = cart.filter(item => item.artikelnummer !== props.cannoli_id);
            setCart(updatedCart);
            setToggleCount(false);
        }

        setCannoliProduct(prev => Math.max(prev - 1, 0));
    };

    const addImage = () => {
        navigate(`/cannolis/image/${props.cannoli_id}`);
    };

    const editCannoli = () => {
        navigate(`/cannolis/info/${props.cannoli_id}`);
    };

    return (
        <section className="cannoli-info-container">
            <div className="cannoli-info-page">

                <TextContainer>
                    <h1>Cannoli</h1>
                </TextContainer>

                <TwoColumn>
                    <Column>
                        <div className="cannoli-info-description">
                            <img src={props.url || "/img/placeholder.jpg"} alt={props.fileName || "Cannoli"} />
                        </div>
                    </Column>

                    <Column>
                        <h2>{props.cannoliName}</h2>
                        <h5>Artikelnummer: {props.cannoli_id}</h5>
                        <h5>Categorie: {props.cannoliType}</h5>

                        {auth && (
                            <>
                                <h2>€ {Number(props.cannoliPrice).toFixed(2)}</h2>
                                <h5>p.st (groothandelsprijs)</h5>
                            </>
                        )}

                        <br />

                        <div className="cannoli-count-info">
                            {cannoliProduct >= 1 ? (
                                <></>
                            ) : (
                                <button className="button-added" onClick={() => setToggleCount(true)}>
                                    <img src={ShoppingCart} alt="toevoegen" />
                                    toevoegen aan mandje
                                </button>
                            )}

                            {toggleCount && (
                                <div className="cannoli-counters">
                                    <Counter1
                                        addToCart={addToCart}
                                        cannoliCount={cannoliProduct}
                                        setCannoliCount={setCannoliProduct}
                                        removeFromCart={removeFromCart}
                                    />
                                </div>
                            )}
                        </div>
                    </Column>
                </TwoColumn>

                <TextContainerResp>
                    <h3>Omschrijving:</h3>
                    <h5>{props.cannoliDescription}</h5>
                </TextContainerResp>

                <br />

                <TextContainerResp>
                    <h3>Ingrediënten:</h3>
                    <h5>{props.cannoliIngredients}</h5>
                </TextContainerResp>

                <div className="edit-buttons-row">
                    <div onClick={addImage}>
                        <ButtonEditImage />
                    </div>

                    <div onClick={editCannoli}>
                        <ButtonEditCannoli />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WholesaleInfo;

