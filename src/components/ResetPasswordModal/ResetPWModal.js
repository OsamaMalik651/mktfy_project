import React from 'react'
import closeIcon from "../../assets/icon_close.svg"
import backIcon from "../../assets/icon_back.svg"
import "./ResetPWModal.css"
import { Input } from '../Input/Input'
import PasswordCheckBox from '../PasswordCheckBox/PasswordCheckBox'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const ResetPWModal = ({ close, create }) => {
    const [checked, setChecked] = useState(false)
    let navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/success")
    }
    return (
        <Modal>
            <div className='ResetPWModal'>
                <div className="ResetPWModal_Top">
                    <button onClick={() => navigate(-1)}>
                        <img src={backIcon} alt="close button" />
                    </button>
                    <button onClick={close}>
                        <img src={closeIcon} alt="close button" />
                    </button>
                </div>
                <div className="ResetPWModal_Bottom">
                    {create ? <h1>Create Password</h1> : <h1>Reset Password</h1>}
                    <p>The password must have at least 6 characters and must contain 1 uppercase and 1 number.</p>
                    <div className="Modal_Inputs">
                        <Input
                            type="password"
                            label="Password"
                            placeholderText="Your password"
                            minLength="6"
                            strength="Weak"
                        />
                        <Input
                            type="password"
                            label="Confirm Password"
                            placeholderText="Your password"
                            minLength="6"
                        />
                    </div>
                    <div className="PasswordCheckboxes">
                        <PasswordCheckBox disabled={false} text="At least 6 Characters" />
                        <PasswordCheckBox disabled={true} text="1 Uppercase" />
                        <PasswordCheckBox disabled={true} text="Number" />
                    </div>
                    {create &&
                        <div className="TosMessage">
                            <button onClick={() => setChecked(!checked)}>
                                <FontAwesomeIcon icon={faSquareCheck} className="CheckIcon" color={checked ? "#EBE8E8" : "#9349DE"} />
                            </button>
                            <label htmlFor="tos">By checking this box, you agree to our <Link to="/terms-and-services">Terms of service</Link> and our <Link to="/privacy-policy">Privacy Policy</Link></label><br></br>
                        </div>
                    }
                    <div className="Button" >
                        <Button onClick={handleSubmit} color="#6318AF" disabled={false}>{create ? "Create Account" : "Submit"}</Button>
                    </div>
                </div>
            </div>
        </Modal>)

}

export default ResetPWModal