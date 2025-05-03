import React from "react";
import { useNavigate } from "react-router-dom";

function CartSummary() {
  const navigate = useNavigate()
  return (
    <div className="cart-summary">
      <h2 className="summary-title">Order Summary</h2>
      <div className="summary-row">
        <span>Subtotal</span>
        <span>$18.00</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span>$5.00</span>
      </div>
      <div className="summary-row total">
        <span>Total</span>
        <span>$23.00</span>
      </div>
      <button className="checkout-btn" onClick={()=>navigate("/map")}>Proceed to Checkout</button>
    </div>
  );
}

export default CartSummary;
