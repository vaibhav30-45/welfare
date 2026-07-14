import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaChevronRight, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './style/EventDetail.css';

// Master events dataset for page retrieval (Normally fetched from API)
const ALL_EVENTS = [
  {
    id: 1,
    day: "15",
    month: "JUL",
    title: "Tree Plantation Drive",
    time: "09:00 AM - 01:00 PM",
    location: "Arera Colony, Bhopal",
    excerpt: "Join us in planting more than 500 trees across the city to build a greener and cleaner tomorrow for everyone.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
    isPast: false
  },
  {
    id: 2,
    day: "22",
    month: "JUL",
    title: "Free Health Check-up Camp",
    time: "10:00 AM - 04:00 PM",
    location: "Kolar Road Slums, Bhopal",
    excerpt: "Providing free medical check-ups, sugar tests, and essential medicines to underserved families.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200",
    isPast: false
  },
  {
    id: 3,
    day: "05",
    month: "AUG",
    title: "Women Skill Workshop",
    time: "11:00 AM - 03:00 PM",
    location: "Sahyog Center, Bhopal",
    excerpt: "A hands-on stitching and handcraft workshop designed to empower local women toward financial independence.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200",
    isPast: false
  },
  {
    id: 4,
    day: "05",
    month: "JUN",
    title: "World Environment Day Rally",
    time: "07:30 AM - 10:30 AM",
    location: "Shahpura Lake, Bhopal",
    excerpt: "An awareness march and plastic cleanup drive successfully driven by 200+ active youth volunteers.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1200",
    isPast: true
  },
  {
    id: 5,
    day: "10",
    month: "MAY",
    title: "Digital Literacy Drive",
    time: "10:00 AM - 02:00 PM",
    location: "Govt School, Misrod",
    excerpt: "Distributed basic computer kits and hosted an introductory coding session for rural high-school students.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200",
    isPast: true
  }
];

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const event = ALL_EVENTS.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="evt-not-found">
        <h2>Event Not Found!</h2>
        <button className="evt-back-btn" onClick={() => navigate('/events')}>
          <FaArrowLeft /> Back to Events
        </button>
      </div>
    );
  }

  const handleRegister = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="evt-detail-page-wrapper">
      {/* Dynamic Header Banner */}
      <section className="evt-detail-banner">
        <div className="evt-banner-overlay">
          <h1>{event.title}</h1>
          <p className="evt-breadcrumb">
            <span onClick={() => navigate('/')} className="clickable-crumb">Home</span>
            <FaChevronRight className="crumb-arrow" />
            <span onClick={() => navigate('/events')} className="clickable-crumb">Events</span>
            <FaChevronRight className="crumb-arrow" />
            <span className="evt-active-crumb">Detail</span>
          </p>
        </div>
      </section>

      {/* Main Grid Layout */}
      <section className="evt-detail-content">
        <div className="evt-container">
          <div className="evt-layout-grid">
            
            {/* LEFT SIDE: MAIN DESCRIPTION */}
            <div className="evt-main-card">
              <div className="evt-image-box">
                <img src={event.image} alt={event.title} />
              </div>
              
              <div className="evt-info-section">
                <h2>Event Summary & Objectives</h2>
                <p className="evt-excerpt-text">{event.excerpt}</p>
                <p className="evt-full-paragraph">
                  This campaign is organized by Sahyog Welfare Foundation to foster direct community development. 
                  Our volunteers will gather at the spot to manage resources, guide local participants, and execute the 
                  milestones successfully. We welcome active citizen support to scale this societal change.
                </p>

                <div className="evt-specs">
                  <div className="spec-item">
                    <FaCalendarAlt className="spec-icon" />
                    <div>
                      <h4>Date Scheduled</h4>
                      <p>{event.day} {event.month}, 2026</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <FaClock className="spec-icon" />
                    <div>
                      <h4>Operational Hours</h4>
                      <p>{event.time}</p>
                    </div>
                  </div>
                  <div className="spec-item">
                    <FaMapMarkerAlt className="spec-icon" />
                    <div>
                      <h4>Venue / Location</h4>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="evt-footer">
                <button className="evt-back-btn" onClick={() => navigate('/events')}>
                  <FaArrowLeft /> Back to All Events
                </button>
              </div>
            </div>

            {/* RIGHT SIDE: INTERACTIVE FORM OR PAST ALERT STATUS */}
            <div className="evt-sidebar">
              {event.isPast ? (
                <div className="evt-status-alert-box past">
                  <h3>This Event has Ended</h3>
                  <p>This event concluded on {event.day} {event.month}. Thank you to all our incredible sponsors and volunteers who dedicated their valuable hours.</p>
                  <button className="evt-explore-more-btn" onClick={() => navigate('/events')}>Explore Active Events</button>
                </div>
              ) : (
                <div className="evt-registration-form-box">
                  <h3>Volunteer Registration</h3>
                  <p className="form-lead-desc">Join us directly on the field! Fill your quick contact data below.</p>
                  
                  {submitted ? (
                    <div className="evt-success-box">
                      <h4>🎉 Application Received!</h4>
                      <p>Thank you for registering. Our ground-team coordinators will contact you soon over WhatsApp/Call.</p>
                      <button className="evt-form-reset-btn" onClick={() => setSubmitted(false)}>Add Another Member</button>
                    </div>
                  ) : (
                    <form onSubmit={handleRegister} className="evt-form">
                      <div className="form-field">
                        <label>Your Name</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Rahul Kushwah" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="form-field">
                        <label>Email ID</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div className="form-field">
                        <label>Contact Number</label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="10-digit phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <button type="submit" className="evt-submit-btn">Confirm My Registration</button>
                    </form>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;