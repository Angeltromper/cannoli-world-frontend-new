import React, { useContext, useEffect } from 'react';
import { AuthContext } from "../../context/AuthContext";






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
