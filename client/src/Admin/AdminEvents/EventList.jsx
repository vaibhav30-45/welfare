import "./EventsAdmin.css";
import { Link } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";

const events = [

  {
    id:1,
    title:"Education Camp",
    location:"Indore",
    date:"12 Jul 2026",
    status:"Upcoming"
  },

  {
    id:2,
    title:"Blood Donation",
    location:"Bhopal",
    date:"20 Jul 2026",
    status:"Upcoming"
  },

  {
    id:3,
    title:"Tree Plantation",
    location:"Ujjain",
    date:"05 Aug 2026",
    status:"Completed"
  }

];

const EventList = () => {

  return (

    <div className="admin-page">

      <div className="page-header">

        <div>

          <h2>Manage Events</h2>

          <p>
            Add, Update and Delete NGO Events
          </p>

        </div>

        <Link
          to="/admin/events/add"
          className="add-btn"
        >

          <FaPlus />

          Add Event

        </Link>

      </div>

      <div className="toolbar">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search Event..."
          />

        </div>

      </div>
            <table className="admin-table">

        <thead>

          <tr>

            <th>Title</th>

            <th>Location</th>

            <th>Date</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {events.map((item)=>(

            <tr key={item.id}>

              <td>{item.title}</td>

              <td>{item.location}</td>

              <td>{item.date}</td>

              <td>

                <span
                  className={
                    item.status==="Upcoming"
                    ? "status upcoming"
                    : "status completed"
                  }
                >

                  {item.status}

                </span>

              </td>

              <td>

                <Link
                  to={`/admin/events/edit/${item.id}`}
                  className="edit-btn"
                >

                  Edit

                </Link>

                <button className="delete-btn">

                  Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default EventList;