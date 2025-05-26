// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import flowerDress from "../assets/flower_dress.png";
import menJacket from "../assets/men_jacket.png";
import womanFlowerDress from "../assets/woman_flower_dress.png";
import "../scss/orderdetail.scss";

const dataOrders = [
  {
    id: 1,
    address: "8530 King Fahd Rd Al Olaya Riyadh 12333, Aba Al Sedan 3323",
    name: "Gul Majid",
    phone: "+97122255544",
    trackingNo: "2545555555555",
    paymentMethod: "MasterPass",
    discount: 12,
    total: 96,
    images: [
      {
        src: flowerDress,
        name: "Women manfi fashion fashion fashion...",
        size: "Red/2XL",
        price: 12,
        oldPrice: 15,
      },
      {
        src: menJacket,
        name: "Men colorful jacket... fashion fashio...",
        size: "Green/XS",
        price: 25,
        oldPrice: 28,
      },
      {
        src: womanFlowerDress,
        name: "Autumn winter casual fashion moda..",
        size: "Brown/L",
        price: 9,
        oldPrice: 12,
      },
    ],
  },
];

const OrderDetail = () => {
  const [activeButton, setActiveButton] = useState(null);
  const { orderId } = useParams();
  const navigate = useNavigate();
  const order =
    dataOrders.find((o) => o.id === parseInt(orderId)) || dataOrders[0];

  return (
    <div className="order-detail-container">
      <div className="order-detail-header">
        <div className="back-icon-box" onClick={() => navigate(-1)}>
          <FaArrowLeft className="back-icon" />
        </div>
        <h2>Order Detail</h2>
      </div>

      <div className="order-detail-content">
        <div className="section">
          <h3>Shipping address</h3>
          <p>{order.address}</p>
          <p>
            Alıcı: <span className="name_title">{order.name}</span>
          </p>
          <p>
            Phone: <span className="phone_title">{order.phone}</span>
          </p>
          <p>Kargo takip no: <span className="tracking_title">{order.trackingNo}</span></p>
        </div>

        <div className="section">
          <h3>Payment</h3>
          <p>
            Ödeme: <span className="payment-method">{order.paymentMethod}</span>
          </p>
          <p>
            İndirim: <span className="discount">-${order.discount}</span>
          </p>
          <p>
            Total: <strong>${order.total}</strong>
          </p>
        </div>

<div className="order-detail-images">
  {order.images.map((item, idx) => (
    <div className="product-card" key={idx}>
      <div className="image-wrapper">
        <img src={item.src} alt={item.name} />
        <div className="index">{idx + 1}</div>
      </div>
      <div className="info">
        <div className="name">{item.name}</div>
        <div className="size">{item.size}</div>
        <div className="price">
          ${item.price}
          <span className="old-price">${item.oldPrice}</span>
        </div>
        <div className="detail-buttons">
          <button
            className={`detail-btn ${activeButton === `reorder-${idx}` ? "active" : ""}`}
            onClick={() => setActiveButton(`reorder-${idx}`)}
          >
            Reorder
          </button>
          <button
            className={`detail-btn ${activeButton === `review-${idx}` ? "active" : ""}`}
            onClick={() => setActiveButton(`review-${idx}`)}
          >
            Review
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default OrderDetail;