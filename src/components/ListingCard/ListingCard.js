import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import styles from "./ListingCard.module.css"
import { Link, useNavigate, useLocation } from 'react-router-dom';

const ListingCard = ({ listing }) => {
    const navigate = useNavigate();
    let location = useLocation();
    const goToProduct = () => {
        navigate(`${location.pathname.toString()}/product/${listing.id}`)
    }
    return (
        <div className={styles.ListingCard} onClick={() => goToProduct()}>
            <div className={styles.ListingCard_Left}>
                <ImageCard />
            </div>
            <div className={styles.ListingCard_Right}>
                <h1 className={styles.title}>{listing?.title}</h1>
                <div className={styles.details}>
                    <p className={styles.price}>$ {listing?.price}</p>
                    <p className={styles.condition}>{listing?.condition}</p>
                    <p className={styles.description}>{listing?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ListingCard