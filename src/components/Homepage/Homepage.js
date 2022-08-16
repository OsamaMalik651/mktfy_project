import React, { useEffect } from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import GooglePlay from "../../assets/GooglePlay.png"
import AppStore from "../../assets/AppStore.png"
import Slider from '../Slider/Slider'
import styles from "./Homepage.module.css"
import { getDashboardListings } from '../../services'

const Homepage = () => {
    const [dashboardCategories, setDashboardCategories] = React.useState([])
    useEffect(() => {
        try {
            getDashboardListings().then(res => setDashboardCategories(res))
        }
        catch (err) { console.log(err) }
    }, [])

    return (
        <div className={styles.Homepage}>
            <Slider />
            <div className={styles.Categories}>
                <CategoryCard category={dashboardCategories[0]} />
                <CategoryCard category={dashboardCategories[1]} />
            </div>
            <Slider />
            <div className={styles.Categories}>
                <CategoryCard category={dashboardCategories[2]} />
                <CategoryCard category={dashboardCategories[3]} />
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