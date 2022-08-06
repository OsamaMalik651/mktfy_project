import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./PasswordCheckBox.css"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const PasswordCheckBox = ({ enabled, text }) => {
    return (
        <div className='PasswordCheckBox'>
            <FontAwesomeIcon icon={faCircleCheck} width="24px" color={enabled ? "#9349DE" : "#EBE8E8"} />
            <p>{text}</p>
        </div>
    )
}

export default PasswordCheckBox