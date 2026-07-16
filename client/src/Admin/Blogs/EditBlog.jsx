import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Blog.css";

const blogData = [
  {
    id: 1,
    title: "Education Changes Lives",
    category: "Education",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0?w=800",
    shortDescription:
      "Education is the most powerful weapon to change the world.",
    description:
      "This is a sample blog description. Replace it with data coming from your backend.",
  },
];

const EditBlog = () => {

  const { id } = useParams();

  const existingBlog =
    blogData.find((item) => item.id === Number(id)) || {};

  const [blog, setBlog] = useState(existingBlog);

  const handleChange = (e) => {

    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
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

    alert("Blog Updated Successfully");

    console.log(blog);

  };

  return (

    <div className="blog-form-page">

      <div className="form-header">

        <div>

          <h2>Edit Blog</h2>

          <p>Update blog information.</p>

        </div>

        <Link to="/admin/blogs" className="back-btn">
          Back
        </Link>

      </div>

      <form className="blog-form" onSubmit={handleSubmit}>

        <div className="form-grid">

          <div className="form-group">

            <label>Blog Title</label>

            <input
              type="text"
              name="title"
              value={blog.title || ""}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Category</label>

            <select
              name="category"
              value={blog.category || ""}
              onChange={handleChange}
            >

              <option>Education</option>

              <option>Health</option>

              <option>Environment</option>

              <option>Women Empowerment</option>

              <option>Social Work</option>

            </select>

          </div>

          <div className="form-group">

            <label>Author</label>

            <input
              type="text"
              name="author"
              value={blog.author || ""}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Change Image</label>

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
            value={blog.shortDescription || ""}
            onChange={handleChange}
          />

        </div>

        <div className="form-group">

          <label>Full Description</label>

          <textarea
            rows="8"
            name="description"
            value={blog.description || ""}
            onChange={handleChange}
          />

        </div>

        <div className="form-buttons">

          <button
            type="submit"
            className="save-btn"
          >
            Update Blog
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

export default EditBlog;