import React, { useEffect, useRef } from "react";
import pageImg from './../../assets/img.background/background-cannoli-glutenfree.jpg';
import glutenfreepistacchio from "../../assets/img.cannoli-glutenfree/Glutenfree Pistacchio.png";
import glutenfreenocciola from "../../assets/img.cannoli-glutenfree/Glutenfree Nocciola (hazelnoot).png";
import glutenfreericotta from "../../assets/img.cannoli-glutenfree/Glutenfree Ricotta.png";
import glutenfreelimoncello from "../../assets/img.cannoli-glutenfree/Glutenfree Limoncello (citroen).png";
import glutenfreetiramisu from "../../assets/img.cannoli-glutenfree/Glutenfree Tiramisu.png";
import glutenfreecaramello from "../../assets/img.cannoli-glutenfree/Glutenfree Caramello (zoute caramel).png";
import glutenfreefruttidibosco from "../../assets/img.cannoli-glutenfree/Glutenfree Frutti di Bosco (bosvruchten).png";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/card_Menu/Card";
import './CannoliGlutenFree.css';


function CannoliGlutenFree({headerImageHandler, pageTitleHandler})  {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, []);

    const refSearch = useRef(null);

    return (
        <div className="cannoli-container">


            <div>
                <h2>Almond Cannoli</h2>
            </div>

            <div className="cards-glutenfree-container">
                <Card image={ glutenfreefruttidibosco } id={1010} imageAlt="fruttidibosco" title="Bosvruchten" content="Almond koekje gevuld met zachte bosvruchten crème"/>
                <Card image={ glutenfreenocciola } id={1011} imageAlt="cannoli nocciola" title="Nocciola" content="Almond koekje gevuld met zachte nocciola crème"/>
                <Card image={ glutenfreelimoncello } id={1012} imageAlt="cannoli limoncello" title="Limoncello" content="Almond koekje gevuld met zachte limoncello crème"/>
                <Card image={ glutenfreepistacchio } id={1013} imageAlt="cannoli pistache" title="Pistache" content="Almond koekje gevuld met zachte pistache crème"/>
                <Card image={ glutenfreericotta } id={1014} imageAlt="cannoli ricotta" title="Ricotta" content="Almond koekje gevuld met zachte ricotta crème"/>
                <Card image={ glutenfreetiramisu } id={1015} imageAlt="cannoli tiramisu" title="Tiramisu" content="Almond koekje gevuld met zachte tiramisu crème"/>
                <Card image={ glutenfreecaramello } id={1017} imageAlt="cannoli caramello" title="Zoute Caramel" content="Almond koekje gevuld met zachte zoute caramel crème"/>
            </div>


            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>

        </div>
    );
}

export default CannoliGlutenFree;



