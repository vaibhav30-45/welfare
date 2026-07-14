import { useState } from "react";
import "./EventsAdmin.css";

const EventEdit = () => {

  const [formData, setFormData] = useState({

    title: "Education Camp",

    location: "Indore",

    date: "2026-07-15",

    time: "10:00",

    description:
      "Free education awareness program for underprivileged children.",

    image: null,

    status: "Upcoming",

  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };

  const handleImage = (e) => {

    setFormData({

      ...formData,

      image: e.target.files[0],

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Event Updated Successfully");

  };

  return (

    <div className="admin-page">

      <h2>Edit Event</h2>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >
                <div className="form-row">

          <div className="form-group">

            <label>Event Name</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="form-row">

          <div className="form-group">

            <label>Event Date</label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Event Time</label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />

          </div>

        </div>

        <div className="form-group">

          <label>Description</label>

          <textarea
            rows="6"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

        </div>
                <div className="form-group">

          <label>Change Banner</label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

        </div>

        <div className="form-group">

          <label>Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >

            <option value="Upcoming">
              Upcoming
            </option>

            <option value="Completed">
              Completed
            </option>

          </select>

        </div>

        <button
          className="save-btn"
          type="submit"
        >

          Update Event

        </button>

      </form>

    </div>

  );

};

export default EventEdit;