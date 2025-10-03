import  { useEffect, useRef, useState } from 'react';
import pageImg from './../../assets/img.background/background cannoli-vegan.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/cardMenu/Card";
import veganpistache from "../../assets/img.cannoli-vegan/Vegan Pistache.png";
import veganlimoncello from "../../assets/img.cannoli-vegan/Vegan Limoncello.png";
import veganstrawberry from "../../assets/img.cannoli-vegan/Vegan Strawberry.png";
import PopupCannoli from "../../components/popup/PopupCannoli";
import './CannoliVegan.css';

function CannoliVegan({headerImageHandler, pageTitleHandler}) {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [popupVariants, setPopupVariants] = useState([]);
    const refSearch = useRef(null);

    useEffect(() => {
        headerImageHandler (pageImg);
<<<<<<< HEAD
        pageTitleHandler();
        }, []);
=======
        pageTitleHandler("Cannoli Vegan");
        }, [headerImageHandler, pageTitleHandler]);
>>>>>>> temp-local-snapshot

    const handleMoreInfo = (title) => {
        let variants = [];


        switch (title) {
            case "Strawberry":
                variants = [
                    { id: 1017, label: "Vegan Strawberry 35gr"  },
                    { id: null, label: "Vegan Strawberry grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Limoncello":
                variants = [
                    { id: 1018, label: "Vegan Limoncello 35gr"  },
                    { id: null, label: "Vegan Limoncello grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Vanille":
                variants = [
                    { id: 1019, label: "Vegan Vanille 35gr" },
                    { id: null, label: "Vegan Vanille grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            default:
                break;
        }

        setSelectedTitle(title);
        setPopupVariants(variants);
    };

    return (
        <div className="cannoli-container">
<<<<<<< HEAD

            <div>
                <h2>Cannoli Vegan</h2>
            </div>

=======
>>>>>>> temp-local-snapshot
            <div className="cards-vegan-container">
                <Card image={ veganstrawberry } id={1017} imageAlt="cannoli strawberry" title="Strawberry" content="Vegan koekje gevuld met zachte vegan hazelnoot crème" onMoreInfoClick={handleMoreInfo} />
                <Card image={ veganlimoncello } id={1018} imageAlt="cannoli limoncello" title="Limoncello" content="Vegan koekje gevuld met zachte vegan limoncello crème" onMoreInfoClick={handleMoreInfo} />
                <Card image={ veganpistache } id={1019} imageAlt="cannoli vanille" title="Vanille" content="Vegan koekje gevuld met zachte vegan pistache crème"onMoreInfoClick={handleMoreInfo} />
            </div>


            <img alt="go-up-search-section"
                 src={ goUp }
                 onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"
            />

            {selectedTitle && (
                <PopupCannoli
                    title={selectedTitle}
                    variants={popupVariants}
                    onClose={() => setSelectedTitle(null)}
                />
            )}
        </div>
    );
}

export default CannoliVegan;
