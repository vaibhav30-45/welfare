import React, { useState } from 'react';
import '../Pages/style/Blog.css';

// 1. Blog Banner Component
const BlogBanner = () => {
  return (
    <div className="blog-banner">
      <div className="blog-banner-overlay">
        <h1>Latest News & Blogs</h1>
        <p className="blog-breadcrumb">
          <span className="blog-crumb-home">Home</span> &gt; <span className="blog-crumb-current">Blog</span>
        </p>
      </div>
    </div>
  );
};

// 2. Single Blog Card Component
const BlogCard = ({ image, title, excerpt, date, author }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-excerpt">{excerpt}</p>
        <div className="blog-card-meta">
          <span className="blog-meta-date">{date}</span>
          <span className="blog-meta-divider">•</span>
          <span className="blog-meta-author">By {author}</span>
        </div>
        <a href="#readmore" className="blog-readmore-btn">Read More</a>
      </div>
    </div>
  );
};

// 3. Pagination Component
const BlogPagination = () => {
  return (
    <div className="blog-pagination">
      <button className="page-num active">1</button>
      <button className="page-num">2</button>
      <button className="page-num">3</button>
      <button className="page-next">Next &rarr;</button>
    </div>
  );
};

// Main Blog Page Assembly
const Blogs = () => {
  
  const blogData = [
    {
      id: 1,
      title: "The Importance of Education",
      excerpt: "Education is the key to a better future. It empowers individuals and transforms communities.",
      date: "May 20, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600"
    },
    {
      id: 2,
      title: "How You Can Help",
      excerpt: "Small efforts can bring big changes. Here are some simple ways to get involved.",
      date: "May 18, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600"
    },
    {
      id: 3,
      title: "Women Empowerment",
      excerpt: "Empowering women creates stronger families and more sustainable, vibrant communities.",
      date: "May 15, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600"
    },
    {
      id: 4,
      title: "Tree Plantation Drive",
      excerpt: "Planting trees today for a greener, healthier, and more sustainable tomorrow.",
      date: "May 05, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600"
    },
    {
      id: 5,
      title: "Health Awareness Camp",
      excerpt: "Spreading awareness and promoting good medical health in rural and remote areas.",
      date: "April 28, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600"
    },
    {
      id: 6,
      title: "Digital Literacy Program",
      excerpt: "Bridging the digital divide and empowering rural youth with modern computer education.",
      date: "April 20, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600"
    }
  ];

  return (
    <div className="blog-page-wrapper">
      <BlogBanner />
      
      <div className="blog-content-container">
        <div className="blog-grid">
          {blogData.map((blog) => (
            <BlogCard 
              key={blog.id}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
              author={blog.author}
            />
          ))}
        </div>
        
        <BlogPagination />
      </div>
    </div>
  );
};

export default Blogs;