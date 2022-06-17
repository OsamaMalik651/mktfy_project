import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import Button from "../../components/Button/Button";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./Login.css";
import Modal from "../../components/Modal/Modal";
import LoginModal from "../../components/LoginModal/LoginModal";
import ForgetPWModal from "../../components/ForgetPasswordModal/ForgetPWModal";
import CreateAccountModal from "../../components/CreateAccountModal/CreateAccountModal";

const Login = () => {
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();
    const changeLoginModalState = () => {
        setShowModal(true);
        navigate("/login");
    };

    const changeCreateAccountModalState = () => {
        navigate("/signup");
        setShowModal(true)
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="logo">
                    <img src={logo} alt="market for you logo" />
                </div>
                <div className="buttons">
                    <Button color="#FFBA00" onClick={changeLoginModalState}>
                        Login
                    </Button>
                    <Button color="#6318AF" onClick={changeCreateAccountModalState}> Create Account </Button>

                </div>
            </div>
            {showModal &&
                <Modal>
                    <Routes>
                        <Route path="/login" element={<LoginModal close={() => setShowModal(!showModal)} />} />
                        <Route path="/forgetpassword" element={<ForgetPWModal modalType="forget" close={() => setShowModal(!showModal)} />} />
                        <Route path="/resetpassword" element={<ForgetPWModal modalType="reset" close={() => setShowModal(!showModal)} />} />
                        <Route path="/signup" element={<CreateAccountModal close={() => setShowModal(!showModal)} />} />

                    </Routes>
                </Modal>
            }
            <div className="footer__text">
                <p>
                    Find out more about us!
                    <a href="#"> Visit our website</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
