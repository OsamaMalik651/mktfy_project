import React from 'react'
import styles from "./Navbar.module.css"
import logo from "../../assets/logo.svg"
import AddCircle from "../../assets/Add_circle.svg"
import MenuIcon from "../../assets/menu-icon.svg"
import SearchBar from '../SearchBar/SearchBar'
import UserDropDown from '../UserDropDown/UserDropDown'
import NotificationDropDown from '../NotificationDropDown/NotificationDropDown'
import Button from '../Button/Button'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { categories } from '../../services'
const Navbar = () => {
    let navigate = useNavigate()
    return (
        <div className={styles.Navbar}>
            <div className={styles.NavbarTop}>
                <div className={styles.NavbarTopLogo}>
                    <img src={logo} alt="market for you logo" />
                </div>
                <div className={styles.NavbarTopSearch}>
                    <SearchBar />
                </div>
                <div className={styles.NavbarTopUser}>
                    <UserDropDown />
                </div>
                <div className={styles.NavbarTopNotification}>
                    <NotificationDropDown />
                </div>
                <div className={styles.NavbarTopCreateListing}>
                    <Button
                        className={styles.Button}
                        onClick={() => navigate("/home/create-listing")}>
                        <img src={AddCircle} alt="" />
                        Create Listing</Button>
                </div>

            </div>
            <div className={styles.NavbarBottom}>
                <Link to="#">
                    <img src={MenuIcon} alt="" />
                    Categories
                </Link>
                <Link to="#">Deals</Link>
                {categories.map((category) => {
                    return <NavLink to={`/home/${category}`} key={category}>{category}</NavLink>
                })}
            </div>
        </div>
    )
}

export default Navbar