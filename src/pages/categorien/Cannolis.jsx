import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import pageImg from '../../assets/img.background/background cannolis.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import cannolisnack from "../../assets/img.cannoli-snack/Cannolisnack-image.png";
import cannoliglutenfree from "../../assets/img.cannoli-glutenfree/Cannoliglutenfree-image.png";
import cannolivegan from "../../assets/img.cannoli-vegan/Cannolivegan-image.png";
import CannoliCard from "../../components/card_Menu/CannoliCard";
import './Cannolis.css';

function Cannolis({headerImageHandler, pageTitleHandler})  {
    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, [headerImageHandler, pageTitleHandler]);


    const refSearch = useRef(null);


    return (
        <div className="cannolis">

            <section className="cannoli-assorti-container">
                <NavLink to="/cannolisnack" exact activeClassName="active-link">
                    <CannoliCard image={ cannolisnack } imageAlt="snack"></CannoliCard>
                </NavLink>

                <NavLink to="/cannoliglutenfree" exact activeClassName="active-link">
                    <CannoliCard image={ cannoliglutenfree } imageAlt="glutenfree"></CannoliCard>
                </NavLink>

                <NavLink to="/cannolivegan" exact activeClassName="active-link">
                    <CannoliCard image={ cannolivegan } imageAlt="vegan"></CannoliCard>
                </NavLink>
            </section>

            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>
        </div>
    );
}

export default Cannolis;



