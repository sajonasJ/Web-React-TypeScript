// Import necessary libraries
import React from "react";
import '../css/Header.css';
import logo from '../logo.svg';

// Header component
function Header() {
    // Render Header component
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <p>  Web React TypeScript Project </p>
        </header>
    );
}

// Export Header component
export default Header;