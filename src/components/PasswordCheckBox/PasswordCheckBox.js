import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./PasswordCheckBox.css"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const PasswordCheckBox = ({ disabled, text }) => {
    return (
        <div className='PasswordCheckBox'>
            <FontAwesomeIcon icon={faCircleCheck} width="24px" color={disabled ? "#EBE8E8" : "#9349DE"} />
            <p>{text}</p>
        </div>
    )
}

export default PasswordCheckBox