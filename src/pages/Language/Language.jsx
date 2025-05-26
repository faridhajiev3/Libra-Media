// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../../scss/language.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Language = () => {
  const [selected, setSelected] = useState("English");
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="language-page-bg">
      <div className="lang-container">
        <div className="order-detail-header">
          <div className="back-icon-box" onClick={handleBackClick}>
            <FaArrowLeft className="back-icon"/>
          </div>
          <h2 className="language_title">Select Language</h2>
        </div>
        <div className="lang-content">
          <div
            className={`lang-option ${selected === "English" ? "active" : ""}`}
            onClick={() => setSelected("English")}
          >
            English {selected === "English" && <span className="check">✔</span>}
          </div>
          <div
            className={`lang-option ${selected === "Arabic" ? "active" : ""}`}
            onClick={() => setSelected("Arabic")}
          >
            Arabic {selected === "Arabic" && <span className="check">✔</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
