import  { useEffect, useRef } from 'react'
import pageImg from "../../assets/background giftbox.jpg";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import './Franchise.css';

function FranchiseInformation({headerImageHandler, pageTitleHandler}) {

    useEffect (() => {
        headerImageHandler (pageImg);
        pageTitleHandler ("Franchise Informatie");
    }, [headerImageHandler, pageTitleHandler]);

    const refSearch = useRef(null);


    return(
        <div className="franchise-information-container">
            <div className="inner-container__reusable">
                <div className="search-query__section" ref={refSearch}>
                    <div className="construction">
                        <div className="construction">
                            <h2>Onder Constructie </h2>
                        </div>
                    </div>
                    <br/>

                    <h3 className="franchise-slogan">
                        <span className="line1"><em>"Nieuw begin = Nieuwe start"</em></span>
                        <span className="line2"><em>wordt Franchiser</em></span>
                    </h3>
                </div>
                <br/>

                <img alt="go-up-search-section" src={ goUp } onClick={ () => HandleRef (refSearch) }
                 className="search-result__go-up-icon"/>
            </div>
        </div>
    );
}

export default FranchiseInformation;
