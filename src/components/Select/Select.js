import React from 'react'
import "./Select.css"

const Select = ({ label }) => {
    return (
        <div className='Input'>
            <div className="InputLabel">
                <label htmlFor={label}>{label}</label>
            </div>
            <div className="Select">
                <select name={label} id={label}>
                    <option value="" disabled selected>Select a city</option>
                    <option value="calgary">Calgary</option>
                    <option value="Brooks">Brooks</option>
                </select>
            </div>


        </div>
    )
}

export default Select