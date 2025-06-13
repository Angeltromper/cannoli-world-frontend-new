import React, { useEffect } from "react";
import pageImg from './../../assets/img.background/background cannolis.jpg';
import { Link } from "react-router-dom";
import './CannoliAssorti.css';



function CannoliAssorti({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg)
        pageTitleHandler();
    },[]);


    return (
        <>
            <section className="cannoliAssorti-container">
                <div className="cannoli-card-wrapper">
                    <Link to="/snack-cannoli/assorti"><button>Snack</button></Link>
                    <Link to="/glutenfree-cannoli/assorti"><button>Glutenfree</button></Link>
                    <Link to="/vegan-cannoli/assorti"><button>Vegan</button></Link>
                </div>
            </section>
        </>
    );
}

export default CannoliAssorti;
