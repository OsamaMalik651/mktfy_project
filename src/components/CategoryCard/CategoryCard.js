import React from 'react'
import { Link } from 'react-router-dom';
import ImageCard from '../ImageCard/ImageCard'
import styles from "./CategoryCard.module.css"

const CategoryCard = () => {
    //Creating array of cards to display as placeholder. Will be removed upon integration wtih backend 
    const array = Array.from(Array(3).keys()).map((index) => {
        return <ImageCard key={index} />;
    });
    return (
        <div className={styles.CategoryCard}>
            <div className={styles.Slider_Heading} >
                Shop Cars & Vehicles
            </div>
            <div className={styles.Slider_Cards}>
                {array}
            </div>
            <div className={styles.CategoryCard_Cta}>
                <Link to='/home/category'>Explore Now</Link>
            </div>
        </div>
    )
}

export default CategoryCard