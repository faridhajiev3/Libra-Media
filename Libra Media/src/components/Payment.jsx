import React from 'react'
import "../scss/payment.scss"
import { useNavigate } from 'react-router-dom'

function Payment({handlePayment}) {
      const navigate = useNavigate()
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Select Payment Method</h2>
                <div className="payment-options">
                    <div className="payment-card" onClick={()=>navigate("/credit")}>
                        <img src="https://media.istockphoto.com/id/1583175338/vector/credit-card-on-a-transparent-background.jpg?s=612x612&w=0&k=20&c=KLK8Le951cXI_v4fTpOvXNDpLY5HWmitz5h219ZaROM=" alt="Bank Card" />
                        <span>Bank Card</span>
                    </div>
                    <div className="payment-card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/800px-Google_Pay_Logo.svg.png" alt="Google Pay" />
                        <span>Google Pay</span>
                    </div>
                    <div className="payment-card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1024px-Apple_Pay_logo.svg.png" alt="Apple Pay" />
                        <span>Apple Pay</span>
                    </div>
                </div>
                <button className="close-btn" onClick={handlePayment}>Close</button>
            </div>
        </div>
    )
}

export default Payment