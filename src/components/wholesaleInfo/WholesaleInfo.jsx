import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import ButtonEditCannoli from "../buttonEdit/ButtonEditCannoli";
import Counter from "../counter/Counter";
import ButtonEditImage from "../buttonEdit/ButtonEditImage";
import ShoppingCartIcon  from "../../assets/svg/shoppingCart.svg";
import TextContainer from "../pageLayout/designElement/container/textContainer/TextContainer";
import TwoColumn from "../pageLayout/designElement/column/TwoColumn";
import Column from "../pageLayout/designElement/column/Column";
import TextContainerResp from "../pageLayout/designElement/container/textContainerResp/TextContainerResp";
import './WholesaleInfo.css';


export const WholesaleInfo = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [cart, setCart] = useContext(CartContext);
    const [cannoliProduct, setCannoliProduct] = useState(0);
    const [toggleCount, setToggleCount] = useState(false);
    const { auth } = useContext(AuthContext);

    const searchParams = new URLSearchParams(location.search);
    const isReadonly = searchParams.get("readonly") === "true";


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

                <TextContainerResp>
                    <h2>Cannoli {props.cannoliType} </h2>
                </TextContainerResp>
                <br/>
                <br/>


                <TwoColumn className="custom-column-container">
                    <Column className="custom-image-column">
                        <div className="cannoli-info-description">
                            <img src={props.url} alt={props.fileName} />
                        </div>
                    </Column>
                    <Column className="custom-text-column">
                        <div>
                            <h3>{props.cannoliName}</h3>
                            <h5>Artikelnummer:<span className="artikelnumber">{props.cannoli_id}</span></h5>
                        <br/>

                            <div className="category-cannolitype">
                                <h5><em>Categorie:</em></h5>
                            </div>
                                <button className="link-button" onClick={() => navigate(-1)}>
                                    <h5>{props.cannoliType}</h5>
                                </button>
                            <br/>
                            <br/>

                            {auth && (
                                <h3>
                                   € {Number(props.cannoliPrice).toFixed(2)}<span className="groothandel-label">p.st (groothandelsprijs)</span>
                                </h3>
                            )}

                            <br />

                            {auth && !isReadonly && (
                            <>
                            {!toggleCount ? (
                                <button
                                    className="button-added"
                                    onClick={() => {
                                        setToggleCount(true);
                                        addToCart();
                                    }}
                                >
                                    <img
                                        src= {ShoppingCartIcon}
                                        alt= "winkelmandje"
                                        className="cart-icon"
                                    />
                                    toevoegen aan mandje
                                </button>
                            ) : (
                                <div className="cannoli-counters button-added">
                                    <Counter
                                        addToCart={addToCart}
                                        cannoliCount={cannoliProduct}
                                        setCannoliCount={setCannoliProduct}
                                        removeFromCart={removeFromCart}
                                    />
                                </div>
                            )}
                        </>
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


                {!isReadonly && location.pathname.includes("/wholesale") && (
                <div className="edit-buttons-row">
                    <div onClick={addImage}>
                        <ButtonEditImage />
                    </div>

                    <div onClick={editCannoli}>
                        <ButtonEditCannoli />
                    </div>
                </div>
                )}
            </div>
        </section>
    );
};

export default WholesaleInfo;

