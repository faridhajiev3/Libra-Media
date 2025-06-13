import React from 'react'
import { decrementQuantity, deleteBasket, incrementQuantity } from '../../redux/slice/basketslice';

function CartItemsMobile({cartItems, handleDelete, dispatch}) {
   
    return (
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
    )
}

export default CartItemsMobile