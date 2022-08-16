import React from 'react'
import Card from '../Card/Card'
import styles from "./Slider.module.css"

const Slider = () => {
    //Creating array of cards to display as placeholder. Will be removed upon integration wtih backend 
    const array = Array.from(Array(10).keys()).map((item, index) => {
        return <Card key={index} />;
    });
    return (
        <div className={styles.Slider}>
            <div className={styles.Slider_Heading}>
                Deals for you
            </div>
            <div className={styles.Slider_Cards}>
                {array}
            </div>
        </div>
    )
}

export default Slider