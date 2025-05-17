import React from "react";
import "../../scss/cart.scss";
import CartSummary from "./CartSummary";
import CartItemsMobile from "./CartItemsMobile";
import CartItemsDesktop from "./CartItemsDesktop";

function Cart() {

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {/* Mobile view (card layout) */}
      <CartItemsMobile />


      {/* Desktop view (table layout) */}
      <CartItemsDesktop />

      {/* cart summary */}
      <CartSummary />
    </div>
  );
}

export default Cart;
