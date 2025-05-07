import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/Logo Cannoli.png";
import { AuthContext } from "../../context/AuthContext";
import { RiAccountCircleFill, RiAccountCircleLine, RiCloseLine, RiMenu3Line } from "react-icons/ri";
import signout from "../../assets/svg/signout.svg";
import user from "../../assets/svg/user.svg";
import './../pageLayout/header/Header.css'
import './Navbar.css';


function Navbar() {
    const {login, logout, auth} = useContext (AuthContext);
    const [toggleMenu, setToggleMenu] = useState ('');
    const [toggleLogin, setToggleLogin] = useState ('');
    const [screenWidth, setScreenWidth] = useState (window.innerWidth);

    /*
    const logout= (e) => {
        e.preventDefault();
        logout();
    }
    */

    const navigate = useNavigate()

    useEffect (() => {
        const changeWidth = () => {
            setScreenWidth (window.innerWidth);
        }

        window.addEventListener ('resize', changeWidth);

        return () => {
            window.removeEventListener ('resize', changeWidth);
        }

    }, []);

    function handleLogin(test){
        if(test === 'uitloggen'){
            setToggleLogin(false)
            navigate('/')
        } else {
            setToggleLogin(true)
            navigate('/login')
        }
    }

    return (

        <nav className="navbar__main-container">
            <div className="navbar__menu-X">
                { toggleMenu ? <RiCloseLine size={ 30 } onClick={ () => setToggleMenu (false) }/>
                    :
                    <RiMenu3Line size={ 30 } onClick={ () => setToggleMenu (true) }/>
                }

                {(toggleMenu || screenWidth > 990) && (

                    <div className="navbar-menu slide-side ">
                        <NavLink to="/" exact activeClassName='active-link'>Home</NavLink>
                        <NavLink to="/cannoli" exact activeClassName='active-link'>Cannoli</NavLink>
                        <NavLink to="/giftbox" exact activeClassName='active-link'>Giftbox</NavLink>

                        <NavLink to="/logo">
                            <figure><img src={ logo } alt="logo" className="logo"/></figure>
                        </NavLink>

                        <NavLink to="/service" exact activeClassName='active-link'>Service</NavLink>
                        <NavLink to="/franchise" exact activeClassName='active-link'>Franchise</NavLink>
                        <NavLink to="/contact" exact activeClassName='active-link'>Contact</NavLink>
                        { auth && <NavLink to='/cart-instruction/checkout' exact activeClassName='active-link'>Online Bestellen</NavLink> }
                    </div>
                )}

                <div className="navbar-inlog-menu">
                    { toggleLogin ? <button className="logout-menu" onClick={logout}>
                            <img src={ signout } alt="uitloggen"/>Uitloggen</button>
                        :
                        <button className="login-menu" onClick={() => handleLogin('inloggen')}>
                            <img src={ user } alt="inloggen"/>Inloggen
                        </button>
                    }
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
