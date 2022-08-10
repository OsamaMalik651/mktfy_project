import React, { useEffect, useState } from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Button from '../Button/Button'
import { Input } from '../Input/Input'
import Select from '../Select/Select'
import styles from "./AccountInfo.module.css"
import { AuthContext } from '../../context/auth-context'
import { denormalizePhoneNumber, normalizePhoneNumber } from '../../utils'
import AccountInput from '../AccountInput'


const CITY_OPTIONS = ["Select City", "Calgary", "Brooks", "Camrose"];

const AccountInfo = () => {
    const { user, updateUserInfo, getUpdatedUserInfo } = React.useContext(AuthContext)
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [email, setEmail] = useState(user?.email || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [address, setAddress] = useState(user?.address || "");
    const [city, setCity] = useState(user?.city || "");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");


    useEffect(() => {
        getUpdatedUserInfo()
    }, [])

    useEffect(() => {
        if (!user) {
            getUpdatedUserInfo()
        }
    }, [user]);

    //Function to set phone number
    // setPhone is not called because we need to check if the phone number is entered or not
    //and show error accordingly
    const setPhoneNumber = (enteredPhone) => {
        if (enteredPhone.length < 10) {
            setPhoneError("Phone number is required")
            return
        } else {
            setPhoneError("")
            setPhone(normalizePhoneNumber(enteredPhone))
        }
    }

    //Check if the address is entered or not
    const checkAddressPresent = (address) => {
        if (!address) {
            setAddressError("Address is required")
            setAddress("")
            return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!phoneError && !addressError) {

            let updatedUserDetails = {
                firstName,
                lastName,
                phone: denormalizePhoneNumber(phone),
                address,
                city,
                email
            }
            updateUserInfo(updatedUserDetails)
        }
    }
    return (
        <div className={styles.AccountInfo}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            {/* Account infromation Card */}
            <div className={styles.AccountInformationCard}>
                <div className={styles.AccountInformationCard_Left}>
                    <div className={styles.heading}>
                        <h1>Personal Information</h1>
                        <div className={styles.Inputs}>
                            <AccountInput
                                type="text"
                                name="First Name"
                                placeholder="Enter First Name"
                                value={firstName}
                                setValue={setFirstName}
                            />
                            <AccountInput
                                type="text"
                                name="Last Name"
                                placeholder="Enter Last Name"
                                value={lastName}
                                setValue={setLastName}
                            />
                            <AccountInput
                                type="email"
                                name="Email"
                                placeholder="Enter email"
                                value={email}
                                disabled
                            />
                            <AccountInput
                                name="Phone"
                                type="tel"
                                placeholder="(000) 000 - 0000"
                                minLength="10"
                                maxLength="10"
                                value={phone}
                                setValue={setPhone}
                                onBlur={setPhoneNumber}
                                error={phoneError}
                                setError={setPhoneError}
                            />

                        </div>
                    </div>
                </div>
                <div className={styles.AccountInformationCard_Right}>
                    <div className={styles.heading}>
                        <h1>Address Information</h1>

                    </div>
                    <div className={styles.Inputs}>
                        <AccountInput
                            type="text"
                            name="Default Pickup Address"
                            placeholder="Enter Address"
                            value={address}
                            setValue={setAddress}
                            onBlur={checkAddressPresent}
                            required
                            error={addressError}
                            setError={setAddressError}
                        />
                        <Select
                            name="city"
                            setValue={setCity}
                            options={CITY_OPTIONS}
                            value={city}
                            size="Small"
                        />
                    </div>
                    <div className={styles.button}>
                        <Button color="#FFBA00" className={styles.Button} onClick={handleSubmit}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo