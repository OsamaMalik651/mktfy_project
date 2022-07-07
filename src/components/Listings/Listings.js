import React from 'react'
import ListingCard from '../ListingCard/ListingCard'
import styles from "./Listings.module.css"

const Listings = () => {
    return (
        <div className={styles.Listings}>
            <ListingCard />
            <hr />
            <ListingCard />
            <hr />
            <ListingCard />
            <hr />
        </div>
    )
}

export default Listings