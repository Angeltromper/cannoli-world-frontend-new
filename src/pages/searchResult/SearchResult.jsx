import React, { useEffect } from 'react';



function SearchResutl({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
    }, []);


    return (
        <div>


        </div>
    );
}


export default SearchResutl;
