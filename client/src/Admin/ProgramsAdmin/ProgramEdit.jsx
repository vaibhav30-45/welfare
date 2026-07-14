import { useState } from "react";
import "./ProgramsAdmin.css";

const ProgramEdit = () => {

  const [formData, setFormData] = useState({

    title: "Child Education",

    category: "Education",

    description:
      "Providing quality education for underprivileged children.",

    image: null,

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };

  const handleImage = (e) => {

    setFormData({

      ...formData,

      image: e.target.files[0],

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Program Updated Successfully");

  };

  return (

    <div className="admin-page">

      <h2>Edit Program</h2>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >        <div className="form-group">

          <label>Program Name</label>

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

            <option>Education</option>

            <option>Healthcare</option>

            <option>Women Empowerment</option>

            <option>Environment</option>

            <option>Skill Development</option>

          </select>

        </div>

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="6"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

        </div>
                <div className="form-group">

          <label>Change Image</label>

          <input
            type="file"
            onChange={handleImage}
          />

        </div>

        <button
          className="save-btn"
          type="submit"
        >

          Update Program

        </button>

      </form>

    </div>

  );

};

export default ProgramEdit;