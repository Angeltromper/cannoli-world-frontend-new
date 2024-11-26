import React, { useEffect, useRef } from 'react';
import pageImg from './../../assets/img.background/background cannoli-vegan.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import './CannoliVegan.css';
import Card from "../../components/card_Menu/Card";
import veganpistache from "../../assets/img.cannoli-vegan/Vegan Pistache.png";
import veganlimoncello from "../../assets/img.cannoli-vegan/Vegan Limoncello.png";
import veganstrawberry from "../../assets/img.cannoli-vegan/Vegan Strawberry.png";
import './CannoliVegan.css';

function CannoliVegan({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
        }, []);

    const refSearch = useRef(null);


    return (
        <div className="cannoli-container">

            <div>
                <h2>Cannoli vegan</h2>
            </div>

            <div className="cards-vegan-container">
                <Card image={ veganpistache } imageAlt="cannoli vanille" title="Vanille" content="Vegan koekje gevuld met zachte vegan pistache crème "/>
                <Card image={ veganlimoncello } imageAlt="cannoli vanille" title="Vanille" content="Vegan koekje gevuld met zachte vegan limoncello crème "/>
                <Card image={ veganstrawberry } imageAlt="cannoli vanille" title="Vanille" content="Vegan koekje gevuld met zachte vegan strawberry crème "/>
            </div>


            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>
        </div>
    );
}

export default CannoliVegan;
