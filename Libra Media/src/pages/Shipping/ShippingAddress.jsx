import React from 'react'
import product1 from "../../assets/woman_flower_dress.png"
import "../../scss/shipping.scss"
import { useDispatch, useSelector } from 'react-redux';

function ShippingAddress() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.basket.cart);
    const address = useSelector((state) => state.address);
    const payment = useSelector(state => state.payment)
    return (
        <div className="order-container">
            <section className="shipping-section">
                <h2>Shipping Address</h2>
                <button className="add-new">+ Add new</button>
                <div className="address">
                    <p>🏠 {address.address}</p>
                    <p>{address.fullName} | {address.phoneNumber}</p>
                    <p>{address.city}</p>
                    <button className="edit">Edit</button>
                </div>
            </section>

            <section className="payment-section">
                <h2>Payment</h2>
                <button className="add-new">+ Add new</button>
                <div className="payment-method">
                    <span className="card-icon">💳</span>
                    <span>{payment.cardNumber}</span>
                </div>
            </section>

            <h2>Order Details</h2>
            <section className="order-details">

                {
                    cartItems.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.image} alt="Men colorful" />
                            <div>
                                <p className='desc'>{item.title}</p>
                                <p className="price">{item.price}$</p>
                            </div>
                        </div>
                    ))
                }

            </section>
            <p className="total">Total: <strong>$96</strong> (Delivery included)</p>
            <button className="checkout">Checkout</button>
        </div>
    )
}

export default ShippingAddress