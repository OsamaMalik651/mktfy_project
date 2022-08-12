import React from 'react'
import closeIcon from "../../assets/icon_close.svg"
import styles from "./CreateAccountModal.module.css"
import { Input } from '../Input/Input'
import Button from '../Button/Button'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Select from '../Select/Select'
import { useState } from 'react'
import { isEmpty } from '../../utils'
import { message } from 'antd';

const CITY_OPTIONS = ["Select City", "Calgary", "Brooks", "Camrose"];

const CreateAccountModal = ({ close }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const { setShowModal } = useOutletContext();


    let navigate = useNavigate();
    const handleClose = () => {
        setShowModal(false);
        navigate("/")
    }
    const Error = () => {
        message.error({
            content: 'Please fill out all fields',
            style: {
                zIndex: '9999'
            },
        });
    };
    const handleSubmit = () => {
        const userDetails = { firstName, lastName, city, email, address, phone }
        // if (!isEmpty(userDetails)) {
        //     Error()
        // } else {
        //     navigate("/createPassword", { state: { userDetails } })
        // }
        navigate("/createPassword", { state: { userDetails } })
    }

    return (
        <div className={styles.CreateAccountModal}>
            <div className={styles.CAModalBody}>
                <div className={styles.CAModal_Top}>
                    <h1>Welcome to MKTFY</h1>
                    <button onClick={() => handleClose()}>
                        <img src={closeIcon} alt="close button" />
                    </button>
                </div>
                <div className={styles.CAWelcomeMessage}>
                    <p>It’s nice to meet you. At MKTFY you are able to buy, sell and donate awesome stuff to a community of awesome people. Please fill out the form below to get started.</p>
                </div>
                <div className={styles.CAForm}>
                    <div className={styles.CAFormInputs}>
                        <div className={styles.CAFormColumnLeft}>
                            <Input
                                label="First Name"
                                placeholderText="Your first Name"
                                required={true}
                                maxLength="320"
                                minLength="6"
                                setValue={setFirstName}
                                value={firstName}
                            />
                            <Input
                                label="Last Name"
                                placeholderText="Your last Name"
                                required={true}
                                maxLength="320"
                                minLength="6"
                                setValue={setLastName}
                                value={lastName}
                            />
                            <Input
                                type="email"
                                label="Email"
                                placeholderText="Your email"
                                required={true}
                                maxLength="320"
                                minLength="6"
                                setValue={setEmail}
                                value={email}
                            />
                            <Input
                                label="Phone"
                                type="tel"
                                placeholderText="+1 (000) 000 - 0000"
                                required={true}
                                maxLength="10"
                                minLength="6"
                                setValue={setPhone}
                                value={phone}
                            />
                        </div>
                        <div className={styles.CAFormColumnRight}>
                            <Input
                                label="Street Address"
                                placeholderText="Default Pickup Address"
                                required={true}
                                maxLength="320"
                                minLength="6"
                                setValue={setAddress}
                                value={address}
                            />
                            <Select
                                label="City"
                                name="City"
                                options={CITY_OPTIONS}
                                value={city}
                                setValue={setCity}
                                size="Small"
                            />
                            <div className={styles.LoginButton}>
                                <Button color="#FFBA00" disabled={false} onClick={handleSubmit}>
                                    Login
                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className={styles.CAPrivacyMessage}>
                        <p>
                            At MKTFY we respect your privacy and do not tolerate spam, and will never sell, rent, lease or give away your information. We only buy, sell or donate your stuff here at MKTFY.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateAccountModal