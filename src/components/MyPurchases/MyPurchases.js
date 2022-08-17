import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPurchasedListings } from '../../services/MyPurchases'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import MyListingCard from '../MyListingCard/MyListingCard'
import styles from "./MyPurchases.module.css"
const MyPurchases = () => {
    let navigate = useNavigate();

    const [myPurchasedListings, setMyPurchasedListings] = useState([]);
    const [loading, setLoading] = useState(false);

    //Get my purchased listings from the backend on page load
    useEffect(() => {
        setLoading(true);
        getPurchasedListings().then(response => {
            setMyPurchasedListings(response)
            setLoading(false);
        })
    }, [])

    return (
        <div className={styles.MyPurchases}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            <div className={styles.Heading_Section}>
                <h1>My Purchases</h1>
                <p>{loading ? "" : myPurchasedListings.length} items</p>
            </div>
            <div className={styles.MyPurchase_Section}>
                {/* Remember to put prop purchase={true} to indicate the card is being used to display My Purchases */}
                {loading ? <h1>Loading...</h1> :
                    myPurchasedListings.map(listing => <MyListingCard
                        key={listing.id}
                        Carddata={listing}
                        purchase={true}
                        onClick={() => navigate(`/home/my-purchases/pickup-information`, { state: listing })} />
                    )}
            </div>
        </div>
    )
}

export default MyPurchases