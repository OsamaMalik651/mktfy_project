import React from 'react'
import Card from '../Card/Card'
import styles from "./Slider.module.css"

const Slider = () => {

    const array = Array.from(Array(10).keys()).fill(<Card />, 0, 10)

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