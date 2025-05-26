// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../scss/myorders.scss";
import {
  FaChevronRight,
  FaArrowLeft,
  FaCheckSquare,
  FaMinusSquare,
} from "react-icons/fa";
import flowerDress from "../../assets/images/flower_dress.png";
import menJacket from "../../assets/images/men_jacket.png";
import womanFlowerDress from "../../assets/images/woman_flower_dress.png";

const dataOrders = [
  {
    id: 1,
    date: "13 December 2024",
    price: 122,
    status: "Completed",
    checkState: "Completed",
    images: [flowerDress, womanFlowerDress, menJacket],
  },
  {
    id: 2,
    date: "14 December 2024",
    price: 98,
    status: "Completed",
    checkState: "Completed",
    images: [flowerDress, menJacket],
  },
  {
    id: 3,
    date: "15 December 2024",
    price: 55,
    status: "Completed",
    checkState: "Completed",
    images: [flowerDress],
  },
  {
    id: 4,
    date: "16 December 2024",
    price: 80,
    status: "Returned",
    images: [menJacket],
  },
];

const MyOrders = () => {
  const [orders, setOrders] = useState(dataOrders);
  const navigate = useNavigate();

  const toggleCheck = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              checkState:
                order.checkState === "Completed" ? "Completed Not" : "Completed",
            }
          : order
      )
    );
  };

  const removeReturned = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleOrderClick = (id) => {
    navigate(`/order/${id}`);
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <div className="back-icon-box" onClick={goBack}>
          <FaArrowLeft className="back-icon" />
        </div>
        <h2 className="orders-title">My Orders</h2>
      </div>

      <div className="order-list">
        {orders.map((order) => (
          <div
            className="order-card"
            key={order.id}
            onClick={() => handleOrderClick(order.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="order-left-column">
              <div className="order-images">
                {order.images.map((img, index) => (
                  <img key={index} src={img} alt={`product-${index}`} />
                ))}
              </div>
              <div
                className={`order-status ${order.status === "Completed" ? "completed" : "returned"}`}
                onClick={(e) => e.stopPropagation()}
              >
                <span>
                  {order.status === "Completed" ? order.checkState : "Returned"}
                </span>
                {order.status === "Completed" ? (
                  <FaCheckSquare
                    onClick={() => toggleCheck(order.id)}
                    className="status-icon"
                  />
                ) : (
                  <FaMinusSquare
                    onClick={() => removeReturned(order.id)}
                    className="status-icon"
                  />
                )}
              </div>
            </div>
            <div className="order-right-column">
              <div className="order-date-price-row">
                <div className="order-date-price">
                  <span className="order-date">{order.date}</span>
                  <span className="order-price">${order.price}</span>
                </div>
                <FaChevronRight className="chevron-btn" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;