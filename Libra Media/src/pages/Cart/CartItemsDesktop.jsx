import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteBasket, incrementQuantity } from '../../redux/slice/basketslice';

function CartItemsDesktop() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.basket.cart);

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteBasket(id));
    };
    return (
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
    )
}

export default CartItemsDesktop