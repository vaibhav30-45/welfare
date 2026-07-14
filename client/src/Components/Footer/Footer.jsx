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

import logo from "../../assets/logo.png";

const Footer = () => {
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

              <a href="#"><FaFacebookF /></a>

              <a href="#"><FaInstagram /></a>

              <a href="#"><FaLinkedinIn /></a>

              <a href="#"><FaYoutube /></a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-col">

            <h3>Quick Links</h3>

            <ul>

              <li><a href="/">Home</a></li>

              <li><a href="/about">About Us</a></li>

              <li><a href="/programs">Programs</a></li>

              <li><a href="/events">Events</a></li>

              <li><a href="/gallery">Gallery</a></li>

              <li><a href="/blog">Blog</a></li>

            </ul>

          </div>

          {/* Programs */}

          <div className="footer-col">

            <h3>Programs</h3>

            <ul>

              <li>Education</li>

              <li>Healthcare</li>

              <li>Women Empowerment</li>

              <li>Environment</li>

              <li>Child Welfare</li>

              <li>Skill Development</li>

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

              <span>Rajkumarvishwakara9575@gmail.com</span>

            </div>

            <div className="newsletter">

              <input
                type="email"
                placeholder="Your Email"
              />

              <button>

                <FaArrowRight />

              </button>

            </div>

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

            <a href="/">Privacy Policy</a>

            <a href="/">Terms & Conditions</a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;