import React, { useState } from 'react'
import { FaArrowLeft, FaChevronDown } from 'react-icons/fa';
import womanFlowerDress from "../assets/woman_flower_dress.png";
import { useNavigate } from 'react-router-dom';
import "../scss/myreturn.scss"

function MyReturns() {
  const [reason, setReason] = useState("");
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="my-returns-container">
      <div className="returns-header">
        <div className="back-icon-box" onClick={() => goBack()}>
          <FaArrowLeft className="back-icon" />
        </div>
        <span className="returns_title">My returns</span>
      </div>
      <div className="returns-product-card">
        <img src={womanFlowerDress} alt="product" />
        <div className="returns-product-info">
          <div className="returns-product-title">
            Autumn winter casual fashion moda..
          </div>
          <div className="returns-product-size">Brown/L</div>
          <div className="returns-product-qty">1 item</div>
          <div className="returns-product-price">
            $9 <span className="old-price">$12</span>
          </div>
        </div>
      </div>

      <div className="returns-form">
        <label className="returns-label">İade nedeni</label>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="returns-select"
        >
          <option value="">Ürün hasarı</option>
          <option value="wrong-item">Yanlış məhsul</option>
          <option value="other">Digər</option>
          <span className="chevron-down"><FaChevronDown /></span>
        </select>

        <button
          className="add-photo-btn"
          onClick={() => document.getElementById("photoInput").click()}
          type="button"
        >
          + Add photo
        </button>
        <input
          id="photoInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => setPhoto(e.target.files[0])}
        />

        <label className="returns-label" style={{ marginTop: 20 }}>
          Your review
        </label>
        <textarea
          className="returns-textarea"
          placeholder="Your review is very important for us."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      <button className="returns-submit-btn">Submit</button>
    </div>
  )
}

export default MyReturns