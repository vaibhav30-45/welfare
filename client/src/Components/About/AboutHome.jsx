import "./AboutHome.css";
import { Link, useNavigate } from "react-router-dom";
import about1 from "../../assets/events2.jpeg";
import about2 from "../../assets/events1.jpeg";
import about3 from "../../assets/events4.jpeg";
import directorImg from "../../assets/director.jpeg";

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

            
             <Link to="/about" className="about-btn">
               Learn More

              <FaArrowRight />
              </Link>
              

            <div className="about-founder">

              <img
                src={directorImg}
                alt=""
              />

              <div>

                <h4>

                  Mr. Rajkumar Vishwakarma

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