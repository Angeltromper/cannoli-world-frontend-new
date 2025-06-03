import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import ButtonEditCannoli from "../buttonEdit/ButtonEditCannoli";
import Counter from "../counter/Counter";
import ShoppingCart from './../../assets/svg/shoppingCart.svg';
import TextContainer from "../pageLayout/designElement/container/textContainer/TextContainer";
import TwoColumn from "../pageLayout/designElement/column/TwoColumn";
import Column from "../pageLayout/designElement/column/Column";
import TextContainerResp from "../pageLayout/designElement/container/textContainerResp/TextContainerResp";
import ButtonEditImage from "../buttonEdit/ButtonEditImage";
import './WholesaleInfo.css';

export const WholesaleInfo = (props) => {

    const navigate = useNavigate();
    const [cart, setCart] = useContext(CartContext);
    const [cannoliProduct, setCannoliProduct]= useState(0);
    const [toggleCount, setToggleCount] = useState(false);
    const {auth} = useContext(AuthContext);

    const addToCart = () => {
        const cannoli = {
            artikelnummer: props.cannoli_id,
            naam: props.cannoliName,
            prijs: props.cannoliPrice,
            url: props.url
        }
        setCart(curr => [...curr, cannoli]);
    }
    const removeFromCart = () => {

        setCart(cart.filter((o, i) => cannoliProduct!== i));
    };


    function editImage() {
        navigate(`/cannolis/image/${props.cannoli_id}`)
    }

    function editCannoli() {
        navigate(`/cannolis/info/${props.cannoli_id}`)
    }

    return (
        <section className="cannoli-info-container">
            <div className="cannoli-info-page">

                    <TextContainer>
                        <h1> Cannoli </h1>
                    </TextContainer>

                <TwoColumn>
                    <Column>
                        <div className="cannoli-info-description">
                            <img
                                alt={props.fileName}
                                src={props.url}/>
                        </div>
                    </Column>

                    <Column>
                        <h2>{ props.cannoliName }</h2>

                        <h5>Artikelnummer: { props.cannoli_id }</h5>

                        <h5>Categorie: { props.cannoliType }</h5>

                       { auth && <><h2>€ { props.cannoliPrice }</h2><h5>p.st (groothandelsprijs)</h5></> }

                        <br/>

                        <div className="cannoli-count-info">
                            {cannoliProduct>= 1 ? <div onClick={() => setCannoliProduct(1)}>

                            </div>
                                :
                                <button className="button-added" onClick={() => setToggleCount(true)}><img src={ShoppingCart} alt="toevoegen"/>toevoegen aan mandje</button>
                            }
                            { toggleCount &&  (

                                <div className="cannoli-counters">

                                    <Counter
                                        addToCart={addToCart}
                                        cannoliCount={cannoliProduct}
                                        setCannoliCount={setCannoliProduct}
                                        removeFromCart={removeFromCart}/>
                                </div>
                            )}
                        </div>
                    </Column>
                </TwoColumn>

                <TextContainerResp>
                    <h3>Omschrijving:</h3>
                    <div>
                        <h5>{ props.cannoliDescription }</h5>
                    </div>
                </TextContainerResp>
                <br/>

                <TextContainerResp>
                    <div>
                        <h3>Ingrediënten:</h3>
                        <h5>{ props.cannoliIngredients }</h5>
                    </div>
                </TextContainerResp>

                <div
                    onClick={editImage}>
                    <ButtonEditImage/>
                </div>

                <div
                    onClick={editCannoli}>
                    <ButtonEditCannoli/>
                </div>
            </div>
        </section>
    );
}

export default WholesaleInfo;

