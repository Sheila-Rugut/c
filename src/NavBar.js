import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./assets/logo.png";

function NavBar() {
  return (
    <div className="nav">
      <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="nav-contents">
        <h1>
          Camp <span>haven</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/campgrounds">Campgrounds</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
