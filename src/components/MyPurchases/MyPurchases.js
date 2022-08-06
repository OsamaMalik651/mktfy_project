import React from 'react'
import { useNavigate } from 'react-router-dom'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import MyListingCard from '../MyListingCard/MyListingCard'
import styles from "./MyPurchases.module.css"
const MyPurchases = () => {
    let navigate = useNavigate()
    return (
        <div className={styles.MyPurchases}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            <div className={styles.Heading_Section}>
                <h1>My Purchases</h1>
                <p>2 Items</p>
            </div>
            <div className={styles.MyPurchase_Section}>
                {/* Remember to put prop purchase={true} to indicate the card is being used to display My Purchases */}
                <MyListingCard purchase={true} onClick={() => { navigate('/home/my-purchases/pickupInfo') }} />
                <MyListingCard purchase={true} onClick={() => { navigate('/home/my-purchases/pickupInfo') }} />
            </div>
        </div>
    )
}

export default MyPurchases