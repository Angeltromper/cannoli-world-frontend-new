/*
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Logo Cannoli.png";
import { AuthContext } from "../../context/AuthContext";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { RiAccountCircleFill, RiAccountCircleLine } from "react-icons/ri"
import './../pageLayout/header/Header.css'
import './Navbar.css';



function Navbar() {
    const { auth } = useContext ( AuthContext );
    const [toggleMenu, setToggleMenu] = useState('');
    const [openMenu, setOpenMenu] = useState('');
    const [screenWidth, setScreenWidth] = useState( window.innerWidth );



    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth( window.innerWidth );
        }


        window.addEventListener('resize', changeWidth);

        return() => {
            window.removeEventListener('resize', changeWidth);
        }

    }, []);


    return (

        <nav className="navbar__main-container">
            <div className="navbar__menu-X">

                { toggleMenu ? <RiCloseLine  size={ 30 } onClick={() => setToggleMenu (false) }/>
                    :
                    <RiMenu3Line  size={ 30 } onClick={() => setToggleMenu (true) }/>
                }

                {(toggleMenu || screenWidth > 990) && (

                    <div className="navbar-menu">
                        <NavLink to="/" exact activeClassName='active-link'>Home</NavLink>
                        <NavLink to="/cannoli" exact activeClassName='active-link'>Cannoli</NavLink>
                        <NavLink to="/giftbox" exact activeClassName='active-link'>Giftbox</NavLink>

                        <NavLink to="/logo">
                            <figure><img src={ logo } alt="logo" className="logo"/></figure>
                        </NavLink>

                        <NavLink to="/service" exact activeClassName='active-link'>Service</NavLink>
                        <NavLink to="/franchise" exact activeClassName='active-link'>Franchise</NavLink>
                        <NavLink to="/contact" exact activeClassName='active-link'>Contact</NavLink>
                        { auth && <NavLink to="/orderlist" exact activeClassName='active-link'>Online Bestellen</NavLink> }
                    </div>
                )}


                <div className="navbar__inlog-X">

                    { openMenu ? <RiAccountCircleFill color="#010101" size={ 35 } onClick={() => setOpenMenu (false) }/>
                        :
                        <RiAccountCircleLine color="#010101" size={ 35 } onClick={() => setOpenMenu (true) }/>
                    }

                    {(setOpenMenu  || screenWidth > 990)  &&  (

                        <div className="navbar-inlog-menu">
                            <NavLink to="/login" exact activeClassName="active-link">
                                <button className="inlog-button">Inloggen</button>
                            </NavLink>
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
}


export default Navbar;
*/
