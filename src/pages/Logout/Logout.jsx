/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../scss/logout.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ onLogout, onCancel }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="logout-page-bg">
      <div className="logout-modal">
        <div className="order-detail-header">
          <div className="back-icon-box" onClick={handleBackClick}>
            <FaArrowLeft className="back-icon" />
          </div>
          <h2 className="logout_title">Logout</h2>
        </div>
        <div className="logout-subtitle">Vendo</div>
        <div className="logout-text">Are you sure you want to log out?</div>
        <div className="logout-actions">
          <button className="logout-btn" onClick={onLogout}>
            Log out
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;