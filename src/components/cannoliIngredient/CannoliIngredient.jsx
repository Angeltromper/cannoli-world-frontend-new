import React, { useEffect } from 'react';


function CannoliIngredient({headerImageHandler, pageTitleHandler}) {
    useEffect (() => {
        headerImageHandler ();
        pageTitleHandler ();
    }, []);



    return (
        <div>


        </div>
    );
}


export default CannoliIngredient;
