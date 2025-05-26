import "../../scss/addresses.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const addresses = [
  {
    type: "Home",
    address: "8530 King Fahd Rd Al Olaya Riyadh 12333, Alaa Al Sahan 3123",
  },
  {
    type: "Work",
    address: "1208 Abu Al Sadan Bahajat 222355, Ishreet 3022",
  },
];

const Addresses = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="order-detail-header">
        <div className="back-icon-box" onClick={handleBackClick}>
          <FaArrowLeft className="back-icon" />
        </div>
        <h2 className="addresses_title">Addresses</h2>
      </div>
      <div className="address-list">
        {addresses.map((item, idx) => (
          <div className="address-item" key={idx}>
            <div className="address-info">
              <span className="type">{item.type}</span>
              <div className="address-with-icon">
                <FaLocationDot className="location-icon" />
                <span className="address">{item.address}</span>
              </div>
            </div>
            <button className="edit-btn">Edit</button>
          </div>
        ))}
      </div>
      <button className="add-btn">Add new address</button>
    </div>
  );
};

export default Addresses;