import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        className="button"
        style={{ backgroundColor: !props.disabled && props.color }}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
