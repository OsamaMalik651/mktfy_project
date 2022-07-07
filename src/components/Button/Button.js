import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className={`button ${props.className}${props.secondaryDisabled ? "SecondaryDisabled" : ""}`}
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
