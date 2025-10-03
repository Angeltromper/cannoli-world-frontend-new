import  { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/svg/Logo.svg';
import { RiCloseLine } from "react-icons/ri";
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <nav className="navbar">
            {screenWidth <= 992 && (
                <div className="navbar-hamburger" onClick={handleToggleMenu}>
                    {toggleMenu ? (
                        <RiCloseLine size={30} color="black" />
                    ) : (
                        <div className="hamburger">
                            <span />
                            <span />
                            <span />
                        </div>
                    )}
                </div>
            )}

            {screenWidth <= 992 && (
                <div className={`navbar-drawer ${toggleMenu ? 'open' : ''}`}>
                    <ul className="navbar-links">
                        <li><NavLink to="/" onClick={() => setToggleMenu(false)}>Home</NavLink></li>
                        <li><NavLink to="/cannoli-assorti" onClick={() => setToggleMenu(false)}>Cannoli</NavLink></li>
                        <li><NavLink to="/giftbox" onClick={() => setToggleMenu(false)}>Giftbox</NavLink></li>

                        <li className="navbar-logo">
                            <img src={logo} alt="Logo" />
                        </li>

                        <li><NavLink to="/service" onClick={() => setToggleMenu(false)}>Service</NavLink></li>
                        <li><NavLink to="/franchise" onClick={() => setToggleMenu(false)}>Franchise</NavLink></li>
                        <li><NavLink to="/contact" onClick={() => setToggleMenu(false)}>Contact</NavLink></li>
                    </ul>
                </div>
            )}

            {screenWidth > 992 && (
                <ul className="navbar-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/cannoli-assorti">Cannoli</NavLink></li>
                    <li><NavLink to="/giftbox">Giftbox</NavLink></li>

                    <li className="navbar-logo">
                        <img src={logo} alt="Logo" />
                    </li>

                    <li><NavLink to="/service">Service</NavLink></li>
                    <li><NavLink to="/franchise">Franchise</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
