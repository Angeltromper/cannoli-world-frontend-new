import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import pageImg from './../../assets/img.background/background cannolis.jpg';
import cannolisnack from './../../assets/img.cannoli-snack/Cannolisnack-image.png';
import cannoliglutenfree from './../../assets/img.cannoli-glutenfree/Cannoliglutenfree-image.png';
import cannolivegan from './../../assets/img.cannoli-vegan/Cannolivegan-image.png';

import ThreeColumn from "../../components/pageLayout/designElement/column/ThreeColumn";
import Column from "../../components/pageLayout/designElement/column/Column";
import CannoliCard from "../../components/cardMenu/CannoliCard";



const ingredientList = [
    { title: "Energie", value: "2160kj, 517kc" },
    { title: "Vet", value: "30gr" },
    { title: "Waarde verzadigd", value: "9,6gr" },
    { title: "Koolhydraten", value: "54gr" },
    { title: "Waarvan suikers", value: "41gr" },
    { title: "Eiwit", value: "7,1gr" },
    { title: "Zoutgehalte", value: "0,1gr" },
    { title: "Voedingsvezel", value: "2,2gr" },
];

const allergenGroups = [
    [
        { title: "Gluten", value: "bevat" },
        { title: "Tarwe", value: "bevat" },
        { title: "Zonnebloemzaad", value: "bevat" },
        { title: "Boom noten", value: "bevat" },
        { title: "Sesamzaad", value: "kan bevatten" },
        { title: "Cacao", value: "bevat" },
        { title: "Soja", value: "bevat" },
        { title: "Melk", value: "bevat" },
    ],
    [
        { title: "Gluten", value: "bevat" },
        { title: "Boom noten", value: "bevat" },
        { title: "Sesamzaad", value: "kan bevatten" },
        { title: "Soja", value: "bevat" },
    ],
    [
        { title: "Gluten", value: "bevat" },
        { title: "Tarwe", value: "bevat" },
        { title: "Zonnebloemzaad", value: "bevat" },
        { title: "Boom noten", value: "bevat" },
        { title: "Sesamzaad", value: "kan bevatten" },
        { title: "Cacao", value: "bevat" },
        { title: "Soja", value: "bevat" },
        { title: "Lactose", value: "vrij van" },
        { title: "Melk", value: "vrij van" },
    ]
];

function CannolisKopie({ headerImageHandler, pageTitleHandler }) {
    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);

    return (
        <ThreeColumn>
            <Column>
                <div className="cannoli-assorti-container">
                    <NavLink to="/cannolisnack">
                        <CannoliCard image={cannolisnack} imageAlt="snack" description="Cannoli Snack" />
                    </NavLink>
                    <NavLink to="/cannoliglutenfree">
                        <CannoliCard image={cannoliglutenfree} imageAlt="glutenfree" description="Cannoli Glutenfree" />
                    </NavLink>
                    <NavLink to="/cannolivegan">
                        <CannoliCard image={cannolivegan} imageAlt="vegan" description=" Cannoli Vegan" />
                    </NavLink>
                </div>
            </Column>

            <Column>
                <div className="cannoli-assorti__column1">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="ingredient-block">
                            <h3>Voedingsstoffen:</h3>
                            <ul>
                                {ingredientList.map((item, idx) => (
                                    <li key={idx}><strong>{item.title}:</strong> {item.value}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Column>

            <Column>
                <div className="cannoli-assorti__column2">
                    {allergenGroups.map((group, index) => (
                        <div key={index} className="allergen-block">
                            <h3>Allergenen:</h3>
                            <ul>
                                {group.map((item, idx) => (
                                    <li key={idx}><strong>{item.title}:</strong> {item.value}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Column>
        </ThreeColumn>
    );
}

export default CannolisKopie;
