import { useState } from "react";
import "./EventsAdmin.css";

const AddEvent = () => {

  const [formData, setFormData] = useState({

    title: "",

    location: "",

    date: "",

    time: "",

    description: "",

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

    console.log(formData);

    alert("Event Added Successfully");

  };

  return (

    <div className="admin-page">

      <h2>Add New Event</h2>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >        <div className="form-row">

          <div className="form-group">

            <label>Event Name</label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Event Name"
              required
            />

          </div>

          <div className="form-group">

            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Location"
              required
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
              required
            />

          </div>

          <div className="form-group">

            <label>Event Time</label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
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
            placeholder="Event Description"
          />

        </div>

        <div className="form-group">

          <label>Upload Banner</label>

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
          type="submit"
          className="save-btn"
        >

          Save Event

        </button>

      </form>

    </div>

  );

};

export default AddEvent;