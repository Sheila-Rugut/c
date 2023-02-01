import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="col">
            <ul>
              <Link to="/">Home</Link>
              <br />
              <Link to="/about">About</Link>
              <br />
              <Link to="/campgrounds">Campgrounds</Link>
              <br />
              <Link to="/contact">Contact Us</Link>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>hi</li>
              <li>Nairobi, Kenya</li>
              <li>hi you</li>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <li>
                <i className="fa-solid fa-envelope" /> camphaven@gmail.com
              </li>
              <li>
                <i className="fa-brands fa-instagram" /> Camp_haven
              </li>
              <li>
                <i className="fa-brands fa-twitter" />
                Camp_haven
              </li>
              <li>
                <i className="fa-solid fa-map-marker" />
                Nairobi, Kenya
              </li>
            </ul>
            <div className="social-links">
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            &copy;{new Date().getFullYear()} Camp Haven | All rights reserved |
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
