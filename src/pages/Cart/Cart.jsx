import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, deleteBasket, incrementQuantity } from "../../redux/slice/basketslice";
import "../../scss/cart.scss";
import CartSummary from "./CartSummary";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.basket.cart);

  const handleDelete = (id) => {
    console.log("Silinir:", id); 
    dispatch(deleteBasket(id));
  };

  const total = cartItems.reduce((arr,sub)=> arr + sub.price * sub.quantity,0)

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {/* Mobile view (card layout) */}
      <div className="cart-items-mobile">
        {cartItems.map((item) => (
          <div className="cart-item-card" key={item.id}>
            <div className="cart-item-image">
              <img src={item.image} />
            </div>
            <div className="cart-item-details">
              <h4 className="cart-item-name">{item.title}</h4>
              <p className="cart-item-variant">
                red/<span>M</span>
              </p>
              <div className="cart-item-price">
                <h3>${(item.price * item.quantity).toFixed(2)}</h3>
              </div>
              <div className="cart-item-quantity">
                <button className="quantity-btn" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <p className="quantity-value">{item.quantity}</p>
                <button className="quantity-btn" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleDelete(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view (table layout) */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="cart-item-row">
              <td className="product-cell">
                <div className="product-info">
                  <img
                    src={item.image}
                    className="product-image"
                  />
                  <div className="product-details">
                    <h4 className="product-name">{item.title}</h4>
                    <p className="product-variant">
                      red/<span>M</span>
                    </p>
                  </div>
                </div>
              </td>
              <td className="price-cell">${item.price}</td>
              <td className="quantity-cell">
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                  <p className="quantity-value">{item.quantity}</p>
                  <button className="quantity-btn" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                </div>
              </td>
              <td className="total-cell">
                ${(item.price * item.quantity).toFixed(2)}
              </td>
              <td className="action-cell">
                <button
                  className="remove-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CartSummary/>
    </div>
  );
}

export default Cart;
