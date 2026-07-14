import "./AboutHome.css";
import about1 from "../../assets/education.jpeg";
import about2 from "../../assets/education.jpeg";
import about3 from "../../assets/education.jpeg";

import {
  FaCheckCircle,
  FaArrowRight,
  FaHandsHelping,
} from "react-icons/fa";

const AboutHome = () => {
  return (
    <section className="about-home">

      <div className="container about-wrapper">

        {/* LEFT */}

        <div className="about-left">

          <div className="image-grid">

            <div className="img-one">
              <img src={about1} alt="" />
            </div>

            <div className="img-two">
              <img src={about2} alt="" />
            </div>

            <div className="img-three">
              <img src={about3} alt="" />
            </div>

          </div>

          <div className="experience-card">

            <FaHandsHelping className="exp-icon" />

            <div>

              <h2>12+</h2>

              <span>Years of Service</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <span className="section-tag">

            ABOUT OUR NGO

          </span>

          <h2>

            Together We Create
            <br />

            Better Communities

          </h2>

          <p>

            Sahyog Welfare Foundation is committed to
            improving lives through education,
            healthcare, women empowerment,
            environmental awareness and sustainable
            community development.

          </p>

          <div className="about-features">

            <div className="feature">

              <FaCheckCircle />

              <span>

                Transparent & Trusted NGO

              </span>

            </div>

            <div className="feature">

              <FaCheckCircle />

              <span>

                Registered Non-Profit Organization

              </span>

            </div>

            <div className="feature">

              <FaCheckCircle />

              <span>

                Education & Skill Development

              </span>

            </div>

            <div className="feature">

              <FaCheckCircle />

              <span>

                Healthcare Initiatives

              </span>

            </div>

            <div className="feature">

              <FaCheckCircle />

              <span>

                Women Empowerment Programs

              </span>

            </div>

            <div className="feature">

              <FaCheckCircle />

              <span>

                Environmental Protection

              </span>

            </div>

          </div>
                    <div className="about-bottom">

            <button className="about-btn">

              Learn More

              <FaArrowRight />

            </button>

            <div className="about-founder">

              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt=""
              />

              <div>

                <h4>

                  Rajesh Sharma

                </h4>

                <span>

                  Founder & President

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHome;