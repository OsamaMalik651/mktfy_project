import React, { useState } from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Button from '../Button/Button'
import { Input } from '../Input/Input'
import Select from '../Select/Select'
import styles from "./AccountInfo.module.css"
const CITY_OPTIONS = ["Select City", "Calgary", "Brooks", "Camrose"];

const AccountInfo = () => {
    const [city, setCity] = useState("");
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
                            <Input
                                inputType="text"
                                label="First Name"
                                placeholderText="George"
                                inputValue="George"
                            />
                            <Input
                                inputType="text"
                                label="Last Name"
                                placeholderText="Carlson"
                                inputValue="George"
                            />
                            <Input
                                inputType="email"
                                label="Email"
                                placeholderText="Carlson"
                                inputValue="George"
                            />
                            <Input
                                label="Phone"
                                type="tel"
                                placeholderText="+1 (000) 000 - 0000"
                                required={true}
                                maxLength="9"
                                minLength="6"

                            />

                        </div>
                    </div>
                </div>
                <div className={styles.AccountInformationCard_Right}>
                    <div className={styles.heading}>
                        <h1>Address Information</h1>

                    </div>
                    <div className={styles.Inputs}>
                        <Input
                            inputType="text"
                            label="Default Pickup Address"
                            placeholderText="123 1st Street SW"
                            inputValue="George"
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
                        <Button color="#FFBA00" className={styles.Button}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo