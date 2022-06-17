import React, { useState } from 'react'
import Button from '../Button/Button';
import closeIcon from "../../assets/icon_close.svg"
import { Input } from '../Input/Input';
import "./LoginModal.css"
import Modal from '../Modal/Modal';
import { Link, useNavigate, } from 'react-router-dom';

const LoginModal = ({ close }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmailInput, setValidEmailInput] = useState(false);
    const [validPasswordInput, setValidPasswordInput] = useState(false);
    const [showErrorText, setShowErrorText] = useState(false)

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // navigate("/success")
    }

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

    const checkPasswordInput = (enteredPassword) => {
        if (enteredPassword.length >= 6) {
            setPassword(enteredPassword)
            setValidPasswordInput(true)
        } else {
            setValidPasswordInput(false)
        }
    }
    return (
        <div className='LoginModal'>
            <div className="Modal_Top">
                <button onClick={close}>
                    <img src={closeIcon} alt="close button" />
                </button>
            </div>
            <div className="Modal_Bottom">
                <h1>Welcome Back!</h1>
                <div className="Modal_Inputs">

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
                    <Input
                        type="password"
                        label="Password"
                        placeholderText="Your password"
                        setValue={checkPasswordInput}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="6"
                        value={password}
                    />

                </div>

                <div className="ForgotPassword">
                    <Link to="/forgetpassword">I forgot my password</Link>
                </div>
                <div className="Button">
                    <Button type={"submit"} onClick={handleSubmit} color="#FFBA00" disabled={!(validEmailInput && validPasswordInput)}>
                        Login
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default LoginModal