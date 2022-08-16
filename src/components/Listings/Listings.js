import React from 'react'
import ListingCard from '../ListingCard/ListingCard'
import styles from "./Listings.module.css"

const Listings = ({ listings }) => {
    return (
        <div className={styles.Listings}>
            {listings.slice(0, 9).map((listing, index) => {
                return (<div key={index}>
                    <ListingCard key={index} listing={listing} />
                    <hr />
                </div>);
            })}
        </div>
    )
}

export default Listings