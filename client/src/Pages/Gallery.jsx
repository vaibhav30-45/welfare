import { useState } from "react";
import "../Pages/style/Gallery.css";
import { FaChevronRight } from "react-icons/fa";

import banner from "../assets/gallery.jpg";

import img1 from "../assets/gallery.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery.jpg";
import img4 from "../assets/gallery.jpg";
import img5 from "../assets/gallery2.jpg";
import img6 from "../assets/gallery3.jpg";

const galleryData = [

  {
    id: 1,
    image: img1,
    category: "Events",
  },

  {
    id: 2,
    image: img2,
    category: "Programs",
  },

  {
    id: 3,
    image: img3,
    category: "Activities",
  },

  {
    id: 4,
    image: img4,
    category: "Events",
  },

  {
    id: 5,
    image: img5,
    category: "Programs",
  },

  {
    id: 6,
    image: img6,
    category: "Activities",
  },

];

const Gallery = () => {

  const [active, setActive] = useState("All");

  const filteredGallery =
    active === "All"
      ? galleryData
      : galleryData.filter(
          (item) => item.category === active
        );

  return (

    <>

      {/* ================= Banner ================= */}

      <section className="gallery-banner">

        <div className="gallery-overlay"></div>

        <img
          src={banner}
          alt="Gallery Banner"
        />

        <div className="gallery-banner-content">

          <h1>Gallery</h1>

          <p>

            Home

            <FaChevronRight />

            Gallery

          </p>

        </div>

      </section>

      {/* ================= Gallery ================= */}

      <section className="gallery-page">

        <div className="container">

          {/* Filter Buttons */}

          <div className="gallery-filter">

            <button
              className={
                active === "All" ? "active" : ""
              }
              onClick={() => setActive("All")}
            >
              All
            </button>

            <button
              className={
                active === "Events" ? "active" : ""
              }
              onClick={() => setActive("Events")}
            >
              Events
            </button>

            <button
              className={
                active === "Programs" ? "active" : ""
              }
              onClick={() => setActive("Programs")}
            >
              Programs
            </button>

            <button
              className={
                active === "Activities" ? "active" : ""
              }
              onClick={() => setActive("Activities")}
            >
              Activities
            </button>

          </div>

          {/* Gallery Grid */}

          <div className="gallery-grid">
                      {filteredGallery.map((item) => (

            <div
              className="gallery-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.category}
              />

              <div className="gallery-hover">

                <span>
                  {item.category}
                </span>

              </div>

            </div>

          ))}

          </div>

        </div>

      </section>

    </>

  );

};

export default Gallery;