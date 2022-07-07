import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ReactComponent as DropdownArrow } from "../../assets/dropdown.svg";
import searchIcon from "../../assets/search.svg"
import styles from "./CityDropDown.module.css"

const CityDropDown = (props) => {
    const CITY_OPTIONS = ["Calgary", "Brooks", "Camrose"];
    const [filteredCityList, setFilteredCityList] = useState(CITY_OPTIONS);
    const [showOptions, setShowOptions] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const select = useRef(null);
    useEffect(() => {
        props.setValue(filteredCityList[0])
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
    const handleNameSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const doSearchOnArray = useCallback(
        (nameSearchTerm) => {
            const filterCityData = CITY_OPTIONS.filter((city) => city.toLowerCase().includes(nameSearchTerm.toLowerCase()));
            setFilteredCityList(filterCityData);
        },
        []
    );
    useEffect(() => {
        if (searchTerm) {
            doSearchOnArray(searchTerm);
        } else {
            setFilteredCityList(CITY_OPTIONS);
        }
    }, [searchTerm]);
    return (
        <div ref={select} className={styles.CityDropDown}>
            <div className={styles.Select}>
                <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={toggleOptions}
                    className=""
                    onClick={toggleOptions}
                >
                    < DropdownArrow
                        className={`${styles.DropDownArrow} ${showOptions ? "Open" : ""}`}
                        onClick={toggleOptions}
                    /> {props.value || CITY_OPTIONS[0]}
                </button>

            </div>
            <ul className={`${styles.Menu} ${showOptions ? styles.Show : ""}`}>
                <div className={styles.CitySearch}>
                    <img src={searchIcon} alt="Search icon" />
                    <input
                        placeholder="Search City"
                        value={searchTerm}
                        onChange={handleNameSearch}

                    />
                </div>

                {filteredCityList.length > 0 &&
                    filteredCityList.map((option, index) => {
                        return (
                            <li
                                className={styles.CityOption}
                                key={index}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        );
                    })}
            </ul>
        </div >
    )
}

export default CityDropDown