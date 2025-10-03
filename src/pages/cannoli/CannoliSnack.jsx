import  { useEffect, useState, useRef } from "react";
import pageImg from '../../assets/background cannoli-snack.jpg';
import snackVanille from '../../assets/Snack Vanille.png';
import snackAmandel from '../../assets/Snack Amandel.png';
import snackLimoncello from '../../assets/Snack Limoncello.png';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/cardMenu/Card";
import PopupCannoli from "../../components/popup/PopupCannoli";
import './CannoliSnack.css';


function CannoliSnack({ headerImageHandler, pageTitleHandler }) {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [popupVariants, setPopupVariants] = useState([]);
    const refSearch = useRef(null);

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Cannoli Snack");
    }, [headerImageHandler, pageTitleHandler]);


    const handleMoreInfo = (title) => {
        let variants = [];


        switch (title) {
            case "Vanille":
                variants = [
                    { id: 1001, label: "Snack Vanille 35gr"  },
                    { id: null, label: "Snack Vanille grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Amandel":
                variants = [
                    { id: 1002, label: "Snack Amandel 35gr"  },
                    { id: null, label: "Snack Amandel grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Limoncello":
                variants = [
                    { id: 1003, label: "Snack Limoncello 35gr" },
                    { id: null, label: "Snack Limoncello grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
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
            <div className="cards-snack-container">
                <Card image={snackVanille} id={1001} imageAlt="snack vanille" title="Vanille" content="Gevuld met zachte vanille crème" onMoreInfoClick={handleMoreInfo} />
                <Card image={snackAmandel} id={1002} imageAlt="snack amandel" title="Amandel" content="Gevuld met zachte amandel crème" onMoreInfoClick={handleMoreInfo} />
                <Card image={snackLimoncello} id={1003} imageAlt="snack limoncello" title="Limoncello" content="Gevuld met zachte limoncello crème" onMoreInfoClick={handleMoreInfo} />
            </div>

            <img
                alt="go-up-search-section"
                src={goUp}
                onClick={() => HandleRef(refSearch)}
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

export default CannoliSnack;






