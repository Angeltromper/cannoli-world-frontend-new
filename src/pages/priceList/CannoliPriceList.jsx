import React, { useEffect } from 'react';



function CannoliPriceList({headerImageHandler, pageTitleHandler}) {

    useEffect (() => {
        headerImageHandler ();
        pageTitleHandler ();
    }, []);


    return (
        <div>


        </div>
    );
}


export default CannoliPriceList;
