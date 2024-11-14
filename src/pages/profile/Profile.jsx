import React, { useEffect } from 'react';


function Profile({headerImageHandler, pageTitleHandler}) {
    useEffect(() => {
        headerImageHandler();
        pageTitleHandler();
    }, []);


    return (
        <div>


        </div>
    );
}


export default Profile;
