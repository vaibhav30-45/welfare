import "./Hero.css";
import {
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section">

      <div className="hero-overlay"></div>

      <div className="container">

        <div className="hero-content">

          <span className="hero-small-title">
            WELCOME TO SAHYOG WELFARE FOUNDATION
          </span>

          <h1>
            Building Better
            <br />
            Lives Together
          </h1>

          <p>
            We are committed to creating a positive impact
            in the lives of people through education,
            healthcare, women empowerment and
            sustainable development initiatives.
          </p>

          <div className="hero-buttons">

            <button className="donate-btn">

              Donate Now

              <FaChevronDown />

            </button>

            <button className="volunteer-btn">

              Become Volunteer

            </button>

          </div>

        </div>

      </div>

      {/* Floating Stats */}

      {/* <div className="container">

        <div className="hero-stats">

          <div className="stat-box">

            <div className="icon green">

              🌍

            </div>

            <h2>1500+</h2>

            <p>Families Helped</p>

          </div>

          <div className="stat-box">

            <div className="icon blue">

              👥

            </div>

            <h2>250+</h2>

            <p>Volunteers</p>

          </div>
                    <div className="stat-box">

            <div className="icon orange">

              🎓

            </div>

            <h2>40+</h2>

            <p>Projects</p>

          </div>

          <div className="stat-box">

            <div className="icon lightgreen">

              🌱

            </div>

            <h2>12+</h2>

            <p>Years of Service</p>

          </div>

        </div>

      </div> */}

    </section>
  );
};

export default Hero;