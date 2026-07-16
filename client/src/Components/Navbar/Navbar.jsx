import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/logon.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>

      {/* Top Bar */}

      <div className="topba">

        <div className="topbar-lef">

          <span>
            <FaPhoneAlt /> +91 8359855109
          </span>

          <span>
            <FaEnvelope /> Rajkumarvishwakara9575@gmail.com
          </span>

          <span>
            <FaMapMarkerAlt /> Bhopal, Madhya Pradesh
          </span>

        </div>

        <div className="topbar-righ">

          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaLinkedinIn />
          </a>

        </div>

      </div>

      {/* Navbar */}

      <div className="navbar-wrapper">

        <nav className="navbar">

          <Link to="/" className="logo">

            <img src={logo} alt="Sahyog Foundation" />

            <div className="logo-text">
              <h3>SAHYOG</h3>
              <span>Welfare Foundation</span>
            </div>

          </Link>

          <ul className={menuOpen ? "nav-links active" : "nav-links"}>

            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/programs" onClick={closeMenu}>
                Programs
              </NavLink>
            </li>

            <li>
              <NavLink to="/events" onClick={closeMenu}>
                Events
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery" onClick={closeMenu}>
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink to="/blogs" onClick={closeMenu}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>

          </ul>

          <Link to="/donate" className="donate-btnn">
            Donate Now
          </Link>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </nav>

      </div>

    </header>
  );
};

export default Navbar;