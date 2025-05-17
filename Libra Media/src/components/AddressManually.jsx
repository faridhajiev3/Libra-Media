import React from 'react'

function AddressManually({open}) {
    return (
        <div className={`address-form ${open ? "address-form--visible" : ""}`}>
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="number"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                />
            </div>

            <div className="form-group">
                <label htmlFor="city">City</label>
                <select id="city">
                    <option value="">Select a city</option>
                    <option value="Ablaa">Ablaa</option>
                    <option value="Aba Al Seban">Aba Al Seban</option>
                    <option value="Abha">Abha</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="address">Address Details</label>
                <textarea
                    id="address"
                    placeholder="Enter your complete address"
                ></textarea>
            </div>

            <button className="btn btn-primary btn-submit">Submit Address</button> 
        </div>
    )
}

export default AddressManually