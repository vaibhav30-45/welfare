import "./EventCard.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import event1 from "../../assets/healthcamp.png";
import event2 from"../../assets/edu1.jpg";
import event3 from "../../assets/tree.png";

const events = [
  {
    id: 1,
    image: event1,
    date: "12",
    month: "JUL",
    title: "Free Health Camp",
    location: "Indore, Madhya Pradesh",
    desc:
      "Providing free medical checkups, medicines and health awareness for rural communities.",
  },
  {
    id: 2,
    image: event2,
    date: "22",
    month: "AUG",
    title: "Education For Every Child",
    location: "Bhopal, Madhya Pradesh",
    desc:
      "School kit distribution and educational support for underprivileged children.",
  },
  {
    id: 3,
    image: event3,
    date: "15",
    month: "SEP",
    title: "Tree Plantation Drive",
    location: "Khandwa, Madhya Pradesh",
    desc:
      "Join our volunteers in creating a greener future with plantation activities.",
  },
];

const Events = () => {
  return (
    <section className="events-section">

      <div className="container">

        <div className="section-heading">

          <span>UPCOMING EVENTS</span>

          <h2>
            Join Our Upcoming Campaigns
          </h2>

          <p>
            Become part of our mission by participating
            in awareness drives, health camps and
            community welfare programs.
          </p>

        </div>

        <div className="events-grid">

          {events.map((event) => (

            <div className="event-card" key={event.id}>

              <div className="event-image">

                <img
                  src={event.image}
                  alt={event.title}
                />

                <div className="event-date">

                  <h3>{event.date}</h3>

                  <span>{event.month}</span>

                </div>

              </div>

              <div className="event-content">

                <div className="location">

                  <FaMapMarkerAlt />

                  <span>{event.location}</span>

                </div>

                <h3>{event.title}</h3>

                <p>{event.desc}</p>

                <button>

                  Read More

                  <FaArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Events;