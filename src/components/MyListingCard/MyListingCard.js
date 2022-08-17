import React from 'react'
import styles from "./MyListingCard.module.css"
import PlaceholderImage from "../../assets/placeholder-image.png"
import { useLocation } from 'react-router-dom'
const MyListingCard = ({ state, Carddata, purchase, onClick }) => {
    let location = useLocation();
    // console.log(location.pathname)
    const renderMyPurchaseCard = (Carddata) => {
        return (
            <div className={styles.MyListingCard} onClick={onClick && onClick}>
                <img src={PlaceholderImage} alt="" className={styles.Image} />
                <div className={`${styles.Details} ${styles.Purchases}`}>

                    {purchase && <p className={styles.Date}>September 07 2020</p>}
                    <div className={styles.Detail}>
                        <p className={styles.Heading}>{Carddata.title}</p>
                        <p className={styles.Price}>$ {Carddata.price}</p>
                        <p className={styles.Condition}>
                            <span className={styles.Circle}></span>
                            Condition - {Carddata.price}</p>
                    </div>
                </div>
            </div >
        )
    }
    const renderMyListingCard = (Carddata) => {
        return (
            <div className={styles.MyListingCard} onClick={onClick && onClick}>
                <img src={PlaceholderImage} alt="" className={styles.Image} />
                <div className={`${styles.Details} ${styles.Purchases}`}>
                    {state && state === "pending" ? <p className={styles.PendingTag}> Pending State</p> : (state === "sold" &&
                        <p className={styles.SoldTag}>Sale Confirmed</p>)}
                    {purchase && <p className={styles.Date}>September 07 2020</p>}
                    <div className={styles.Detail}>
                        <p className={styles.Heading}>Microsoft Xbox One X 1TB Console</p>
                        <p className={styles.Price}>$ 340.00</p>
                        <p className={styles.Condition}>
                            <span className={styles.Circle}></span>
                            Condition - Used</p>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <>
            {location.pathname === "/home/my-purchases" ?
                renderMyPurchaseCard(Carddata) : renderMyListingCard(Carddata)}
        </>

    )
}

export default MyListingCard