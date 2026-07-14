import "./GalleryAdmin.css";
import { Link } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";

import img1 from "../../assets/aboutt.jpg";
import img2 from "../../assets/aboutt.jpg";
import img3 from "../../assets/aboutt.jpg";
import img4 from "../../assets/aboutt.jpg";

const gallery = [

  {
    id:1,
    title:"Tree Plantation",
    category:"Environment",
    image:img1
  },

  {
    id:2,
    title:"Blood Donation",
    category:"Healthcare",
    image:img2
  },

  {
    id:3,
    title:"Women Empowerment",
    category:"Women",
    image:img3
  },

  {
    id:4,
    title:"Education Camp",
    category:"Education",
    image:img4
  }

];

const GalleryList = () => {

  return (

    <div className="admin-page">

      <div className="page-header">

        <div>

          <h2>Gallery Management</h2>

          <p>
            Add, Update and Delete Gallery Images
          </p>

        </div>

        <Link
          to="/admin/gallery/add"
          className="add-btn"
        >

          <FaPlus />

          Add Image

        </Link>

      </div>

      <div className="toolbar">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search Images..."
          />

        </div>

      </div>

      <div className="gallery-admin-grid">
                {gallery.map((item)=>(

          <div
            className="gallery-admin-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-admin-content">

              <span>

                {item.category}

              </span>

              <h3>

                {item.title}

              </h3>

              <div className="gallery-admin-buttons">

                <Link
                  to={`/admin/gallery/edit/${item.id}`}
                  className="edit-btn"
                >

                  Edit

                </Link>

                <button className="delete-btn">

                  Delete

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default GalleryList;