import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import GooglePlay from "../../assets/GooglePlay.png"
import AppStore from "../../assets/AppStore.png"
import Slider from '../Slider/Slider'
import styles from "./Homepage.module.css"
const Homepage = () => {
    return (
        <div className={styles.Homepage}>
            <Slider />
            <div className={styles.Categories}>
                <CategoryCard />
                <CategoryCard />
            </div>
            <Slider />
            <div className={styles.Categories}>
                <CategoryCard />
                <CategoryCard />
            </div>
            <div className={styles.HomePage_Banner}>

                <div className={styles.HomePage_BannerContent}>
                    <h1> Bring your market with you</h1>
                    <p>Buy and sell on our MKTFY app while you’re on the go!</p>
                    <div className={styles.HomePage_BannerButtons}>
                        <button>
                            <img src={GooglePlay} alt="" />
                        </button>
                        <button>
                            <img src={AppStore} alt="" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage