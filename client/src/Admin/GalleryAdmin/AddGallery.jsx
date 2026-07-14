import { useState } from "react";
import "./GalleryAdmin.css";

const AddGallery = () => {

  const [formData, setFormData] = useState({

    title: "",

    category: "",

    description: "",

    images: []

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value

    });

  };

  const handleImages = (e) => {

    setFormData({

      ...formData,

      images: [...e.target.files]

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    alert("Gallery Images Added Successfully");

  };

  return (

    <div className="admin-page">

      <h2>Add Gallery Images</h2>

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
              placeholder="Enter Gallery Title"
              required
            />

          </div>

          <div className="form-group">

            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >

              <option value="">Select Category</option>

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
            placeholder="Gallery Description"
          />

        </div>
                <div className="form-group">

          <label>Upload Images</label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImages}
          />

        </div>

        {

          formData.images.length > 0 && (

            <div className="preview-grid">

              {

                formData.images.map((image,index)=>(

                  <div
                    className="preview-card"
                    key={index}
                  >

                    <img
                      src={URL.createObjectURL(image)}
                      alt=""
                    />

                  </div>

                ))

              }

            </div>

          )

        }

        <button
          type="submit"
          className="save-btn"
        >

          Save Gallery

        </button>

      </form>

    </div>

  );

};

export default AddGallery;