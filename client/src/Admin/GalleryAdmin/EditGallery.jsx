import { useState } from "react";
import "./GalleryAdmin.css";

import demoImage from "../../assets/aboutt.jpg";

const EditGallery = () => {

  const [formData, setFormData] = useState({

    title: "Tree Plantation Drive",

    category: "Environment",

    description:
      "Tree plantation campaign organised by Sahyog Welfare Foundation.",

    image: demoImage,

    newImage: null,

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };

  const handleImage = (e) => {

    const file = e.target.files[0];

    if (file) {

      setFormData({

        ...formData,

        newImage: file,

      });

    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Gallery Updated Successfully");

  };

  return (

    <div className="admin-page">

      <h2>Edit Gallery Image</h2>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >
                <div className="form-row">

          <div className="form-group">

            <label>Gallery Title</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >

              <option value="Education">Education</option>

              <option value="Healthcare">Healthcare</option>

              <option value="Women">Women Empowerment</option>

              <option value="Environment">Environment</option>

              <option value="Events">Events</option>

            </select>

          </div>

        </div>

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

        </div>
                <div className="form-group">

          <label>Current Image</label>

          <div className="current-image">

            <img
              src={
                formData.newImage
                  ? URL.createObjectURL(formData.newImage)
                  : formData.image
              }
              alt="Gallery"
            />

          </div>

        </div>

        <div className="form-group">

          <label>Replace Image</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

        </div>

        <button
          type="submit"
          className="save-btn"
        >

          Update Gallery

        </button>

      </form>

    </div>

  );

};

export default EditGallery;