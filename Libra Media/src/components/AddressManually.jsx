import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setAddressField, submitAddress } from '../redux/slice/addressSlice';

function AddressManually({ open }) {
    const dispatch = useDispatch();
    const address = useSelector(state => state.address);

    const handleChange = (e) => {
        dispatch(setAddressField({ field: e.target.id, value: e.target.value })); 
    };

    const handleSubmit = () => {
        dispatch(submitAddress());
    };
    return (
        <div className={`address-form ${open ? "address-form--visible" : ""}`}>
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    value={address.fullName}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="phone"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    value={address.phoneNumber}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="city">City</label>
                <select id="city" value={address.city} onChange={handleChange}>
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
                    value={address.address}
                    onChange={handleChange}
                ></textarea>
            </div>

            <button className="btn btn-primary btn-submit" onClick={handleSubmit}>Save address</button>
        </div>
    )
}

export default AddressManually