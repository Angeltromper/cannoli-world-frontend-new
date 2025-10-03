import  { useEffect } from "react";
import { NavLink } from "react-router-dom";
import pageImg from '../../assets/background cannolis.jpg';
import cannolisnack from '../../assets/Cannolisnack-image.png';
import cannoliglutenfree from '../../assets/Cannoliglutenfree-image.png';
import cannolivegan from '../../assets/Cannolivegan-image.png';

import CannoliCard from "../../components/cardMenu/CannoliCard";
import './CannoliAssorti.css';

function CannoliAssorti({ headerImageHandler, pageTitleHandler }) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Cannoli Assortiment");
    }, [headerImageHandler, pageTitleHandler]);

    return (
        <div className="cannolis-container">
            <NavLink to="/snack-cannoli/assorti">
                <CannoliCard image={cannolisnack} imageAlt="Snack Cannoli" description="Cannoli Snack" />
            </NavLink>

            <NavLink to="/glutenfree-cannoli/assorti">
                <CannoliCard image={cannoliglutenfree} imageAlt="Glutenvrije Cannoli" description="Cannoli Almond (glutenfree)" />
            </NavLink>

            <NavLink to="/vegan-cannoli/assorti">
                <CannoliCard image={cannolivegan} imageAlt="Vegan Cannoli" description="Cannoli Vegan" />
            </NavLink>
        </div>
    );
}

export default CannoliAssorti;
