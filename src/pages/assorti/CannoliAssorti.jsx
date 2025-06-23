import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import pageImg from './../../assets/img.background/background cannolis.jpg';

import cannolisnack from './../../assets/img.cannoli-snack/Cannolisnack-image.png';
import cannoliglutenfree from './../../assets/img.cannoli-glutenfree/Cannoliglutenfree-image.png';
import cannolivegan from './../../assets/img.cannoli-vegan/Cannolivegan-image.png';

import CannoliCard from "../../components/cardMenu/CannoliCard";
import './CannoliAssorti.css';

function CannoliAssorti({ headerImageHandler, pageTitleHandler }) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    return (
        <div className="cannolis-container">
            <NavLink to="/snack-cannoli/assorti">
                <CannoliCard image={cannolisnack} imageAlt="Snack Cannoli" description="Snack Cannoli" />
            </NavLink>

            <NavLink to="/glutenfree-cannoli/assorti">
                <CannoliCard image={cannoliglutenfree} imageAlt="Glutenvrije Cannoli" description="Almond Cannoli" />
            </NavLink>

            <NavLink to="/vegan-cannoli/assorti">
                <CannoliCard image={cannolivegan} imageAlt="Vegan Cannoli" description="Vegan Cannoli" />
            </NavLink>
        </div>
    );
}

export default CannoliAssorti;
