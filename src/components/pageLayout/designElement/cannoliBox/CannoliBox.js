import React from 'react';
import './CannoliBox.css';


function CannoliBox({image, imageAlt}) {

    return (
        <div className="cannoli-box-container">
            <img className="cannolibox-image" src={ image } alt={imageAlt}/>
        </div>


    );
}

export default CannoliBox;
