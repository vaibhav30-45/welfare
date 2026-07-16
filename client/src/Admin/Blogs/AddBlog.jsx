import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const AddBlog = () => {

  const [blog, setBlog] = useState({
    title: "",
    category: "",
    author: "",
    image: "",
    shortDescription: "",
    description: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setBlog({
      ...blog,
      [name]: value,
    });

  };

  const handleImage = (e) => {

    setBlog({
      ...blog,
      image: URL.createObjectURL(e.target.files[0]),
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(blog);

    alert("Blog Added Successfully");

  };

  return (

    <div className="blog-form-page">

      <div className="form-header">

        <div>

          <h2>Add New Blog</h2>

          <p>Create a new blog for your website.</p>

        </div>

        <Link to="/admin/blogs" className="back-btn">
          Back
        </Link>

      </div>

      <form
        className="blog-form"
        onSubmit={handleSubmit}
      >

        <div className="form-grid">

          <div className="form-group">

            <label>Blog Title</label>

            <input
              type="text"
              name="title"
              placeholder="Enter Blog Title"
              value={blog.title}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Category</label>

            <select
              name="category"
              value={blog.category}
              onChange={handleChange}
              required
            >

              <option value="">Select Category</option>

              <option>Education</option>

              <option>Health</option>

              <option>Environment</option>

              <option>Women Empowerment</option>

              <option>Social Work</option>

            </select>

          </div>

          <div className="form-group">

            <label>Author Name</label>

            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={blog.author}
              onChange={handleChange}
              required
            />

          </div>

          <div className="form-group">

            <label>Upload Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
            />

          </div>

        </div>

        {blog.image && (

          <div className="image-preview">

            <img
              src={blog.image}
              alt="Preview"
            />

          </div>

        )}

        <div className="form-group">

          <label>Short Description</label>

          <textarea
            rows="3"
            name="shortDescription"
            placeholder="Write Short Description..."
            value={blog.shortDescription}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-group">

          <label>Full Blog Description</label>

          <textarea
            rows="8"
            name="description"
            placeholder="Write Complete Blog..."
            value={blog.description}
            onChange={handleChange}
            required
          />

        </div>

        <div className="form-buttons">

          <button
            type="submit"
            className="save-btn"
          >
            Publish Blog
          </button>

          <Link
            to="/admin/blogs"
            className="cancel-btn"
          >
            Cancel
          </Link>

        </div>

      </form>

    </div>

  );

};

export default AddBlog;