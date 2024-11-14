import React from 'react';
import Navbar from "../navbar/Navbar";



function MobileNavbar({open}) {

    return (
        <div className={`mobile-nav ${open ? 'active' : ''}`}>
            <div id="columns">
                <Navbar/>
            </div>
        </div>
    );
}

export default MobileNavbar;





