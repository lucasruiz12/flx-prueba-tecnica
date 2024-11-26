import React from 'react';
import logo from '../../assets/flexxus-logo.png';
import './style.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <img src={logo} className="nav-logo" />
        </nav>
    );
};

export default NavBar;