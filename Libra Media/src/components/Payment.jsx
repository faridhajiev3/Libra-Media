import React from 'react'
import "../scss/payment.scss"
import { useNavigate } from 'react-router-dom'
import bankCard from "../assets/bankCard.jpg"
import googlePay from "../assets/Google_Pay_Logo.svg.png"
import applePay from "../assets/Apple_Pay_logo.svg.png"

function Payment({handlePayment}) {
      const navigate = useNavigate()
    return (
        <div className="modaloverlay">
            <div className="modall">
                <h2>Select Payment Method</h2>  
                <div className="payment-options">
                    <div className="payment-card" onClick={()=>navigate("/credit")}>
                        <img src={bankCard} alt="Bank Card" />
                        <span>Bank Card</span>
                    </div>
                    <div className="payment-card">
                        <img src={googlePay} alt="Google Pay" />
                        <span>Google Pay</span>
                    </div>
                    <div className="payment-card">
                        <img src={applePay} alt="Apple Pay" />
                        <span>Apple Pay</span>
                    </div>
                </div>
                <button className="close-btn" onClick={handlePayment}>Close</button>
            </div>
        </div>
    )
}

export default Payment