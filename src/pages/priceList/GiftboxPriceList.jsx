import React, { useEffect, useRef } from 'react'
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import './GiftboxPriceList.css';


function GiftboxPriceList({headerImageHandler, pageTitleHandler}) {

    useEffect (() => {
        headerImageHandler ();
        pageTitleHandler ();
    }, []);

    return (
        <div className="giftbox-pricelist-container">

        <TextContainer>
            <h1>Giftbox Prijslijst</h1>
        </TextContainer>


    <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
         className="search-result__go-up-icon"/>

        </div>


    )
}

export default GiftboxPriceList;
