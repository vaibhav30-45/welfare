import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-wrapper">

      <nav className="navbar container">

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

        <Link to="/donate" className="donate-btn">
          Donate Now
        </Link>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

    </header>
  );
};

export default Navbar;