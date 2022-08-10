import React from 'react'
import styles from "./AccountInput.module.css"

const AccountInput = ({ name,
    type,
    placeholder,
    maxLength,
    value,
    required,
    setValue,
    disabled, onBlur, error, setError }) => {
    return (
        <div className={styles.AccountInput}>
            <div className={styles.Label}>
                <label htmlFor={name} >
                    {name}
                </label>
            </div>
            <div className={`${styles.Input_Field} ${error ? styles.Error_border : ""}`}>
                <input
                    type={type || "text"}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={(e) => { onBlur && onBlur(e.target.value) }}
                    onFocus={() => setError && setError("")}
                    disabled={disabled}
                    required={required}
                />
            </div>
            {error && <div className={styles.Error}>
                <p>{error}</p>
            </div>}
        </div>
    )
}

export default AccountInput