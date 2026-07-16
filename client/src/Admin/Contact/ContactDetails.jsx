import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Contact.css";
import { FaArrowLeft } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    name: "Rishita Chouhan",
    email: "rishita@gmail.com",
    phone: "9876543210",
    subject: "Donation",
    date: "16 July 2026",
    message:
      "Hello, I want to donate for child education. Please share the donation process and required details.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9898989898",
    subject: "Volunteer",
    date: "15 July 2026",
    message:
      "I would like to join your NGO as a volunteer. Please let me know the registration process.",
  },
  {
    id: 3,
    name: "Anjali Verma",
    email: "anjali@gmail.com",
    phone: "9876501234",
    subject: "Education",
    date: "14 July 2026",
    message:
      "I want to know more about your education programs for children.",
  },
  {
    id: 4,
    name: "Amit Singh",
    email: "amit@gmail.com",
    phone: "9876511111",
    subject: "Health Camp",
    date: "12 July 2026",
    message:
      "Can I participate in the upcoming health awareness camp? Please share the details.",
  },
];

const ContactDetails = () => {

  const { id } = useParams();

  const contact = contactData.find(
    (item) => item.id === Number(id)
  );

  if (!contact) {
    return (
      <div className="contact-page">
        <h2>Message Not Found</h2>
      </div>
    );
  }

  return (

    <div className="contact-page">

      <div className="details-card">

        <div className="details-header">

          <h2>Contact Details</h2>

          <Link
            to="/admin/contact"
            className="back-btn"
          >
            <FaArrowLeft />
            Back
          </Link>

        </div>

        <div className="details-grid">

          <div className="detail-box">

            <label>Name</label>

            <p>{contact.name}</p>

          </div>

          <div className="detail-box">

            <label>Email</label>

            <p>{contact.email}</p>

          </div>

          <div className="detail-box">

            <label>Phone</label>

            <p>{contact.phone}</p>

          </div>

          <div className="detail-box">

            <label>Subject</label>

            <p>{contact.subject}</p>

          </div>

          <div className="detail-box">

            <label>Date</label>

            <p>{contact.date}</p>

          </div>

        </div>

        <div className="detail-box full-width">

          <label>Message</label>

          <p>{contact.message}</p>

        </div>

      </div>

    </div>

  );

};

export default ContactDetails;