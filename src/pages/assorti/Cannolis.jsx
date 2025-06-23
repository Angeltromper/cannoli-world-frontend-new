import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import pageImg from './../../assets/img.background/background cannolis.jpg';
import cannolisnack from './../../assets/img.cannoli-snack/Cannolisnack-image.png';
import cannoliglutenfree from './../../assets/img.cannoli-glutenfree/Cannoliglutenfree-image.png';
import cannolivegan from './../../assets/img.cannoli-vegan/Cannolivegan-image.png';
import CannoliCard from "../../components/cardMenu/CannoliCard";


function Cannolis({ headerImageHandler, pageTitleHandler }) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    return (
        <div className="cannolis-container">
            <NavLink to="/cannolisnack">
                <CannoliCard image={cannolisnack} imageAlt="snack" description="Cannoli Snack" />

            </NavLink>
            <NavLink to="/cannoliglutenfree">
                <CannoliCard image={cannoliglutenfree} imageAlt="glutenfree" description="Cannoli Almond" />
            </NavLink>
            <NavLink to="/cannolivegan">
                <CannoliCard image={cannolivegan} imageAlt="vegan" description=" Cannoli Vegan" />
            </NavLink>
        </div>
    );
}

export default Cannolis;
