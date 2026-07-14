import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './style/BlogDetails.css';


const ALL_BLOGS = [
  {
    id: 1,
    title: "The Importance of Education",
    fullContent: "Education is the ultimate foundation for social change and individual empowerment. In underserved communities, quality education breaks the generational cycle of poverty. Sahyog Welfare Foundation runs specialized remedial classes, provides learning kits, and mentors children to ensure they don't drop out of school. By investing in a child's learning journey, we aren't just teaching a syllabus; we are broadening their worldview, giving them critical thinking skills, and sharpening their talent to build a better future for themselves and their families.",
    date: "May 20, 2024",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200"
  },
  {
    id: 2,
    title: "How You Can Help",
    fullContent: "You don't need massive funds to create a massive impact. True charity stems from regular, structured support and active volunteerism. At Sahyog, we welcome individuals who can donate just two hours a week to teach a skill, distribute meals, or manage community plantation drives. Every small act adds up to monumental social progress. Whether it is donating books, sponsoring a child's annual education fees, or spreading awareness on social media—your active involvement keeps our mission alive and moving forward.",
    date: "May 18, 2024",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200"
  },
  {
    id: 3,
    title: "Women Empowerment",
    fullContent: "When you empower a man, you develop an individual; when you empower a woman, you build an entire generation. Our self-reliance workshops focus on imparting vocational skills like sewing, handcraft production, and basic computer knowledge to domestic women. This enables them to earn their livelihood right from their doorsteps. Financial independence brings newfound dignity and a definitive voice in family decisions, drastically improving the quality of nutrition and formal schooling their children receive.",
    date: "May 15, 2024",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200"
  }
];

// 1. Dynamic Detail Banner Component
const DetailBanner = ({ title }) => {
  return (
    <div className="detail-banner">
      <div className="detail-banner-overlay">
        <h2>{title}</h2>
        <p className="detail-breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to="/blogs">Blog</Link> &gt; <span className="active-crumb">Details</span>
        </p>
      </div>
    </div>
  );
};

// 2. Sidebar Component (Recent Posts Link)
const BlogSidebar = ({ currentId }) => {
  const recentPosts = ALL_BLOGS.filter(b => b.id !== parseInt(currentId));

  return (
    <div className="blog-sidebar">
      <div className="sidebar-widget">
        <h3>Recent Stories</h3>
        <ul className="recent-posts-list">
          {recentPosts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`} className="recent-post-link">
                <img src={post.image} alt="" className="sidebar-thumb" />
                <div className="sidebar-post-info">
                  <h4>{post.title}</h4>
                  <span>{post.date}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-cta-widget">
        <h3>Make a Difference</h3>
        <p>Your support can bring education and healthcare to a child today.</p>
        <button className="sidebar-donate-btn">Donate Now</button>
      </div>
    </div>
  );
};

// Main Blog Detail Component Assembly
const BlogDetails = () => {
  const { id } = useParams(); 
  
  const blog = ALL_BLOGS.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-not-found">
        <h2>Blog post not found!</h2>
        <Link to="/blogs" className="back-btn">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail-wrapper">
      <DetailBanner title={blog.title} />
      
      <div className="detail-container">
        <div className="detail-layout-grid">
          
          {/* LEFT SIDE: MAIN BLOG CONTENT */}
          <article className="main-blog-article">
            <div className="article-main-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            
            <div className="article-meta-info">
              <span className="art-author">👤 By {blog.author}</span>
              <span className="art-divider">|</span>
              <span className="art-date">📅 {blog.date}</span>
            </div>
            
            <div className="article-body">
              <p className="lead-paragraph">
                {blog.fullContent.substring(0, 120)}...
              </p>
              <p>
                {blog.fullContent}
              </p>
              <blockquote>
                "True happiness lies in working for the betterment and upliftment of humanity." — Sahyog Welfare Foundation
              </blockquote>
            </div>
            
            <div className="article-footer">
              <Link to="/blogs" className="back-to-blogs-btn">&larr; Back to All Blogs</Link>
            </div>
          </article>
          
          {/* RIGHT SIDE: SIDEBAR */}
          <BlogSidebar currentId={id} />
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;