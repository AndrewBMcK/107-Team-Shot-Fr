// Navbar.js

import React from "react";
import "./navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="logo">
        Teamshot
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Coaching
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Recruiting
          </Link>
        </li>
        <li>
          <Link to="/catalog" className="nav-link">
            Merch
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
