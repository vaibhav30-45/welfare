import React, { useState } from 'react';

const EventModal = ({ event, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan backend API call integration easily kar sakte hain
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        {event.isPast ? (
          /* View Mode for Concluded/Past Events */
          <div className="modal-view-mode">
            <h2>{event.title}</h2>
            <div className="modal-event-meta">
              <p><strong>🕒 Time:</strong> {event.time}</p>
              <p><strong>📍 Location:</strong> {event.location}</p>
            </div>
            <p className="past-notice-text">This event has already concluded. Thank you to all our volunteers who participated!</p>
            <button className="modal-action-btn close" onClick={onClose}>Close Window</button>
          </div>
        ) : (
          /* Registration Form Mode for Upcoming Events */
          <div className="modal-form-mode">
            <h2>Register for {event.title}</h2>
            <p className="modal-subtitle">Join us as a volunteer and make a difference!</p>
            
            {submitted ? (
              <div className="modal-success-msg">
                <h3>🎉 Registration Successful!</h3>
                <p>Thank you for signing up. Our NGO team will contact you shortly with the event details.</p>
                <button className="modal-action-btn" onClick={onClose}>Awesome</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <button type="submit" className="modal-action-btn">Confirm Registration</button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventModal;