import React, { useEffect } from 'react';


function Elements({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
    }, []);


    return (
        <div>


        </div>
    );
}


export default Elements;
