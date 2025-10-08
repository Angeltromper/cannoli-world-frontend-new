import  { useEffect, useRef } from 'react';
import pageImg from "../../assets/background franchise.jpg";
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import './Franchise.css';

function Franchise({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler("Franchise");
    }, [headerImageHandler, pageTitleHandler]);

    const refSearch = useRef(null);

    return (
        <div className="franchise-container">
            <div className="inner-container__reusable">
                <div className="search-query__section" ref={refSearch}>
                    <div className="construction">
                        <h2>Onder Constructie</h2>
                    </div>
                </div>
                <br/>

                <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                     className="search-result__go-up-icon"/>
                <br/>

            </div>
        </div>
    );
}

export default Franchise;
