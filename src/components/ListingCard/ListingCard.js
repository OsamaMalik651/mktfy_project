import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import styles from "./ListingCard.module.css"

const ListingCard = () => {
    return (
        <div className={styles.ListingCard}>
            <div className={styles.ListingCard_Left}>
                <ImageCard />
            </div>
            <div className={styles.ListingCard_Right}>
                <h1 className={styles.title}>Classic Orange Car 1980 Manual</h1>
                <div className={styles.details}>
                    <p className={styles.price}>$ 20,199.99</p>
                    <p className={styles.condition}>Used</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                </div>
            </div>
        </div>
    )
}

export default ListingCard