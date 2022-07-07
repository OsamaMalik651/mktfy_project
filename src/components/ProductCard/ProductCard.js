import React from 'react'
import Button from '../Button/Button'
import ProductImage from '../ProductImage/ProductImage'
import OfferIcon from "../../assets/local_offer-24px.svg";
import styles from "./ProductCard.module.css"

const ProductCard = () => {
    return (
        <div className={styles.ProductCard}>
            <div className={styles.ProductCard_Left}>
                <ProductImage />
            </div>
            <div className={styles.ProductCard_Right}>
                <div className={styles.ProductCard_Right_Details}>
                    <h1>Classic Orange Car 1980 Manual</h1>
                    <p className={styles.price}>$ 20,199.99</p>
                    <Button disabled={true} width="33.25rem" secondaryDisabled={true}>Sold Out</Button>
                    <p className={styles.condition}>Used</p>
                    <p className={styles.details}>Details</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                </div>
                <div className={styles.ProductCard_Right_User}>
                    <div className={styles.ProductCard_Right_User_ProfilePhoto}>
                        <h1 className={styles.Avatar}>M</h1>
                    </div>
                    <div className={styles.ProductCard_Right_User_Details}>
                        <h1>Matt Smith</h1>
                        <div className={styles.Listings_Count}>
                            <img src={OfferIcon} alt="" />
                            <p> 2 listings</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard