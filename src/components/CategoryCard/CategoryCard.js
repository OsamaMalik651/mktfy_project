import React from 'react'
import { Link } from 'react-router-dom';
import ImageCard from '../ImageCard/ImageCard'
import styles from "./CategoryCard.module.css"

const CategoryCard = ({ category }) => {
    return (
        <div className={styles.CategoryCard}>
            <div className={styles.Slider_Heading} >
                {category?.category}
            </div>
            <div className={styles.Slider_Cards}>
                {category?.listings.map((listing, index) => {
                    return <ImageCard key={index} listing={listing} />;
                })
                }
            </div>
            <div className={styles.CategoryCard_Cta}>
                <Link to={`/home/${category?.category}`}>Explore Now</Link>
            </div>
        </div>
    )
}

export default CategoryCard