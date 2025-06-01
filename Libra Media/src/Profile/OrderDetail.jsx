import React, { useState } from 'react'
import flowerDress from "../../src/assets/flower_dress.png"
import menJacket from "../../src/assets/men_jacket.png";
import womanFlowerDress from "../../src/assets/woman_flower_dress.png";
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import "../scss/orderdetail.scss"

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

function OrderDetail() {
    const [activeButton, setActiveButton] = useState(null);
    const { orderId } = useParams();
    const navigate = useNavigate();
    const order =
        dataOrders.find((o) => o.id === parseInt(orderId)) || dataOrders[0];
    return (
        <div className="forder-detail-container">
            <div className="forder-detail-header">
                <div className="fback-icon-box" onClick={() => navigate(-1)}>
                    <FaArrowLeft className="fback-icon" />
                </div>
                <h2>Order Detail</h2>
            </div>

            <div className="forder-detail-content">
                <div className="fsection">
                    <h3>Shipping address</h3>
                    <p>{order.address}</p>
                    <p>
                        Alıcı: <span className="fname_title">{order.name}</span>
                    </p>
                    <p>
                        Phone: <span className="fphone_title">{order.phone}</span>
                    </p>
                    <p>Kargo takip no: <span className="ftracking_title">{order.trackingNo}</span></p>
                </div>

                <div className="fsection">
                    <h3>Payment</h3>
                    <p>
                        Ödeme: <span className="fpayment-method">{order.paymentMethod}</span>
                    </p>
                    <p>
                        İndirim: <span className="fdiscount">-${order.discount}</span>
                    </p>
                    <p>
                        Total: <strong>${order.total}</strong>
                    </p>
                </div>

                <div className="forder-detail-images">
                    {order.images.map((item, idx) => (
                        <div className="fproduct-card" key={idx}>
                            <div className="fimage-wrapper">
                                <img src={item.src} alt={item.name} />
                                <div className="findex">{idx + 1}</div>
                            </div>
                            <div className="finfo">
                                <div className="fname">{item.name}</div>
                                <div className="fsize">{item.size}</div>
                                <div className="fprice">
                                    ${item.price}
                                    <span className="fold-price">${item.oldPrice}</span>
                                </div>
                                <div className="fdetail-buttons">
                                    <button
                                        className={`fdetail-btn ${activeButton === `reorder-${idx}` ? "factive" : ""}`}
                                        onClick={() => setActiveButton(`reorder-${idx}`)}
                                    >
                                        Reorder
                                    </button>
                                    <button
                                        className={`fdetail-btn ${activeButton === `review-${idx}` ? "factive" : ""}`}
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
    )
}

export default OrderDetail