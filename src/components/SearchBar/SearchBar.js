
import React, { useState } from 'react'
import styles from "./SearchBar.module.css"
import searchIcon from "../../assets/search.svg"
import CityDropDown from '../CityDropDown/CityDropDown';

const SearchBar = () => {
    const [city, setCity] = useState("");
    return (
        <div className={styles.SearchBar}>
            {/* Button All */}
            <div className={styles.Button}>
                <button>
                    All
                </button>
            </div>
            {/* Input */}
            <div className={styles.Input}>
                <input
                    type="text"
                    placeholder={"Search on MKTFY"}
                />
                <button type='submit'>
                    <img src={searchIcon} alt="" />
                </button>
            </div>
            {/* City Select */}
            <div className={styles.Dropdown}>
                <CityDropDown
                    setValue={setCity}
                    value={city} />
            </div>
        </div >
    )
}

export default SearchBar