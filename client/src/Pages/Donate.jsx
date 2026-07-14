import "../Pages/style/Donate.css";
import { FaChevronRight, FaCheckCircle } from "react-icons/fa";
import banner from "../assets/donate.jpg";

const Donate = () => {
  return (
    <>

      {/* ================= Banner ================= */}

      <section className="donate-banner">

        <img
          src={banner}
          alt="Donate Banner"
        />

        <div className="donate-overlay"></div>

        <div className="donate-banner-content">

          <h1>Donate</h1>

          <p>

            Home

            <FaChevronRight />

            Donate

          </p>

        </div>

      </section>

      {/* ================= Donate Cards ================= */}

      <section className="donate-page">

        <div className="container">

          <div className="donate-grid">

            {/* Left Card */}

            <div className="donate-card">

              <h2>
                Your Contribution
                <br />
                Can Change Lives
              </h2>

              <p>
                Your donation helps us continue our
                mission and support more people in
                need through education, healthcare,
                women empowerment and community
                development initiatives.
              </p>

              <div className="donate-points">

                <div className="point">

                  <FaCheckCircle />

                  <span>
                    100% Donation Transparency
                  </span>

                </div>

                <div className="point">

                  <FaCheckCircle />

                  <span>
                    80G Tax Benefits Available
                  </span>

                </div>

                <div className="point">

                  <FaCheckCircle />

                  <span>
                    Secure & Safe Transactions
                  </span>

                </div>

              </div>

              <button className="donate-btn">

                Donate Now

              </button>

            </div>
                        {/* ================= Right Card ================= */}

            <div className="qr-card">

              <h3>Scan & Donate</h3>

              <p className="upi-id">
                UPI ID : sahyogfoundation@upi
              </p>

              {/* QR Placeholder */}

              <div className="qr-placeholder">

                <div className="qr-box">

                  <span>QR CODE</span>

                </div>

              </div>

              {/* Payment Apps */}

              <div className="payment-methods">

                <div className="pay-item gpay">
                  GPay
                </div>

                <div className="pay-item phonepe">
                  PhonePe
                </div>

                <div className="pay-item paytm">
                  Paytm
                </div>

              </div>

            </div>

          </div>

          {/* ================= Bank Details ================= */}

          <div className="bank-card">

            <div className="bank-left">

              <h2>
                Bank Details
              </h2>

              <div className="bank-row">

                <span>Bank Name</span>

                <strong>State Bank of India</strong>

              </div>

              <div className="bank-row">

                <span>Account Name</span>

                <strong>Sahyog Welfare Foundation</strong>

              </div>

              <div className="bank-row">

                <span>Account Number</span>

                <strong>123456789001</strong>

              </div>

              <div className="bank-row">

                <span>IFSC Code</span>

                <strong>SBIN0001234</strong>

              </div>

            </div>

            {/* Right Side Illustration */}

            <div className="bank-icon">

              🏦

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default Donate;