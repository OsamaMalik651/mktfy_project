import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${styles.button} ${props.className}${props.secondaryDisabled ? styles.SecondaryDisabled : ""}`}
        style={{ backgroundColor: !props.disabled && props.color, width: props.width ? props.width : "" }}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type && props.type}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
