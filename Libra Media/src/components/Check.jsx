import React from 'react'
import "../scss/check.scss"

function Check({ item }) {
    return (
        <div className="check-container">
            {item.map((i) => (
                <div key={i.id} className="check-item">
                    <hr />
                    <h3>{i.title}</h3>
                    <p>Quantity: {i.quantity}</p>
                    <p>Price: ${i.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Check