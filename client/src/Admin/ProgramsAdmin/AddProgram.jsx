import { useState } from "react";
import "./ProgramsAdmin.css";

const AddProgram = () => {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
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

    console.log(formData);

    alert("Program Added Successfully");

  };

  return (

    <div className="admin-page">

      <h2>Add Program</h2>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >        <div className="form-group">

          <label>
            Program Name
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter Program Name"
            value={formData.title}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">

          <label>
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Category
            </option>

            <option value="Education">
              Education
            </option>

            <option value="Healthcare">
              Healthcare
            </option>

            <option value="Women Empowerment">
              Women Empowerment
            </option>

            <option value="Environment">
              Environment
            </option>

            <option value="Skill Development">
              Skill Development
            </option>

          </select>

        </div>

        <div className="form-group">

          <label>
            Description
          </label>

          <textarea
            rows="6"
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

        </div>
                <div className="form-group">

          <label>
            Upload Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

        </div>

        <button
          className="save-btn"
          type="submit"
        >
          Save Program
        </button>

      </form>

    </div>

  );

};

export default AddProgram;