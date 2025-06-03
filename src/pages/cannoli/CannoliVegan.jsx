import React, { useEffect, useRef } from 'react';
import pageImg from './../../assets/img.background/background cannoli-vegan.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/cardMenu/Card";
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
                <Card image={ veganstrawberry } id={1018} imageAlt="cannoli strawberry" title="Strawberry" content="Vegan koekje gevuld met zachte vegan hazelnoot crème "/>
                <Card image={ veganlimoncello } id={1019} imageAlt="cannoli limoncello" title="Limoncello" content="Vegan koekje gevuld met zachte vegan limoncello crème "/>
                <Card image={ veganpistache } id={1020} imageAlt="cannoli vanille" title="Vanille" content="Vegan koekje gevuld met zachte vegan pistache crème "/>
            </div>


            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>
        </div>
    );
}

export default CannoliVegan;
