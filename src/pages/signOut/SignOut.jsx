import React, { useEffect } from 'react';


function SignOut({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
    }, []);

    return (
        <div>


        </div>
    );
}


export default SignOut;
