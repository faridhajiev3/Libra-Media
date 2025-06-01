import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import "../scss/creditcard.scss"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPayment, submitPayment } from "../redux/slice/paymentSlice";

function CreditCard() {
  const dispatch = useDispatch();
  const payment = useSelector(state => state.payment)
  const handleCard = (e) => {
    dispatch(setPayment({ name: e.target.id, value: e.target.value }))
  }


  const [showError, setShowError] = useState(false);

  const [cardHolder, setCardHolder] = useState("Ruslan");
  const [cardNumber, setCardNumber] = useState("1234 5678 3456 8765");
  const [expiry, setExpiry] = useState("12/2026");
  const navigate = useNavigate()

  const handlePayment = () => {
    setShowError(true);

    if (!payment.cardNumber || payment.cardNumber.trim() === "") {
      return;
    }

    dispatch(submitPayment());
    navigate("/shipping");
  };




  return (
    <div className="card-container">
      <div className="card-preview">
        <div className="chip"></div>
        <div className="settings-icon">
          <CiSettings />
        </div>
        <div className="card-number">{cardNumber}</div>
        <div className="card-details">
          <div className="card-holder">{cardHolder}</div>
          <div className="card-expiry">{expiry}</div>
        </div>
      </div>

      <form className="card-form">
        <div className="form-group">
          <input
            id="holderName"
            onChange={handleCard}
            type="text"
            placeholder="Card holder name"
          />
        </div>
        <div className="form-group">
          <input
            id="cardNumber"
            onChange={handleCard}
            value={payment.cardNumber}
            type="text"
            placeholder="Card number"
            maxLength={19}
          />
          <small className={showError && payment.cardNumber?.trim() === "" ? "smalll" : ""}>
            Please write card number
          </small>


        </div>
        <div className="form-row">
          <div className="form-group">
            <input
              id="cardTime"
              onChange={handleCard}
              value={payment.cardTime}
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className="form-group">
            <input type="text" placeholder="CCV" />
          </div>
        </div>
        <div className="addToCard">
          <button onClick={(e) => {
            e.preventDefault()
            handlePayment()
          }}>Add card</button>
        </div>
      </form >
    </div >
  );
}

export default CreditCard;
