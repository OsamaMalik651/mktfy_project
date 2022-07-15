import React from 'react'
import closeIcon from "../../assets/icon_close.svg"
import "./CreateAccountModal.css"
import { Input } from '../Input/Input'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import Select from '../Select/Select'
const CITY_OPTIONS = ["Calgary", "Brooks", "Camrose"];

const CreateAccountModal = ({ close }) => {
    let navigate = useNavigate();
    return (
        <div className="CreateAccountModal">
            <div className="CAModalBody">
                <div className="CAModal_Top">
                    <h1>Welcome to MKTFY</h1>
                    <button onClick={close}>
                        <img src={closeIcon} alt="close button" />
                    </button>
                </div>
                <div className="CAWelcomeMessage">
                    <p>It’s nice to meet you. At MKTFY you are able to buy, sell and donate awesome stuff to a community of awesome people. Please fill out the form below to get started.</p>
                </div>
                <div className="CAForm">
                    <div className="CAFormRow">
                        <Input
                            label="First Name"
                            placeholderText="Your first Name"
                            required={true}
                            maxLength="320"
                            minLength="6"
                        />
                        <Input
                            label="Street Address"
                            placeholderText="Default Pickup Address"
                            required={true}
                            maxLength="320"
                            minLength="6" />
                    </div>
                    <div className="CAFormRow">
                        <Input
                            label="Last Name"
                            placeholderText="Your last Name"
                            required={true}
                            maxLength="320"
                            minLength="6" />
                        {/* <Input
                            label="City"
                            placeholderText="City"
                            required={true}
                            maxLength="320"
                            minLength="6"
                            type="select"
                        /> */}
                        <Select label="City"
                            options={CITY_OPTIONS}
                            value=""
                        />
                    </div>
                    <div className="CAFormRow">
                        <Input
                            type="email"
                            label="Email"
                            placeholderText="Your email"
                            required={true}
                            maxLength="320"
                            minLength="6"
                        />

                    </div>
                    <div className="CAFormRow">
                        <Input
                            label="Phone"
                            type="tel"
                            placeholderText="+1 (000) 000 - 0000"
                            required={true}
                            maxLength="9"
                            minLength="6"
                        />
                        <Button color="#FFBA00" disabled={false} onClick={() => navigate("/createPassword")}>
                            Login
                        </Button>
                    </div>
                    <div className="CAPrivacyMessage">
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