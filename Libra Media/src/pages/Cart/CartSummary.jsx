import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 

function CartSummary() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.basket.cart);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;
  return (
    <div className="cart-summary">
      <h2 className="summary-title">Order Summary</h2>
      <div className="summary-row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span>$0.00</span>
      </div>
      <div className="summary-row total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="checkout-btn" onClick={() => navigate("/map")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;
