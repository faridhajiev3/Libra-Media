import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import "../scss/creditcard.scss"

function CreditCard() {
    const [cardHolder, setCardHolder] = useState("Ruslan");
    const [cardNumber, setCardNumber] = useState("1234 5678 3456 8765");
    const [expiry, setExpiry] = useState("12/2026");
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
            onChange={(e) => setCardHolder(e.target.value)}
            type="text"
            placeholder="Card holder name"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setCardNumber(e.target.value)}
            type="text"
            placeholder="Card number"
            maxlength="19"
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <input
              onChange={(e) => setExpiry(e.target.value)}
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div className="form-group">
            <input type="text" placeholder="CCV" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreditCard;
