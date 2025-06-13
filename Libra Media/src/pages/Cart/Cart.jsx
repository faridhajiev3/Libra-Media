import React from "react";
import "../../scss/cart.scss";
import CartSummary from "./CartSummary";
import CartItemsMobile from "./CartItemsMobile";
import CartItemsDesktop from "./CartItemsDesktop";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket } from "../../redux/slice/basketslice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.basket.cart);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteBasket(id));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {/* Mobile view (card layout) */}
      <CartItemsMobile cartItems={cartItems} handleDelete={handleDelete} dispatch={dispatch}/>


      {/* Desktop view (table layout) */}
      <CartItemsDesktop cartItems={cartItems} handleDelete={handleDelete} dispatch={dispatch}/>

      {/* cart summary */}
      <CartSummary />
    </div>
  );
}

export default Cart;
