// Navbar.js

import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <a href="/" className="logo">Teamshot</a>
            <ul className="nav-links">
                <li><a href="/" className="nav-link">Coaching</a></li>
                <li><a href="/" className="nav-link">Recruiting</a></li>
                <li><a href="/products" className="nav-link">Merch</a></li>
                <li><a href="/about" className="nav-link">About Us</a></li>
                <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;



