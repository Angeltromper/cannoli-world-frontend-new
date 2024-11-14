import React, { useEffect, useRef } from 'react';
import pageImg from "../../assets/img.background/background service.jpg";
import './Service.css';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";


function Service({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler ();
    }, [headerImageHandler, pageTitleHandler]);

    const refSearch = useRef(null);

    return (
        <div className="service">
            <div className="inner-container__reusable">
                <div className="search-query__section" ref={refSearch}>

                </div>
                <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                     className="search-result__go-up-icon"/>
            </div>
        </div>
    );
}

export default Service;

