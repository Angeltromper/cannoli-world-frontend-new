import React, { useEffect, useRef } from "react";
import pageImg from './../../assets/img.background/background cannoli-snack.jpg';
import snackvanille from "../../assets/img.cannoli-snack/Snack Vanille.png";
import snacklimoncello from "../../assets/img.cannoli-snack/Snack Limoncello.png";
import snackamandel from "../../assets/img.cannoli-snack/Snack Mandorla Amandel.png";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/card_Menu/Card";
import './CannoliSnack.css';



function CannoliSnack({headerImageHandler, pageTitleHandler})  {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, []);


    const refSearch = useRef(null);

    return (
        <div className="cannoli-container">


            <div>
                <h2>Cannoli snack</h2>
            </div>

            <div className="cards-snack-container">
                <Card image={ snackamandel } id={1002} imageAlt="cannoli Amandel" title="Amandel" content="Krokant koekje gevuld met zachte amandel crème"/>
                <Card image={ snacklimoncello } id={1006} imageAlt="cannoli limoncello" title="Limoncello" content="Krokant koekje gevuld met zachte limoncello crème"/>
                <Card image={ snackvanille } id={1009}  imageAlt="cannoli vanille" title="Vanille" content="Krokant koekje gevuld met zachte vanille crème"/>
            </div>

            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>
        </div>
    );
}

export default CannoliSnack;








