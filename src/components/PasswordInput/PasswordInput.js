import React, { useState } from 'react'
import styles from "./PasswordInput.module.css"
import eyeHideIcon from "../../assets/icon_eye_hide.svg";

const PasswordInput = ({ type, label, strength, placeholderText, value, setValue, minLength }) => {
    const [inputType, setInputType] = useState(type);

    return (
        <div className={styles.PasswordInput}>
            <div className={styles.Label}>
                <label htmlFor={label}>{label}</label>
                {label === "Password" &&
                    strength &&
                    <p className={strength === "Weak" ? styles.Weak : styles.Strong}>{strength}</p>
                }
            </div>
            <div className={styles.InputField}>
                <input
                    type={inputType}
                    id={label}
                    placeholder={placeholderText}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    minLength={minLength}
                />
                {type === "password" && (
                    <img
                        src={eyeHideIcon}
                        alt="show password icon"
                        onClick={() =>
                            inputType === "password"
                                ? setInputType("text")
                                : setInputType("password")
                        }
                    />
                )}
            </div>
        </div>
    )
}

export default PasswordInput