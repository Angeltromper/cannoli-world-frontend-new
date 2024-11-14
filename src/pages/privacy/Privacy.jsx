import React, { useEffect } from 'react';


function Privacy({headerImageHandler, pageTitleHandler}) {

    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
    }, []);



    return (
        <div>


        </div>
    );
}


export default Privacy;
