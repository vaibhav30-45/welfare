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
import { useState } from "react";

const programs = [
  {
    id: 1,
    category: "Education",
    image: program1,
    title: "Child Education",
    description: "Providing free and quality education to children in need.",
  },

  {
    id: 2,
    category: "Empowerment",
    image: program2,
    title: "Women Empowerment",
    description:
      "Empowering women through skills and self-employment initiatives.",
  },

  {
    id: 3,
    category: "Skill Development",
    image: program3,
    title: "Skill Development",
    description: "Vocational training and career development programs.",
  },

  {
    id: 4,
    category: "Healthcare",
    image: program4,
    title: "Healthcare",
    description:
      "Medical camps and healthcare assistance for rural communities.",
  },

  {
    id: 5,
    category: "Environment",
    image: program5,
    title: "Environmental",
    description: "Tree plantation drives and environmental awareness.",
  },

  {
    id: 6,
    image: program6,
    category: "Skill Development",
    title: "Digital Literacy",
    description: "Promoting digital skills and computer education.",
  },
];

const Programs = () => {
  const navigate = useNavigate();

  
    const [active, setActive] = useState("All");
  
    const filteredPrograms =
      active === "All"
        ? programs
        : programs.filter(
            (item) => item.category === active
          );
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
            <button className={
                active === "All" ? "active" : ""
              }
              onClick={() => setActive("All")}>All Programs</button>

            <button
             className={
                active === "Education" ? "active" : ""
              }
              onClick={() => setActive("Education")}>Education</button>
             
            
            <button
             className={
                active === "Healthcare" ? "active" : ""
              }
              onClick={() => setActive("Healthcare")}>Healthcare</button>

            <button
             className={
                active === "Empowerment" ? "active" : ""
              }
              onClick={() => setActive("Empowerment")}>Empowerment</button>

            <button
             className={
                active === "Environment" ? "active" : ""
              }
              onClick={() => setActive("Environment")}>Environment</button>

            <button
             className={
                active === "Skill Development" ? "active" : ""
              }
              onClick={() => setActive("Skill Development")}>Skill Development</button>
          </div>

          <div className="program-grid">
            { filteredPrograms.map((item) => (
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
