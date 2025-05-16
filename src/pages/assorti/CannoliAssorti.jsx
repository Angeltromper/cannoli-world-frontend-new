import React, { useEffect } from "react";
import GlutenfreeCannoli from "./GlutenfreeCannoli";
import SnackCannoli from "./SnackCannoli";
import VeganCannoli from "./VeganCannoli";
import './CannoliAssorti.css';



function CannoliAssorti({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler()
        pageTitleHandler();
    },[]);


    return (
        <>
            <section className="cannoliAssorti-container">

                <GlutenfreeCannoli/>

                <SnackCannoli/>

                <VeganCannoli/>

            </section>
        </>
    );

}

export default CannoliAssorti;
