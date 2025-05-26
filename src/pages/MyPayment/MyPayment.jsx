// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../scss/mypayment.scss";
import mastercardLogo from "../../assets/mastercard.png"; 
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyPayment = () => {
  
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  }; 
   
  return (
  <div className="container">
    <div className="order-detail-header">
      <div className="back-icon-box" onClick={() => handleBackClick()}>
        <FaArrowLeft className="back-icon" />
      </div>
      <h2 className="payment_title">Payment methods</h2>
    </div>
    <div className="card-list">
      <div className="card-item">
        <img src={mastercardLogo} alt="Mastercard" className="card-logo" />
        <span className="card_num">*********2109</span>
      </div>
    </div>
    <button className="add-btn">Add new card</button>
  </div>
);
}

export default MyPayment;
