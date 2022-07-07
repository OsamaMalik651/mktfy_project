import React from 'react'
import ProductImageSlider from '../ProductImageSlider/ProductImageSlider'
import styles from "./ProductImage.module.css"
import PlaceholderImage from "../../assets/placeholder-image.png"


const ProductImage = () => {
    return (
        <div className={styles.ProductImage}>
            <div className={styles.ProductImage_Slider}>
                <ProductImageSlider />
            </div>
            <div className={styles.ProductImage_MainImage}>
                <img src={PlaceholderImage} alt="" />
                <p>1 of 3</p>
            </div>

        </div>
    )
}

export default ProductImage