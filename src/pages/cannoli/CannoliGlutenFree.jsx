import  { useEffect, useRef, useState } from "react";
import pageImg from '../../assets/background-cannoli-glutenfree.jpg';
import glutenfreepistacchio from '../../assets/Glutenfree Pistacchio.png';
import glutenfreenocciola from '../../assets/Glutenfree Nocciola (hazelnoot).png';
import glutenfreericotta from '../../assets/Glutenfree Ricotta.png';
import glutenfreelimoncello from '../../assets/Glutenfree Limoncello (citroen).png';
import glutenfreetiramisu from '../../assets/Glutenfree Tiramisu.png';
import glutenfreecaramello from '../../assets/Glutenfree Caramello (zoute caramel).png';
import glutenfreefruttidibosco from '../../assets/Glutenfree Frutti di Bosco (bosvruchten).png';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import Card from "../../components/cardMenu/Card";
import PopupCannoli from "../../components/popup/PopupCannoli";
import './CannoliGlutenFree.css';

function CannoliGlutenFree({headerImageHandler, pageTitleHandler})  {
    const [selectedTitle, setSelectedTitle] = useState(null);
    const [popupVariants, setPopupVariants] = useState([]);
    const refSearch = useRef(null);

        useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler("Cannoli Almond");
    }, [headerImageHandler, pageTitleHandler]);

        const handleMoreInfo = (title) => {
            let variants = [];

            switch (title) {
            case "Bosvruchten":
                variants = [
                    { id: 1010, label: "Almond Bosvruchten 35gr"  },
                    { id: null, label: "Almond Bosvruchten grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Nocciola":
                variants = [
                    { id: 1011, label: "Almond Nocciola 35gr"  },
                    { id: null, label: "Almond Nocciola grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Limoncello":
                variants = [
                    { id: 1012, label: "Almond Limoncello 35gr"  },
                    { id: null, label: "Almond Limoncello grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;

            case "Pistache":
                variants = [
                    { id: 1013, label: "Almond Pistache 35gr"  },
                    { id: null, label: "Almond Pistache grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Ricotta":
                variants = [
                    { id: 1014, label: "Almond Ricotta 35gr"  },
                    { id: null, label: "Almond Ricotta grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Tiramisu":
                variants = [
                    { id: 1015, label: "Almond Tiramisu 35gr"  },
                    { id: null, label: "Almond Tiramisu grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
                ];
                break;
            case "Zoute Caramel":
                variants = [
                    { id: 1016, label: "Almond Zoute Caramel 35gr"  },
                    { id: null, label: "Almond Zoute Caramel grootverpakking 1200gr (binnenkort beschikbaar)", available: false }
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
            <div className="cards-glutenfree-container">
                <Card image={ glutenfreefruttidibosco } id={1010} imageAlt="fruttidibosco" title="Bosvruchten" content="Almond koekje gevuld met zachte bosvruchten crème" onMoreInfoClick={handleMoreInfo}/>
                <Card image={ glutenfreenocciola } id={1011} imageAlt="cannoli nocciola" title="Nocciola" content="Almond koekje gevuld met zachte nocciola crème"onMoreInfoClick={handleMoreInfo} />
                <Card image={ glutenfreelimoncello } id={1012} imageAlt="cannoli limoncello" title="Limoncello" content="Almond koekje gevuld met zachte limoncello crème" onMoreInfoClick={handleMoreInfo}/>
                <Card image={ glutenfreepistacchio } id={1013} imageAlt="cannoli pistache" title="Pistache" content="Almond koekje gevuld met zachte pistache crème" onMoreInfoClick={handleMoreInfo}/>
                <Card image={ glutenfreericotta } id={1014} imageAlt="cannoli ricotta" title="Ricotta" content="Almond koekje gevuld met zachte ricotta crème"onMoreInfoClick={handleMoreInfo} />
                <Card image={ glutenfreetiramisu } id={1015} imageAlt="cannoli tiramisu" title="Tiramisu" content="Almond koekje gevuld met zachte tiramisu crème" onMoreInfoClick={handleMoreInfo}/>
                <Card image={ glutenfreecaramello } id={1016} imageAlt="cannoli caramello" title="Zoute Caramel" content="Almond koekje gevuld met zachte zoute caramel crème" onMoreInfoClick={handleMoreInfo}/>
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

export default CannoliGlutenFree;



