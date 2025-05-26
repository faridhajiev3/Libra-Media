// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../../scss/personalinfo.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="order-detail-header">
        <div className="back-icon-box" onClick={handleBackClick}>
          <FaArrowLeft className="back-icon" />
        </div>
        <h2 className="personal_info_title">Personal information</h2>
      </div>
      <form className="personal-form">
        <input
          type="text"
          placeholder="Gulkhar Majidova"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="+971 50 777 7777"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="GulMajid"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
