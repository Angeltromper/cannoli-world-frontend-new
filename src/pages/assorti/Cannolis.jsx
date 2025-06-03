import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import pageImg from './../../assets/img.background/background cannolis.jpg';
import cannolisnack from './../../assets/img.cannoli-snack/Cannolisnack-image.png';
import cannoliglutenfree from './../../assets/img.cannoli-glutenfree/Cannoliglutenfree-image.png';
import cannolivegan from './../../assets/img.cannoli-vegan/Cannolivegan-image.png';
import ThreeColumn from "../../components/pageLayout/designElement/column/ThreeColumn";
import Column from "../../components/pageLayout/designElement/column/Column";
import CannoliCard from "../../components/cardMenu/CannoliCard";
import './Cannolis.css';




function Cannolis({headerImageHandler, pageTitleHandler})  {
    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler();
    }, []);

    const refSearch = useRef(null);

    return (
        <>
            <ThreeColumn>
                <Column>
                    <div className="cannoli-assorti-container">

                        <NavLink to="/cannolisnack" exact activeClassName="active-link">
                            <CannoliCard image={ cannolisnack } imageAlt="snack"></CannoliCard>
                        </NavLink>

                        <NavLink to="/cannoliglutenfree" exact activeClassName="active-link">
                            <CannoliCard image={ cannoliglutenfree } imageAlt="glutenfree"></CannoliCard>
                        </NavLink>

                        <NavLink to="/cannolivegan" exact activeClassName="active-link">
                            <CannoliCard image={ cannolivegan } imageAlt="vegan"></CannoliCard>
                        </NavLink>
                    </div>
                </Column>
                <Column>
                    <div className="cannoli-assorti__column1">
                        <br/>
                        <h3>Voedingsstoffen:</h3>
                        <ul>
                            <strong>Energie:</strong> 2160kj, 517kc <br/>
                            <strong>Vet:</strong> 30gr <br/>
                            <strong>Waarde verzadigd:</strong> 9,6gr <br/>
                            <strong>Koolhydraten:</strong> 54gr <br/>
                            <strong>Waarvan suikers:</strong> 41gr <br/>
                            <strong>Eiwit:</strong> 7,1gr <br/>
                            <strong>Zoutgehalte:</strong> 0,1gr <br/>
                            <strong>Voedingsvezel:</strong> 2,2gr <br/>
                        </ul>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>


                        <h3>Voedingsstoffen:</h3>
                        <ul>
                            <strong>Energie:</strong> 2160kj, 517kc <br/>
                            <strong>Vet:</strong> 30gr <br/>
                            <strong>Waarde verzadigd:</strong> 9,6gr <br/>
                            <strong>Koolhydraten:</strong> 54gr <br/>
                            <strong>Waarvan suikers:</strong> 41gr <br/>
                            <strong>Eiwit:</strong> 7,1gr <br/>
                            <strong>Zoutgehalte:</strong> 0,1gr <br/>
                            <strong>Voedingsvezel:</strong> 2,2gr <br/>
                        </ul>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <h3>Voedingsstoffen:</h3>
                        <ul>
                            <strong>Energie:</strong> 2160kj, 517kc <br/>
                            <strong>Vet:</strong> 30gr <br/>
                            <strong>Waarde verzadigd:</strong> 9,6gr <br/>
                            <strong>Koolhydraten:</strong> 54gr <br/>
                            <strong>Waarvan suikers:</strong> 41gr <br/>
                            <strong>Eiwit:</strong> 7,1gr <br/>
                            <strong>Zoutgehalte:</strong> 0,1gr <br/>
                            <strong>Voedingsvezel:</strong> 2,2gr <br/>
                        </ul>
                    </div>
                </Column>
                <Column>
                    <div className="cannoli-assorti__column2">
                        <h3>Allergenen:</h3>
                        <ul>
                            <strong>Gluten:</strong> bevat <br/>
                            <strong>Tarwe:</strong> bevat <br/>
                            <strong>Zonnebloemzaad:</strong> bevat <br/>
                            <strong>Boom noten:</strong> bevat <br/>
                            <strong>Sesamzaad:</strong> kan bevatten <br/>
                            <strong>Cacao:</strong> bevat <br/>
                            <strong>Soja:</strong> bevat <br/>
                            <strong>Melk:</strong> bevat <br/>
                        </ul>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <h3>Allergenen:</h3>
                        <ul>
                            <strong>Gluten:</strong> bevat <br/>
                            <strong>Boom noten:</strong> bevat <br/>
                            <strong>Sesamzaad:</strong> kan bevatten <br/>
                            <strong>Soja:</strong> bevat <br/>
                        </ul>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>


                        <h3>Allergenen:</h3>
                        <ul>
                            <strong>Gluten:</strong> bevat <br/>
                            <strong>Tarwe:</strong> bevat <br/>
                            <strong>Zonnebloemzaad:</strong> bevat <br/>
                            <strong>Boom noten:</strong> bevat <br/>
                            <strong>Sesamzaad:</strong> kan bevatten <br/>
                            <strong>Cacao:</strong> bevat <br/>
                            <strong>Soja:</strong> bevat <br/>
                            <strong>Lactose:</strong> vrij van <br/>
                            <strong>Melk:</strong> vrij van <br/>
                        </ul>
                    </div>
                </Column>
            </ThreeColumn>

        </>
    );
}

export default Cannolis;



