import React from "react";
import "./index.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-parent">
        <div className="header-top-parent">
          <div className="header-top">
            <div className="header-date">
              <span>MON-SAT: 6:00AM - 10:00PM</span>
              <span>SUN:CLOSED</span>
            </div>
            <div className="header-icons" style={{ color: "white", display: "flex", gap: 10 }}>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <FaYoutube />
              </div>
              <div>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="header-logo">
            <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
          </div>

          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/add'}>Add</NavLink></li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
