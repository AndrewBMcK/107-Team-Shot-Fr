// Navbar.js

import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../store/globalContext";


function Navbar() {

  const user = useContext(GlobalContext).user;

  return (
    <nav className="navbar">
      <Link to="/home" className="logo">
        Teamshot
      </Link>
      <ul className="nav-links">
        <li>
          <i class="fa-solid fa-person-chalkboard"></i>
          <Link to="/coaching" className="nav-link">
            Coaching
          </Link>
        </li>
        <li>
        <i class="fa-solid fa-bullhorn"></i>
          <Link to="/recruiting" className="nav-link">
            Recruiting
          </Link>
        </li>
        <li>
        <i class="fa-solid fa-shop"></i>
          <Link to="/catalog" className="nav-link">
            Store
          </Link>
        </li>
        <li>
        <i class="fa-solid fa-book-open"></i>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
        <i class="fa-regular fa-envelope"></i>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li>
        <i class="fa-solid fa-user-tie"></i>
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">

        <button type="button">
          <i class="fa-regular fa-user"></i>
        {user.name}</button>

        <Link to="/cart" className="btn btn-outline-light">
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </form>
    </nav>
  );
}

export default Navbar;
