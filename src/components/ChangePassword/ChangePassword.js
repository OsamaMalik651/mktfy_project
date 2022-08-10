import React, { useContext, useState } from 'react'
import AccountInput from '../AccountInput'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Button from '../Button/Button'
import { AuthContext } from '../../context/auth-context'
import TryAgain from '../TryAgainModal/TryAgain'
import styles from "./ChangePassword.module.css"

const ChangePassword = () => {
    const { changePassword, user } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState(user?.email || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        changePassword(email);
    }

    return (
        <div className={styles.ChangePassword}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            <div className={styles.ChangePasswordCard}>
                <div className={styles.Content}>
                    <div className={styles.CurrentPassword}>
                        <h1>Change Password</h1>
                        <p>Please enter your email in the field below. We will send you an email to reset your password.</p>
                        <AccountInput
                            type="email"
                            name="Email"
                            placeholder="Enter email"
                            value={email}
                            setValue={setEmail}
                        />
                    </div>

                    <div className={styles.Button} >
                        <Button color="#6318AF" disabled={false} className={styles.Button} onClick={handleSubmit}>Set Password</Button>
                    </div>
                </div>
            </div>
            {showModal && <TryAgain closeModal={() => setShowModal(!showModal)} />}
        </div>
    )
}

export default ChangePassword