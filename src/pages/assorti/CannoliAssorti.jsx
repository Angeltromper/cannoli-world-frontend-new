import React, { useEffect } from "react";
import pageImg from './../../assets/img.background/background cannolis.jpg';
import GlutenfreeCannoli from "./GlutenfreeCannoli";
import SnackCannoli from "./SnackCannoli";
import VeganCannoli from "./VeganCannoli";
import './CannoliAssorti.css';


function CannoliAssorti({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg)
        pageTitleHandler();
    },[]);


    return (
        <>
            <section className="cannoliAssorti-container">

                <SnackCannoli/>

                <GlutenfreeCannoli/>

                <VeganCannoli/>

            </section>
        </>
    );

}

export default CannoliAssorti;
