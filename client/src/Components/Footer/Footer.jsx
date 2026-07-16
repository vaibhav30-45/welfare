import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logon.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    // Isse hum state pass kar rahe hain jo Programs page read karega
    navigate("/programs", { state: { category: categoryName } });
  };
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* About */}

          <div className="footer-col">

            <div className="footer-logo">

              <img src={logo} alt="" />

              <div>

                <h2>Sahyog</h2>

                <span>Welfare Foundation</span>

              </div>

            </div>

            <p>
              We are committed to empowering communities through
              education, healthcare, women empowerment and
              sustainable development.
            </p>

            <div className="social-icons">

              <Link to="#"><FaFacebookF /></Link>

              <Link to="#"><FaInstagram /></Link>

              <Link to="#"><FaLinkedinIn /></Link>

              <Link to="#"><FaYoutube /></Link>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-col">

            <h3>Quick Links</h3>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About Us</Link></li>

              <li><Link to="/programs">Programs</Link></li>

              <li><Link to="/events">Events</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/blogs">Blog</Link></li>

            </ul>

          </div>

          {/* Programs */}

          <div className="footer-col">

            <h3>Programs</h3>

            <ul className="clickable-footer-programs">

             <li>
    <Link to="/programs" state={{ category: "Education" }}>Education</Link>
  </li>
  <li>
    <Link to="/programs" state={{ category: "Healthcare" }}>Healthcare</Link>
  </li>
  <li>
    <Link to="/programs" state={{ category: "Empowerment" }}>Women Empowerment</Link>
  </li>
  <li>
    <Link to="/programs" state={{ category: "Environment" }}>Environment</Link>
  </li>
  <li>
    <Link to="/programs" state={{ category: "Skill Development" }}>Skill Development</Link>
  </li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-col">

            <h3>Contact Us</h3>

            <div className="contact-item">

              <FaMapMarkerAlt />

              <span>Bhopal, Madhya Pradesh, India</span>

            </div>

            <div className="contact-item">

              <FaPhoneAlt />

              <span>+91 8359855109</span>

            </div>

            <div className="contact-item">

              <FaEnvelope />

              <Link to="mailto:Rajkumarvishwakara9575@gmail.com">

                <span>Rajkumarvishwakara9575@gmail.com</span>

              </Link>

            </div>

            {/* <div className="newsletter">

              <input
                type="email"
                placeholder="Your Email"
              />

              <button>

                <FaArrowRight />

              </button>

            </div> */}

          </div>

        </div>

      </div>

      <div className="copyright">

        <div className="container copy-flex">

          <p>

            © 2026 Sahyog Welfare Foundation.
            All Rights Reserved.

          </p>

          <div>

            <Link to="/privacy-policy">Privacy Policy</Link>

            <Link to="/terms-conditions">Terms & Conditions</Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;