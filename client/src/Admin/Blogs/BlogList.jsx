import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500",
    title: "Education Changes Lives",
    category: "Education",
    date: "16 Jul 2026",
    author: "Admin",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500",
    title: "Health Awareness Camp",
    category: "Health",
    date: "14 Jul 2026",
    author: "Admin",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500",
    title: "Tree Plantation Drive",
    category: "Environment",
    date: "10 Jul 2026",
    author: "Admin",
  },
];

const BlogList = () => {

  const [search, setSearch] = useState("");

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="blog-admin-page">

      <div className="blog-admin-header">

        <div>

          <h2>Blog Management</h2>

          <p>Manage all blogs from one place.</p>

        </div>

        <Link to="/admin/blogs/add" className="add-blog-btn">

          <FaPlus />

          Add Blog

        </Link>

      </div>

      <div className="blog-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Blog..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="blog-table-wrapper">

        <table className="blog-table">

          <thead>

            <tr>

              <th>Image</th>

              <th>Title</th>

              <th>Category</th>

              <th>Date</th>

              <th>Author</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredBlogs.map((blog) => (

              <tr key={blog.id}>

                <td>

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-thumb"
                  />

                </td>

                <td>{blog.title}</td>

                <td>{blog.category}</td>

                <td>{blog.date}</td>

                <td>{blog.author}</td>

                <td>

                  <Link
                    to={`/admin/blogs/edit/${blog.id}`}
                    className="edit-btn"
                  >
                    <FaEdit />
                  </Link>

                  <button className="delete-btn">

                    <FaTrash />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default BlogList;