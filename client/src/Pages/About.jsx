import "../Pages/style/About.css";
import {
  FaCheckCircle
} from "react-icons/fa";

import banner from "../assets/aboutt.jpg";
import storyImg from "../assets/about.jpg";

const journey = [
  {
    year: "2012",
    title: "Foundation",
    desc: "Established",
  },
  {
    year: "2014",
    title: "First Education",
    desc: "Program",
  },
  {
    year: "2016",
    title: "Health Camps",
    desc: "Initiated",
  },
  {
    year: "2018",
    title: "Women Empowerment",
    desc: "Programs",
  },
  {
    year: "2022",
    title: "Expanded",
    desc: "To More Communities",
  },
];

const About = () => {
  return (
    <>

      {/* ================= Banner ================= */}

      <section
        className="about-banner"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >

        <div className="about-overlay">

          <div className="container">

            <h1>About Us</h1>

            <p>
              Home
              <span>&gt;</span>
              About Us
            </p>

          </div>

        </div>

      </section>

      {/* ================= Story ================= */}

      <section className="story-section">

        <div className="container story-wrapper">

          {/* Left */}

          <div className="story-left">

            <h2>
              Our Story
            </h2>

            <p>

              Sahyog Welfare Foundation was established
              with a vision to bring positive change in
              society.

              <br />
              <br />

              Over the years, we have worked on various
              initiatives that have transformed
              thousands of lives.

            </p>

            <div className="story-list">

              <div className="story-item">

                <FaCheckCircle />

                <span>
                  Registered Non-Profit Organization
                </span>

              </div>

              <div className="story-item">

                <FaCheckCircle />

                <span>
                  Transparent & Accountable
                </span>

              </div>

              <div className="story-item">

                <FaCheckCircle />

                <span>
                  Dedicated & Experienced Team
                </span>

              </div>

              <div className="story-item">

                <FaCheckCircle />

                <span>
                  Community Driven Impact
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="story-right">

            <img
              src={storyImg}
              alt=""
            />

          </div>

        </div>

      </section>

      {/* ================= Mission Vision ================= */}

      <section className="mission-section">

        <div className="container">

          <div className="mission-wrapper">

            <div className="mission-box">

              <h3>
                Our Mission
              </h3>

              <p>

                To empower communities through education,
                healthcare and sustainable development.

              </p>

            </div>

            <div className="mission-box">

              <h3>
                Our Vision
              </h3>

              <p>

                To build a just, equal and compassionate
                society where everyone has the
                opportunity to thrive.

              </p>

            </div>

            <div className="mission-box">

              <h3>
                Our Values
              </h3>

              <p>

                Integrity,
                Transparency,
                Compassion,
                Inclusion and Commitment.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= Journey ================= */}

      <section className="journey-section">

        <div className="container">

          <h2 className="journey-title">
            Our Journey
          </h2>

          <div className="journey-line">

            {journey.map((item, index) => (

              <div
                className="journey-item"
                key={index}
              >

                <span className="journey-year">
                  {item.year}
                </span>

                <div className="journey-dot"></div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
};

export default About;