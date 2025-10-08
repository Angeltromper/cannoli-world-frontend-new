import  { useEffect, useRef } from 'react';
import pageImg from '../../assets/background contact.jpg';
import goUp from "../../assets/navIcon/goUp.png";
import HandleRef from "../../helpers/HandleRef";
import './Contact.css';

function Contact({headerImageHandler,pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler (pageImg);
        pageTitleHandler ("Contact");
    }, [headerImageHandler, pageTitleHandler]);

    const refSearch = useRef(null);

    return (
        <div className="contact">
            <div className="inner-container__reusable">
                <div className="search-query__section" ref={refSearch}>
                    <div className="construction">
                        <h2>Onder Constructie</h2>
                    </div>
                </div>
                <br/>

                <img alt="go-up-search-section" src={goUp} onClick={() => HandleRef(refSearch)}
                     className="search-result__go-up-icon"/>
            </div>
        </div>
    );
}

export default Contact;
