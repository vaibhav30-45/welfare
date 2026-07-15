import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate import karein
import '../Pages/style/Events.css';

// Events Banner Component
const EventsBanner = () => {
  return (
    <div className="events-banner">
      <div className="events-banner-overlay">
        <h1>Our Events</h1>
        <p className="events-breadcrumb">
          <span className="events-crumb-home">Home</span> &gt; <span className="events-crumb-current">Events</span>
        </p>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ id, image, day, month, title, time, location, excerpt, isPast }) => {
  const navigate = useNavigate(); // 2. Hook initialize kiya

  return (
    <div className={`event-card ${isPast ? 'past-event' : ''}`}>
      <div className="event-image-container">
        <img src={image} alt={title} />
        <div className="event-date-badge">
          <span className="badge-day">{day}</span>
          <span className="badge-month">{month}</span>
        </div>
        {isPast && <div className="past-tag">Past Event</div>}
      </div>
      
      <div className="event-contents">
        <h3 className="event-title">{title}</h3>
        <div className="event-meta">
          <span>🕒 {time}</span>
          <span>📍 {location}</span>
        </div>
        <p className="event-excerpt">{excerpt}</p>
        
        {/* 3. Button click par dynamic route navigate karein */}
        <button 
          className="event-bt" 
          onClick={() => navigate(`/events/${id}`)}
        >
          {isPast ? 'View Details' : 'Join Event'}
        </button>
      </div>
    </div>
  );
};

// Main Events Page Assembly
const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

   
  const upcomingEvents = [
    {
      id: 1,
      day: "15",
      month: "JUL",
      title: "Tree Plantation Drive",
      time: "09:00 AM - 01:00 PM",
      location: "Arera Colony, Bhopal",
      excerpt: "Join us in planting more than 500 trees across the city to build a greener and cleaner tomorrow for everyone.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600"
    },
    {
      id: 2,
      day: "22",
      month: "JUL",
      title: "Free Health Check-up Camp",
      time: "10:00 AM - 04:00 PM",
      location: "Kolar Road Slums, Bhopal",
      excerpt: "Providing free medical check-ups, sugar tests, and essential medicines to underserved families.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600"
    },
    {
      id: 3,
      day: "05",
      month: "AUG",
      title: "Women Skill Workshop",
      time: "11:00 AM - 03:00 PM",
      location: "Sahyog Center, Bhopal",
      excerpt: "A hands-on stitching and handcraft workshop designed to empower local women toward financial independence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      day: "05",
      month: "JUN",
      title: "World Environment Day Rally",
      time: "07:30 AM - 10:30 AM",
      location: "Shahpura Lake, Bhopal",
      excerpt: "An awareness march and plastic cleanup drive successfully driven by 200+ active youth volunteers.",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600"
    },
    {
      id: 5,
      day: "10",
      month: "MAY",
      title: "Digital Literacy Drive",
      time: "10:00 AM - 02:00 PM",
      location: "Govt School, Misrod",
      excerpt: "Distributed basic computer kits and hosted an introductory coding session for rural high-school students.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600"
    }
  ];

  return (
    <div className="events-page-wrapper">
      <EventsBanner />
      <div className="events-content-container">
        <div className="events-tabs">
          <button 
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events ({upcomingEvents.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Events ({pastEvents.length})
          </button>
        </div>

        <div className="events-grid">
          {activeTab === 'upcoming' ? (
            upcomingEvents.map(event => (
              <EventCard key={event.id} {...event} isPast={false} />
            ))
          ) : (
            pastEvents.map(event => (
              <EventCard key={event.id} {...event} isPast={true} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;