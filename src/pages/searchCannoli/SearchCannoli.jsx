import React, { useEffect } from 'react';
import pageImg from "../../assets/img.background/background franchise.jpg";


function SearchCannoli({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler(pageImg);
        pageTitleHandler();
    }, []);


    return (
        <div>


        </div>
    );
}


export default SearchCannoli;
