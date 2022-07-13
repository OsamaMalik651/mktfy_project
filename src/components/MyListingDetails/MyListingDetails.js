import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import MyListingCard from '../MyListingCard/MyListingCard';
import styles from "./MyListingDetails.module.css"
const MyListingDetails = ({ data }) => {
    const [activeItems, setActiveItems] = useState(true);
    const [SoldItems, setSoldItems] = useState(false);

    const showActiveItems = () => {
        setActiveItems(true)
        setSoldItems(false)
    }
    const showSoldItems = () => {
        setActiveItems(false)
        setSoldItems(true)
    }
    // console.log(data.cars[0])
    return (
        <div className={styles.MyListingDetails}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            <div className={styles.Heading_Section}>
                <h1>My Listings</h1>
                <div className={styles.ListingSelectors}>
                    <p className={activeItems ? styles.Selected : ""} onClick={showActiveItems}>
                        {activeItems && <span className={styles.Circle} />}
                        Active Items</p>
                    <p className={SoldItems ? styles.Selected : ""} onClick={showSoldItems}>
                        {SoldItems && <span className={styles.Circle} />}
                        Sold Items</p>
                </div>
            </div>
            {activeItems && <div className={styles.ListingsDisplay}>
                {/* Show pending listing */}
                <div className={styles.PendingItems}>
                    <Link to="/my-listings/mylistingedit">
                        <MyListingCard state="pending" Carddata={data.cars[0]} />
                    </Link>

                </div>
                {/* Show available listing */}
                <h1>Available Items</h1>
                <div className={styles.AvailableItems}>
                    <MyListingCard />
                    <MyListingCard />
                </div>
            </div>}
            {SoldItems && <div className={styles.ListingsDisplay}>
                {/* Show pending listing */}
                <div className={styles.PendingItems}>
                    <MyListingCard state="sold" />
                </div>

            </div>}
        </div>
    )
}

export default MyListingDetails