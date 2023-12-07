// Navbar.js

import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../store/globalContext";


function Navbar() {

  const user = useContext(GlobalContext).user;
  const cart = useContext(GlobalContext).cart;

  function getNumOfProducts() {
    let total = 0;
    for(let i=0; i<cart.length; i++) {
      total += cart[i].quantity;
    }

    return total;
  }

  return (
    <nav className="navbar">
      <Link to="/home" className="logo">
        Teamshot
      </Link>
      <ul className="nav-links">
        <li>
          <i className="fa-solid fa-person-chalkboard"></i>
          <Link to="/coaching" className="nav-link">
            Coaching
          </Link>
        </li>
        <li>
        <i className="fa-solid fa-bullhorn"></i>
          <Link to="/recruiting" className="nav-link">
            Recruiting
          </Link>
        </li>
        <li>
        <i className="fa-solid fa-shop"></i>
          <Link to="/catalog" className="nav-link">
            Store
          </Link>
        </li>
        <li>
        <i className="fa-solid fa-book-open"></i>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
        <i className="fa-regular fa-envelope"></i>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li>
        <i className="fa-solid fa-user-tie"></i>
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">

        <button type="button">
          <i className="fa-regular fa-user"></i>
        {user.name}</button>

        <Link to="/cart" className="btn btn-outline-light">
          {getNumOfProducts()}
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </form>
    </nav>
  );
}

export default Navbar;
