import React, { useEffect, useRef } from 'react';
import pageImg from './../../assets/img.background/background cannoli-vegan.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import './CannoliVegan.css';
import Card from "../../components/card_Menu/Card";
import snackvanille from "../../assets/img.cannoli-snack/Snack Vanille.png";

function CannoliVegan({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
        }, []);

    const refSearch = useRef(null);


    return (
        <div className="cards-vegan-container">

            <div>
                <h2>Cannoli vegan</h2>
            </div>

            <div className="cards-vegan-container">
                <Card image={ snackvanille } imageAlt="cannoli vanille" title="Vanille" content="Krokant koekje gevuld met zachte vanille crème "/>


            </div>


            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>
        </div>
    );
}

export default CannoliVegan;
