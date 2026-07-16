import "../Pages/style/Programs.css";
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaChevronRight, FaArrowRight } from "react-icons/fa";

import banner from "../assets/ngo.jpg";

import program1 from "../assets/child.jpeg";
import program2 from "../assets/women.jpeg";
import program3 from "../assets/skills2.jpeg";
import program4 from "../assets/health.jpeg";
import program5 from "../assets/env1.jpeg";
import program6 from "../assets/skills.jpeg";
import SEO from "../Components/SEO";
import { useState, useEffect } from "react";

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
    category: "Healthcare",
    image: program4,
    title: "Healthcare",
    description:
      "Medical camps and healthcare assistance for rural communities.",
  },
   {
    id: 3,
    category: "Environment",
    image: program5,
    title: "Environmental",
    description: "Tree plantation drives and environmental awareness.",
  },
  {
    id: 4,
    category: "Empowerment",
    image: program2,
    title: "Women Empowerment",
    description:
      "Empowering women through skills and self-employment initiatives.",
  },

  {
    id: 5,
    category: "Skill Development",
    image: program3,
    title: "Skill Development",
    description: "Vocational training and career development programs.",
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
  const location = useLocation();
  
    const [active, setActive] = useState("All");

    
    
    useEffect(() => {

      window.scrollTo(0, 0);
    if (location.state && location.state.category) {
      setActive(location.state.category);
      
      // State ko clean karne ke liye taaki page refresh par filter reset ho sake (optional)
      window.history.replaceState({}, document.title);
    }
  }, [location]);

    const filteredPrograms =
      active === "All"
        ? programs
        : programs.filter(
            (item) => item.category === active
          );
  return (
    <>
    <SEO
title="Programs | Sahyog Welfare Foundation"
description="Explore our education, healthcare and community development programs."
keywords="NGO programs, education, health"
image="/logo.png"
url="https://www.sahyogfoundation.org/programs"
/>
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
