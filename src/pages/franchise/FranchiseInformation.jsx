import  { useEffect, useRef } from 'react'
import pageImg from "../../assets/img.background/background giftbox.jpg";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import TextContainer from "../../components/pageLayout/designElement/container/textContainer/TextContainer";
import './FranchiseInformation.css';

function FranchiseInformation({headerImageHandler, pageTitleHandler}) {

    useEffect (() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
    }, []);

    const refSearch = useRef(null);


    return(
        <div className="franchise-information-container">
            <TextContainer>
                <h1>Franchise Informatie</h1>
            </TextContainer>

            <div>

            </div>

            <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>
        </div>
    );
}

export default FranchiseInformation;
