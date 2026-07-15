import "../Pages/style/Programs.css";
import { Link, useNavigate } from 'react-router-dom'
import { FaChevronRight, FaArrowRight } from "react-icons/fa";

import banner from "../assets/ngo.jpg";

import program1 from "../assets/program1.jpg";
import program2 from "../assets/program2.jpg";
import program3 from "../assets/program1.jpg";
import program4 from "../assets/program1.jpg";
import program5 from "../assets/program1.jpg";
import program6 from "../assets/program2.jpg";

const programs = [
  {
    id: 1,
    image: program1,
    title: "Child Education",
    description: "Providing free and quality education to children in need.",
  },

  {
    id: 2,
    image: program2,
    title: "Women Empowerment",
    description:
      "Empowering women through skills and self-employment initiatives.",
  },

  {
    id: 3,
    image: program3,
    title: "Skill Development",
    description: "Vocational training and career development programs.",
  },

  {
    id: 4,
    image: program4,
    title: "Healthcare",
    description:
      "Medical camps and healthcare assistance for rural communities.",
  },

  {
    id: 5,
    image: program5,
    title: "Environmental",
    description: "Tree plantation drives and environmental awareness.",
  },

  {
    id: 6,
    image: program6,
    title: "Digital Literacy",
    description: "Promoting digital skills and computer education.",
  },
];

const Programs = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="program-banner">
        <img src={banner} alt="" />

        <div className="banner-overlay"></div>

        <div className="banner-content">
          <h1>Programs</h1>

          <p>
            Home
            <FaChevronRight />
            Programs
          </p>
        </div>
      </section>

      <section className="program-page">
        <div className="container">
          <div className="program-tabs">
            <button className="active">All Programs</button>

            <button>Education</button>

            <button>Healthcare</button>

            <button>Empowerment</button>

            <button>Environment</button>

            <button>Skill Development</button>
          </div>

          <div className="program-grid">
            {programs.map((item) => (
              <div className="program-card" key={item.id}>
                <div className="program-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="program-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button onClick={() => navigate(`/programs/${item.id}`)}>
                    Read More
                    <FaArrowRight />
                  </button>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
