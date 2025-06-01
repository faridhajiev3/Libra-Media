import React, { useState } from "react";
import {FaChevronRight, FaArrowLeft, FaCheckSquare, FaMinusSquare} from "react-icons/fa";
import "../scss/myorder.scss"
import { dataOrders } from "./ProfilData";
import { useNavigate } from "react-router-dom";

function MyOrders() {
  const [orders, setOrders] = useState(dataOrders); 
  const goBack = () => {
    window.history.back();
  };
  const navigate = useNavigate()

  return (
    <div className="orders-container">
      <div className="orders-header">
        <div className="back-icon-box" onClick={goBack}>
          <FaArrowLeft className="back-icon" />
        </div>
        <h2 className="orders-title">My orders</h2>
      </div>

      <div className="order-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-left-column">
              <div className="order-images">
                {order.images.map((img, index) => (
                  <img key={index} src={img} alt={`product-${index}`} />
                ))}
              </div>
              <div
                className={`order-status ${
                  order.status === "Completed" ? "completed" : "returned"
                }`}
              >
                <span>
                  {order.status === "Completed" ? order.checkState : "Returned"}
                </span>
                {order.status === "Completed" ? (
                  <FaCheckSquare
                    className="status-icon"
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <FaMinusSquare
                    className="status-icon"
                    style={{ cursor: "pointer" }}
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
                <FaChevronRight onClick={()=> navigate("/orderdetail")} className="chevron-btn" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
