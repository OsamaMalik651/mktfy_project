import React, { useState } from 'react'
import Button from '../Button/Button';
import closeIcon from "../../assets/icon_close.svg"
import { Input } from '../Input/Input';
import "./LoginModal.css"
import { Link, useNavigate, useOutletContext, } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';
import ErrorModal from '../ErrorModal/ErrorModal';
import { checkPasswordInput } from '../../utils';
import { message } from 'antd';


const LoginModal = ({ close }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmailInput, setValidEmailInput] = useState(false);
    const [validPasswordInput, setValidPasswordInput] = useState(false);
    const [showEmailErrorText, setShowEmailErrorText] = useState(false)
    const [showPasswordErrorText, setShowPasswordErrorText] = useState(false)

    const { setShowModal } = useOutletContext();

    const { error, setError, showError, setShowError } = useContext(AuthContext);

    let navigate = useNavigate()
    const { login } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }
    const handleClose = () => {
        setShowModal(false);
        navigate("/")
    }
    const clearError = () => {
        setError({ title: "", description: "" })
        setShowError(false)
    }
    // Make the below function reusable
    const checkEmailInput = (enteredEmail) => {
        var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (enteredEmail.length > 0 && enteredEmail.match(emailPattern)) {
            setShowEmailErrorText(false)
            setEmail(enteredEmail)
            setValidEmailInput(true)
        }
        else if (enteredEmail.length === 0) {
            setShowEmailErrorText(false)
            setValidEmailInput(false)
        }
        else {
            setShowEmailErrorText(true)
            setValidEmailInput(false)
        }
    };

    const checkPassword = (enteredPassword) => {
        if (enteredPassword.length === 0) {
            setShowPasswordErrorText(false)
            return
        }
        if (enteredPassword.length > 0 && checkPasswordInput(enteredPassword)) {
            setPassword(enteredPassword)
            setValidPasswordInput(true)
            setShowPasswordErrorText(false)
        } else {
            setValidPasswordInput(false)
            enteredPassword.length > 0 && setShowPasswordErrorText(true)
        }
    }

    return (
        <div className='LoginModal'>
            <div className="Modal_Top">
                <button onClick={() => handleClose()}>
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
                        showError={showEmailErrorText}
                        error={"Enter email in valid format"}
                        value={email}
                        logIn={true}
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholderText="Your password"
                        setValue={checkPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="8"
                        value={password}
                        error={"Password should contain 1 uppercase letter, 1 number and minimum 8 characters"}
                        showError={showPasswordErrorText}
                    />
                </div>

                <div className="ForgotPassword">
                    <Link to="/forgetpassword">I forgot my password</Link>
                </div>
                <div className="Button">
                    <Button type={"submit"} onClick={handleSubmit} color="#FFBA00"
                    // disabled={!(validEmailInput && validPasswordInput)}
                    >
                        Login
                    </Button>
                </div>
            </div>
            {showError &&
                message.error(error.description, 2, clearError)
            }
        </div>

    )
}

export default LoginModal