import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import styles from "./CategoryCard.module.css"

const CategoryCard = () => {
    const array = Array.from(Array(3).keys()).fill(<ImageCard />, 0, 10)

    return (
        <div className={styles.CategoryCard}>
            <div className={styles.Slider_Heading} >
                Shop Cars & Vehicles
            </div>
            <div className={styles.Slider_Cards}>
                {array}
            </div>
            <div className={styles.CategoryCard_Cta}>
                <a href='#'>Explore Now</a>
            </div>
        </div>
    )
}

export default CategoryCard