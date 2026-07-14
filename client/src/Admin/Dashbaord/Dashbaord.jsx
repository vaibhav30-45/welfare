import "./Dashboard.css";

import {
  FaUsers,
  FaBookOpen,
  FaImages,
  FaCalendarAlt,
  FaArrowUp,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard-page">

      {/* Heading */}

      <div className="dashboard-header">

        <div>

          <h1>Dashboard</h1>

          <p>
            Welcome back, Admin 👋
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stats-card">

          <div className="stats-icon users">

            <FaUsers />

          </div>

          <div>

            <h2>1,250</h2>

            <p>Total Volunteers</p>

            <span>

              <FaArrowUp />

              +12% This Month

            </span>

          </div>

        </div>

        <div className="stats-card">

          <div className="stats-icon program">

            <FaBookOpen />

          </div>

          <div>

            <h2>42</h2>

            <p>Total Programs</p>

            <span>

              <FaArrowUp />

              +4 New

            </span>

          </div>

        </div>

        <div className="stats-card">

          <div className="stats-icon gallery">

            <FaImages />

          </div>

          <div>

            <h2>350</h2>

            <p>Gallery Images</p>

            <span>

              <FaArrowUp />

              +25 Uploaded

            </span>

          </div>

        </div>

        <div className="stats-card">

          <div className="stats-icon event">

            <FaCalendarAlt />

          </div>

          <div>

            <h2>18</h2>

            <p>Upcoming Events</p>

            <span>

              <FaArrowUp />

              +2 Scheduled

            </span>

          </div>

        </div>

      </div>
            {/* Dashboard Content */}

      <div className="dashboard-grid">

        {/* Donation Overview */}

        <div className="dashboard-card donation-card">

          <div className="card-header">

            <h3>Donation Overview</h3>

            <button>View Report</button>

          </div>

          <div className="donation-chart">

            <div className="chart-placeholder">

              <h2>₹ 8,45,000</h2>

              <span>Total Donations</span>

            </div>

          </div>

        </div>

        {/* Upcoming Events */}

        <div className="dashboard-card">

          <div className="card-header">

            <h3>Upcoming Events</h3>

          </div>

          <div className="event-list">

            <div className="event-item">

              <div className="event-date">

                <h4>15</h4>

                <span>Jul</span>

              </div>

              <div>

                <h5>Education Camp</h5>

                <p>Indore, Madhya Pradesh</p>

              </div>

            </div>

            <div className="event-item">

              <div className="event-date">

                <h4>22</h4>

                <span>Jul</span>

              </div>

              <div>

                <h5>Blood Donation Camp</h5>

                <p>Bhopal</p>

              </div>

            </div>

            <div className="event-item">

              <div className="event-date">

                <h4>30</h4>

                <span>Jul</span>

              </div>

              <div>

                <h5>Tree Plantation</h5>

                <p>Ujjain</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Grid */}

      <div className="dashboard-grid">

        {/* Recent Programs */}

        <div className="dashboard-card">

          <div className="card-header">

            <h3>Recent Programs</h3>

          </div>

          <table className="dashboard-table">

            <thead>

              <tr>

                <th>Program</th>

                <th>Status</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Women Empowerment</td>

                <td>

                  <span className="status active">

                    Active

                  </span>

                </td>

                <td>12 Jul</td>

              </tr>

              <tr>

                <td>Education Drive</td>

                <td>

                  <span className="status active">

                    Active

                  </span>

                </td>

                <td>18 Jul</td>

              </tr>

              <tr>

                <td>Health Awareness</td>

                <td>

                  <span className="status completed">

                    Completed

                  </span>

                </td>

                <td>03 Jul</td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* Quick Actions */}

        <div className="dashboard-card">

          <div className="card-header">

            <h3>Quick Actions</h3>

          </div>

          <div className="quick-actions">

            <button>Add Program</button>

            <button>Add Event</button>

            <button>Upload Gallery</button>

            <button>View Donations</button>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Dashboard;