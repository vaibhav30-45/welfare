import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Donation.css";
import { FaArrowLeft } from "react-icons/fa";

const donationData = [
  {
    id: 1,
    name: "Rishita Chouhan",
    email: "rishita@gmail.com",
    phone: "9876543210",
    amount: "₹1,000",
    payment: "UPI",
    transaction: "UPI784563214",
    status: "Completed",
    date: "16 July 2026",
    address: "Indore, Madhya Pradesh",
    message: "Keep doing great work. Happy to support this initiative.",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876501234",
    amount: "₹500",
    payment: "Razorpay",
    transaction: "RZP56321489",
    status: "Pending",
    date: "15 July 2026",
    address: "Bhopal, Madhya Pradesh",
    message: "Hope this donation helps someone.",
  },
  {
    id: 3,
    name: "Anjali Verma",
    email: "anjali@gmail.com",
    phone: "9876547890",
    amount: "₹2,500",
    payment: "Bank Transfer",
    transaction: "BNK99887766",
    status: "Completed",
    date: "13 July 2026",
    address: "Ujjain, Madhya Pradesh",
    message: "Best wishes to the foundation.",
  },
];

const DonationDetails = () => {
  const { id } = useParams();

  const donation = donationData.find(
    (item) => item.id === Number(id)
  );

  if (!donation) {
    return (
      <div className="donation-page">
        <h2>Donation Not Found</h2>
      </div>
    );
  }

  return (
    <div className="donation-page">

      <div className="details-card">

        <div className="details-header">

          <h2>Donation Details</h2>

          <Link
            to="/admin/donations"
            className="back-btn"
          >
            <FaArrowLeft />
            Back
          </Link>

        </div>

        <div className="details-grid">

          <div className="detail-box">
            <label>Donor Name</label>
            <p>{donation.name}</p>
          </div>

          <div className="detail-box">
            <label>Email</label>
            <p>{donation.email}</p>
          </div>

          <div className="detail-box">
            <label>Phone</label>
            <p>{donation.phone}</p>
          </div>

          <div className="detail-box">
            <label>Donation Amount</label>
            <p>{donation.amount}</p>
          </div>

          <div className="detail-box">
            <label>Payment Method</label>
            <p>{donation.payment}</p>
          </div>

          <div className="detail-box">
            <label>Transaction ID</label>
            <p>{donation.transaction}</p>
          </div>

          <div className="detail-box">
            <label>Status</label>

            <span
              className={
                donation.status === "Completed"
                  ? "status completed"
                  : "status pending"
              }
            >
              {donation.status}
            </span>

          </div>

          <div className="detail-box">
            <label>Donation Date</label>
            <p>{donation.date}</p>
          </div>

        </div>

        <div className="detail-box full-width">

          <label>Address</label>

          <p>{donation.address}</p>

        </div>

        <div className="detail-box full-width">

          <label>Message</label>

          <p>{donation.message}</p>

        </div>

      </div>

    </div>
  );
};

export default DonationDetails;