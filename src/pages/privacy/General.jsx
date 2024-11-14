import React, { useEffect } from 'react';


function General({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
    }, []);


    return (
        <div>


        </div>
    );
}


export default General;
