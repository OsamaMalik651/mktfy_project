import React from 'react'
import styles from "./ImageCard.module.css"
import PlaceholderImage from "../../assets/placeholder-image.png"

const ImageCard = () => {
    return (
        <div className={styles.ImageCard}>
            <img src={PlaceholderImage} alt="" />
        </div>
    )
}

export default ImageCard