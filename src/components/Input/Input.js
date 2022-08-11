import React, { useCallback, useState } from "react";
import "./Input.css";
import eyeHideIcon from "../../assets/icon_eye_hide.svg";

export const Input = (props) => {
  const [inputType, setInputType] = useState(props.type);
  const [inputValue, setInputValue] = useState(props.value)

  const returnValue = useCallback(
    (enteredValue) => {
      props.setValue && props.setValue(enteredValue)
    },
    [inputValue],
  )
  return (
    <div className={`Input ${props.className} ${inputType === 'email' && props.logIn ? 'LoginEmail' : ''}`}>
      <div className="InputLabel">
        <label htmlFor={props.label}
          className={props.showError ? 'Error' : ""}>{props.label}</label>
        {props.strength && <p className={props.strength === "Weak" ? "Weak" : "Strong"}>{props.strength}</p>}</div>

      <div className={`Input_Field ${props.className}${props.showError ? 'Error_border' : ""}`} >
        <input
          type={inputType}
          id={props.label}
          placeholder={props.placeholderText}
          required={props.required}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={(e) => returnValue(e.target.value)}
          maxLength={props.maxLength}
          minLength={props.minLength}
          pattern={props.pattern}
        />
        {props.type === "password" && (
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
      {props.showError && <div className="Error">
        <p>{props.error}</p>
      </div>}
    </div>
  );
};
