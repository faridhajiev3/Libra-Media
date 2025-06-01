import React from 'react'
import "../scss/information.scss"

function PersonalInformation() {
    return (
        <div className='addressContainer'>

            <div className='ace'>
                <input className="input-field" type="text" value="Gulkhar Majidova" readonly />
                <input className="input-field" type="text" value="+971 50 777777" readonly />
                <input className="input-field" type="text" value="GuiMajid" readonly />
                <button className="buttonUpdate">Update</button>
            </div>
        </div>
    )
}

export default PersonalInformation