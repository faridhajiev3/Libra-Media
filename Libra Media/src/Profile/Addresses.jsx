import React from 'react'
import "../scss/address.scss"
import { FaLocationDot } from "react-icons/fa6";

function Addresses() {
    return (
        <div className='location'>
            <div className="address-card">
                <span>Home</span>
                <p><span style={{ color: "#888" }}><FaLocationDot /></span> 8530 King Fahd Rd Al Olaya Riyadh</p>
                <p>12333, Aba Al Sedan 3323</p>
                <span className="edit">Edit</span>
            </div>
            <div className="address-card">
                <span>Work</span>
                <p><span style={{ color: "#888" }}><FaLocationDot /></span> 1289 Aba Al Sedan bahayat 222355,</p>
                <p>street 1022</p>
                <span className="edit">Edit</span>
            </div>
            <button className="buttonaddress">Add new address</button>
        </div>
    )
}

export default Addresses