import React from 'react';


function CannoliVegan({headerImage, pageTitle}) {

    return (
        <div className="cannoli-vegan-container">


            <image className="header-img-container">
                <span>
                    <img src={headerImage} className="header-img" alt="/"/>
                </span>

                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>
            </image>
        </div>
    );
}

export default CannoliVegan;
