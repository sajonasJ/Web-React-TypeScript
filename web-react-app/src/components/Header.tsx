import React from "react";
import '../css/Header.css';
import logo from '../logo.svg';


function Header() {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <p>  Web React TypeScript Project </p>
        </header>
    );
}
export default Header;