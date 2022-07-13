import React, { useEffect, useRef, useState } from 'react'
// import DropdownArrow from "../../assets/dropdown.svg";
import { ReactComponent as DropdownArrow } from "../../assets/dropdown.svg";

import "./Select.css"
const Select = (props) => {

    const [showOptions, setShowOptions] = useState(false);
    const select = useRef(null);
    useEffect(() => {
        document.addEventListener("mousedown", handleOffClick);
        return () => document.removeEventListener("mousedown", handleOffClick);
    }, []);

    const handleOffClick = (e) => {
        if (select.current && !select.current.contains(e.target)) {
            setShowOptions(false);
        }
    };
    const handleOptionClick = (option) => {
        props.setValue(option);
        setShowOptions(false);
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };
    return (
        <div ref={select} className={`Input ${props.className}`}>
            <div className="InputLabel">
                <label htmlFor={props.name} >
                    {props.name}
                </label>
            </div>
            <div className={`Select ${props.className}`}>
                <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={toggleOptions}
                    className=""
                    onClick={toggleOptions}
                >
                    {props.value || props.options[0]}
                </button>
                <DropdownArrow
                    className={`DropDownArrow ${showOptions ? "Open" : ""}`}
                    onClick={toggleOptions}
                />
                {/* <img
                    src={DropdownArrow}
                    alt="show password icon"
                    onClick={toggleOptions}
                /> */}


            </div>
            <ul className={`Menu ${props.className} ${showOptions ? "Show" : ""}`}>
                {props.options.length > 0 &&
                    props.options.map((option, index) => {
                        return (
                            <li
                                className=""
                                key={index}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        );
                    })}
            </ul>

        </div>
    )
}

export default Select