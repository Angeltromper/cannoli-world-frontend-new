import React from 'react';
import Navbar  from "../../navbar/Navbar.jsx";
import { Cart } from "../../cart/Cart";
import './Header.css';




// eslint-disable-next-line react/prop-types
function Header({headerImage, pageTitle}) {

    return (
        <>
            <header className="header">
                <div className="cartMenu slide-side">
                    <Cart/>
                </div>

                <Navbar/>

            </header>


            <div className="header-img-container">
                <span>
                    <img src={ headerImage } className="header-img" alt="/"/>
                </span>

                <div className="page-title">
                    <h1>{ pageTitle }</h1>
                </div>
            </div>
            <div className="skewer--bottom"></div>

        </>
    );
}

export default Header;



