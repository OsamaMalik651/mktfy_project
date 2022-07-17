import React, { useEffect, useMemo } from 'react'
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
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth-context'
import PasswordInput from '../PasswordInput/PasswordInput'
import { checkLength, checkNumberPresent, checkPasswordInput, checkUpperCase } from '../../utils'

const ResetPWModal = ({ close, create }) => {

    const location = useLocation()
    let navigate = useNavigate();
    const { signUp, signUpCompleted } = useContext(AuthContext)

    //State Variables
    const [checkedTOS, setCheckedTOS] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");

    //Check for signup to be completed
    useEffect(() => {
        signUpCompleted && navigate("/home")
    }, [signUpCompleted])

    //password parameters checks
    const hasLength = checkLength(password);
    const hasUpperCase = useMemo(() => checkUpperCase(password), [password]);
    const hasNumber = checkNumberPresent(password);

    //checks for button and tags
    const passwordCheck = hasLength && hasNumber && hasUpperCase && checkPasswordInput(password);
    const passWordStrength = passwordCheck ? "Strong" : "Weak";
    const isPasswordMatching = password === confirmPassword
    const enableSubmit = passwordCheck && isPasswordMatching && checkedTOS;

    const handleSubmit = () => {
        const userDetails = { ...location.state.userDetails, password }
        signUp(userDetails)
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
                        <PasswordInput
                            type="password"
                            label="Password"
                            placeholderText="Your password"
                            strength={passWordStrength}
                            value={password}
                            setValue={setPassword}
                            minLength="8"
                        />
                        <PasswordInput
                            type="password"
                            label="Confirm Password"
                            placeholderText="Your password"
                            strength="Weak"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                            minLength="8"
                        />
                    </div>
                    <div className="PasswordCheckboxes">
                        <PasswordCheckBox enabled={hasLength} text="At least 8 Characters" />
                        <PasswordCheckBox enabled={hasUpperCase} text="1 Uppercase" />
                        <PasswordCheckBox enabled={hasNumber} text="1 Number" />
                    </div>
                    {create &&
                        <div className="TosMessage">
                            <button onClick={() => setCheckedTOS(!checkedTOS)}>
                                <FontAwesomeIcon icon={faSquareCheck} className="CheckIcon" color={checkedTOS ? "#9349DE" : "#EBE8E8"} />
                            </button>
                            <label htmlFor="tos">By checking this box, you agree to our <Link to="/terms-and-services">Terms of service</Link> and our <Link to="/privacy-policy">Privacy Policy</Link></label><br></br>
                        </div>
                    }
                    <div className="Button" >
                        <Button onClick={handleSubmit} color="#6318AE" disabled={!enableSubmit}>{create ? "Create Account" : "Submit"}</Button>
                    </div>
                </div>
            </div>
        </Modal>)

}

export default ResetPWModal