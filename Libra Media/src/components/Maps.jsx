import React, { useState } from "react";
import "../scss/maps.scss"
import { useNavigate } from "react-router-dom";
import AddressManually from "./AddressManually";
import Payment from "./Payment";

function Maps() {
  const [open, setOpen] = useState(false);
  const [openPayment, setOpenPayment] = useState(false); 
  const navigate = useNavigate()

  const handleChange = () => { 
    setOpen(!open);
  };


  const handlePayment = () => {
    setOpenPayment(prev => !prev);
  };
  return (
    <div className="maps-container">
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853003306!2d49.69014890705255!3d40.394737007992184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1745840911677!5m2!1saz!2saz"
          width="1400"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="map-actions">
        <button className="btn btn-primary">Confirm location</button>
        <button className="btn btn-primary" onClick={handlePayment}>Pay</button>
        <button className="btn btn-secondary" onClick={handleChange}>
          {open ? "Hide manual entry" : "Enter address manually"}
        </button>
      </div>
      <AddressManually open={open} />
      {
         openPayment?  <Payment handlePayment={handlePayment}/>: "" 
      }
    </div>
  );
}

export default Maps;
