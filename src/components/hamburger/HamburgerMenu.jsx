/*

import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Navbar from "../navbar/Navbar";
import './Navbar.css';

function HamburgerMenu() {
    const [toggleMenu, setToggleMenu] = useState('');


    return(
        <div>

        <div className="hamburger">

            { toggleMenu ? <RiCloseLine color="#fff" size={ 40 } onClick={() => setToggleMenu (false) }/>
                :
                <RiMenu3Line color="#fff" size={ 40 } onClick={() => setToggleMenu (true) }/>
            }
            { toggleMenu && (

                <div className="hamburger-menu">
                    <Navbar/>
                </div>
            )}
            </div>
        </div>

    )
}


export default HamburgerMenu;

*/
