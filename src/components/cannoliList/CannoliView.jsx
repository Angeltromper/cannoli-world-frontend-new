import React, { useEffect } from 'react';



function CannoliView({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler ();
        pageTitleHandler();
    }, []);

    return (
        <div>


        </div>
    );
}


export default CannoliView;
