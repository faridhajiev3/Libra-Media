import React, { useState } from "react";
import "../scss/maps.scss"

function Maps() {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <div className="maps-container">
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853003306!2d49.69014890705255!3d40.394737007992184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1745840911677!5m2!1saz!2saz"
          width="1400"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="map-actions">
        <button className="btn btn-primary">Confirm location</button>
        <button className="btn btn-secondary" onClick={handleChange}>
          {open ? "Hide manual entry" : "Enter address manually"}
        </button>
      </div>

      <div className={`address-form ${open ? "address-form--visible" : ""}`}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter your full name" />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select id="city">
            <option value="">Select a city</option>
            <option value="Ablaa">Ablaa</option>
            <option value="Aba Al Seban">Aba Al Seban</option>
            <option value="Abha">Abha</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address Details</label>
          <textarea
            id="address"
            placeholder="Enter your complete address"
          ></textarea>
        </div>

        <button className="btn btn-primary btn-submit">Submit Address</button>
      </div>
    </div>
  );
}

export default Maps;
