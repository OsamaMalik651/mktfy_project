
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DropDown from "../../assets/dropdown.svg";
import ExitIcon from "../../assets/exit_to_app.svg"
import { AuthContext } from '../../context/auth-context';

import styles from "./UserDropDown.module.css"
const UserDropDown = () => {
    let userName = "George Calson"
    const [show, setShow] = useState(false);
    const dropDown = useRef(null)
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        document.addEventListener("mousedown", handleOffClick);
        return () => document.removeEventListener("mousedown", handleOffClick);
    }, []);

    const handleOffClick = (e) => {
        if (dropDown.current && !dropDown.current.contains(e.target)) {
            setShow(false);
        }
    };
    const handleShowOptions = () => {
        setShow(!show)
    }
    return (
        <div ref={dropDown} className={styles.UserDropDown}>
            <p>Welcome back,</p>
            <div className={styles.UserName} onClick={handleShowOptions}>
                <img src={DropDown} alt="" className={show ? styles.Show : ""} />
                <h1>{userName}</h1>
            </div>
            <div className={show ? styles.UserDropDownMenu : styles.UserDropDownMenuHide}>
                <div className={styles.UserSection}>
                    <div className={styles.Avatar}>
                        <h1 className="">G</h1>
                    </div>
                    <div className={styles.Name}>
                        <h1>{userName}</h1>
                    </div>

                </div>
                <div className={styles.Links}>
                    <div className={styles.SettingsSection}>
                        <ul>
                            <li>
                                <b>Settings</b>
                            </li>
                            <li>
                                <Link to="/home/account">
                                    Account Information
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/account/change-password">
                                    Change Password
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/my-purchases">
                                    My Purchases
                                </Link>
                            </li>
                            <li>
                                <Link to="/home/my-listings">
                                    My Listings
                                    <div className={styles.Count}>2</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.SettingsSection}>
                        <ul>
                            <li>
                                <b>Help</b>
                            </li>
                            <li>
                                <Link to="/home/faq">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.SignOut} onClick={logout}>
                    <div className={styles.Signout_Button}>
                        Sign Out
                        <img src={ExitIcon} alt="" />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default UserDropDown