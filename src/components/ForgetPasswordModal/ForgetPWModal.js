import React, { useState } from 'react'
import "./ForgetPWModal.css"
import closeIcon from "../../assets/icon_close.svg"
import backIcon from "../../assets/icon_back.svg"
import { Input } from '../Input/Input'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import { Navigate, useNavigate } from 'react-router-dom'
const ForgetPWModal = ({ close, modalType }) => {
    const [email, setEmail] = useState("");
    const [verificationCode, setVerificationCode] = useState("")
    const [validEmailInput, setValidEmailInput] = useState(false);
    const [showErrorText, setShowErrorText] = useState(false)

    let navigate = useNavigate();

    // Make the below function reusable
    const checkEmailInput = (enteredEmail) => {
        var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (enteredEmail.length > 0 && enteredEmail.match(emailPattern)) {
            setShowErrorText(false)
            setEmail(enteredEmail)
            setValidEmailInput(true)
        }
        else if (enteredEmail.length === 0) {
            setShowErrorText(false)
            setValidEmailInput(false)
        }
        else {
            setShowErrorText(true)
            setValidEmailInput(false)
        }
    };
    const checkVerificationCode = (enteredCode) => {
        setVerificationCode(enteredCode)
    }
    return (

        <div className='ForgetPWModal'>
            <div className="FPModal_Top">
                <button onClick={() => navigate(-1)}>
                    <img src={backIcon} alt="close button" />
                </button>
                <button onClick={close}>
                    <img src={closeIcon} alt="close button" />
                </button>
            </div>
            {
                modalType === "forget" ? (
                    <div className="FPModal_Bottom">
                        <h1>Forgot Your Password</h1>
                        <p>It’s okay, these things happen. Please enter your email in the field below. We will send you an email to reset your password.</p>
                        <div className="Modal_Input">
                            <Input
                                type="email"
                                label="Email"
                                placeholderText="Your email"
                                setValue={checkEmailInput}
                                required={true}
                                maxLength="320"
                                minLength="6"
                                showError={showErrorText}
                                value={email}
                            />
                        </div>
                        <div className="Button" >
                            <Button color="#6318AF" onClick={() => navigate("/resetpassword")}>Sumbit</Button>
                        </div>

                    </div>
                ) : (<div className="FPModal_Bottom">
                    <h1>Reset Your Password?</h1>
                    <p>A code has been sent to your email george.carlson@g*****, Please enter the verification code below.</p>
                    <div className="Modal_Input">
                        <Input
                            type="number"
                            label="Verification Code"
                            placeholderText="00 - 00 - 00"
                            setValue={checkVerificationCode}
                            required={true}
                            maxLength="6"
                            value={verificationCode}
                        // showError={showErrorText}
                        />
                    </div>
                    {modalType === "reset" && <div className="ForgotPassword">
                        <a href="#">I didn’t receive the code, Please send it again</a>
                    </div>}
                    <div className="Button">
                        <Button color="#6318AF" >Sumbit</Button>
                    </div>
                </div>
                )}
        </div>

    )
}

export default ForgetPWModal