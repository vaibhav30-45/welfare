import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import { FaSearch, FaEye } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    name: "Rishita Chouhan",
    email: "rishita@gmail.com",
    phone: "9876543210",
    subject: "Donation",
    date: "16 Jul 2026",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9898989898",
    subject: "Volunteer",
    date: "15 Jul 2026",
  },
  {
    id: 3,
    name: "Anjali Verma",
    email: "anjali@gmail.com",
    phone: "9876501234",
    subject: "Education",
    date: "14 Jul 2026",
  },
  {
    id: 4,
    name: "Amit Singh",
    email: "amit@gmail.com",
    phone: "9876511111",
    subject: "Health Camp",
    date: "12 Jul 2026",
  },
];

const ContactList = () => {

  const [search, setSearch] = useState("");

  const filteredContacts = contactData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="contact-page">

      <div className="contact-header">

        <div>

          <h2>Contact Messages</h2>

          <p>View all messages received from the website.</p>

        </div>

      </div>

      <div className="contact-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search donor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="contact-table-wrapper">

        <table className="contact-table">

          <thead>

            <tr>

              <th>Name</th>

              <th>Email</th>

              <th>Phone</th>

              <th>Subject</th>

              <th>Date</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredContacts.map((item) => (

              <tr key={item.id}>

                <td>{item.name}</td>

                <td>{item.email}</td>

                <td>{item.phone}</td>

                <td>{item.subject}</td>

                <td>{item.date}</td>

                <td>

                  <Link
                    to={`/admin/contact/${item.id}`}
                    className="view-btn"
                  >
                    <FaEye />

                    View

                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default ContactList;