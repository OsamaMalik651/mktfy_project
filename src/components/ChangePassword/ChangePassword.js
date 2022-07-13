import React, { useState } from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Button from '../Button/Button'
import { Input } from '../Input/Input'
import PasswordCheckBox from '../PasswordCheckBox/PasswordCheckBox'
import TryAgain from '../TryAgainModal/TryAgain'
import styles from "./ChangePassword.module.css"

const ChangePassword = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className={styles.ChangePassword}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            <div className={styles.ChangePasswordCard}>
                <div className={styles.Content}>
                    <div className={styles.CurrentPassword}>
                        <h1>Change Password</h1>
                        <Input
                            type="password"
                            label="Current Password"
                            placeholderText="Your current password"
                            minLength="6"
                        />
                        <p>The password must have at least 6 characters and must contain 1 uppercase and 1 number.</p>

                    </div>
                    <div className={styles.Inputs}>
                        <Input
                            type="password"
                            label="New Password"
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
                    <div className="Button" >
                        <Button color="#6318AF" disabled={false} className={styles.Button} onClick={() => setShowModal(!showModal)
                        }>Set Password</Button>
                    </div>
                </div>
            </div>
            {showModal && <TryAgain closeModal={() => setShowModal(!showModal)} />}
        </div>
    )
}

export default ChangePassword