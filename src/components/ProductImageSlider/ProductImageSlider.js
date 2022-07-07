import React from 'react'
import { ReactComponent as Arrow } from "../../assets/icon_right_arrowhead.svg"
import PlaceholderImage from "../../assets/placeholder-image.png"
import styles from "./ProductImageSlider.module.css"
const ProductImageSlider = () => {
    // const array = Array.from(Array(3).keys()).fill(<ImageCard />, 0, 2)
    return (
        <div className={styles.ProductImageSlider}>
            <div className={styles.ArrowTop}>
                <Arrow />
            </div>
            <div className={styles.Images}>
                <img src={PlaceholderImage} alt="" className={styles.border} />
                <img src={PlaceholderImage} alt="" />
                <img src={PlaceholderImage} alt="" />
            </div>
            <div className={styles.ArrowBottom}>
                <Arrow />
            </div>

        </div>
    )
}

export default ProductImageSlider