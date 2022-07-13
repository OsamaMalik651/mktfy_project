import React from 'react'
import styles from "./Card.module.css"
import PlaceholderImage from "../../assets/placeholder-image.png"
const Card = () => {
    return (
        <div className={styles.Card}>
            <div className={styles.Card_Top}>
                <img src={PlaceholderImage} alt="" />
            </div>
            <div className={styles.Card_Bottom}>
                <h1>title</h1>
                <p> $ 169.98 </p>
            </div>
        </div>
    )
}

export default Card