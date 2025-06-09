import React, { useState } from "react";

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (formData.guests < 1) newErrors.guests = "At least 1 guest required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="name-error"
          aria-invalid={!!errors.name}
          required
        />
        {errors.name && (
          <span id="name-error" role="alert" style={{ color: "red" }}>
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="email-error"
          aria-invalid={!!errors.email}
          required
        />
        {errors.email && (
          <span id="email-error" role="alert" style={{ color: "red" }}>
            {errors.email}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          aria-describedby="date-error"
          aria-invalid={!!errors.date}
          required
        />
        {errors.date && (
          <span id="date-error" role="alert" style={{ color: "red" }}>
            {errors.date}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          aria-describedby="time-error"
          aria-invalid={!!errors.time}
          required
        />
        {errors.time && (
          <span id="time-error" role="alert" style={{ color: "red" }}>
            {errors.time}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="guests">Number of Guests:</label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          aria-describedby="guests-error"
          aria-invalid={!!errors.guests}
          required
        />
        {errors.guests && (
          <span id="guests-error" role="alert" style={{ color: "red" }}>
            {errors.guests}
          </span>
        )}
      </div>

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
