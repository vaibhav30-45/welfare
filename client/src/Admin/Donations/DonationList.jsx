import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Donation.css";
import { FaSearch, FaEye } from "react-icons/fa";

const donationData = [
  {
    id: 1,
    name: "Rishita Chouhan",
    amount: "₹1,000",
    date: "16 Jul 2026",
    payment: "UPI",
    status: "Completed",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    amount: "₹500",
    date: "15 Jul 2026",
    payment: "Razorpay",
    status: "Pending",
  },
  {
    id: 3,
    name: "Anjali Verma",
    amount: "₹2,500",
    date: "13 Jul 2026",
    payment: "Bank Transfer",
    status: "Completed",
  },
  {
    id: 4,
    name: "Amit Singh",
    amount: "₹750",
    date: "12 Jul 2026",
    payment: "UPI",
    status: "Completed",
  },
  {
    id: 5,
    name: "Neha Patel",
    amount: "₹1,200",
    date: "10 Jul 2026",
    payment: "Razorpay",
    status: "Pending",
  },
];

const DonationList = () => {
  const [search, setSearch] = useState("");

  const filteredData = donationData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="donation-page">

      <div className="donation-header">

        <div>
          <h2>Donation Management</h2>
          <p>View all donation records</p>
        </div>

      </div>

      <div className="donation-search">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search donor name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="donation-table-wrapper">

        <table className="donation-table">

          <thead>

            <tr>
              <th>Donor Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredData.map((item) => (

              <tr key={item.id}>

                <td>{item.name}</td>

                <td>{item.amount}</td>

                <td>{item.date}</td>

                <td>{item.payment}</td>

                <td>

                  <span
                    className={
                      item.status === "Completed"
                        ? "status completed"
                        : "status pending"
                    }
                  >
                    {item.status}
                  </span>

                </td>

                <td>

                  <Link
                    to={`/admin/donations/${item.id}`}
                    className="view-btn"
                  >
                    <FaEye /> View
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

export default DonationList;