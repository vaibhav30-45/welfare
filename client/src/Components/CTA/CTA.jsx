import "./CTA.css";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const CTA = () => {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          <h2>
            Together We Can Change Lives
          </h2>

          <p>
            Join our mission and help us build a brighter future through
            education, healthcare and community welfare.
          </p>

          <div className="cta-buttons">

              <Link to="/donate" className="donate-btnn">
          Donate Now
        </Link>
            {/* <button className="volunteer-btn">
              Become Volunteer
            </button> */}

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;