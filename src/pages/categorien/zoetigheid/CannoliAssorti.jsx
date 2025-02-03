import React, { useEffect } from "react";
import GlutenfreeCannoli from "./../../categorien/zoetigheid/GlutenfreeCannoli";
import SnackCannoli from "./../../categorien/zoetigheid/SnackCannoli";
import VeganCannoli from "./../../categorien/zoetigheid/VeganCannoli";
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
