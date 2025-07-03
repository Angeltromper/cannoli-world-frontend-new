/*
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/Logo Cannoli.png';
import { AuthContext } from '../../context/AuthContext';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import signout from '../../assets/svg/signout.svg';
import user from '../../assets/svg/user.svg';
import './../pageLayout/header/Header.css';
import './Navbar.css';

function Navbar() {
    const { logout, auth } = useContext(AuthContext);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const location = useLocation ();

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogin = (actie) => {
        if (actie === 'uitloggen') {
            logout();
            navigate('/');
        } else {
            navigate('/login');
        }
    };

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/cannoli', label: 'Cannoli' },
        { to: '/giftbox', label: 'Giftbox' },
        { to: '/service', label: 'Service' },
        { to: '/franchise', label: 'Franchise' },
        { to: '/contact', label: 'Contact' },
        ...(auth ? [{ to: '/cart-instruction/checkout', label: 'Online Bestellen' }] : [])
    ];

    return (
        <nav className="navbar__main-container">
            <div className="navbar__menu-X">
                {toggleMenu ? (
                    <RiCloseLine size={30} onClick={() => setToggleMenu(false)} />
                ) : (
                    <RiMenu3Line size={30} onClick={() => setToggleMenu(true)} />
                )}

                {(toggleMenu || screenWidth > 990) && (
                    <div className="navbar-menu slide-side">
                        {navLinks.slice(0, 3).map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        <NavLink to="/logo" className="navbar-logo">
                            <figure><img src={logo} alt="Cannoli World logo" className="logo" /></figure>
                        </NavLink>

                        {navLinks.slice(3).map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) => isActive ? 'active-link' : ''}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                )}

                <div className="navbar-inlog-menu">
                    {auth ? (
                        <>
                            {location.pathname !== '/userProfile' && (
                                <NavLink to="/profile" className="account-menu">
                                    <img src={user} alt="Profiel" /> Profiel
                                </NavLink>
                            )}
                            <button className="logout-menu" onClick={() => handleLogin('uitloggen')}>
                                <img src={signout} alt="Uitloggen" /> Uitloggen
                            </button>
                        </>
                    ) : (
                        <button className="login-menu" onClick={() => handleLogin('inloggen')}>
                            <img src={user} alt="Inloggen" /> Inloggen
                        </button>
                    )}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
*/
