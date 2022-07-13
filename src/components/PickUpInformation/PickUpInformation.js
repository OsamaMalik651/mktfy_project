import React from 'react'
import styles from "./PickUpInformation.module.css"
import PlaceholderImage from "../../assets/placeholder-image.png"
import BreadCrumb from '../BreadCrumb/BreadCrumb'
const PickUpInformation = () => {
    return (
        <div className={styles.PickUpInformationPage}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            <div className={styles.PickUpInformation}>

                <div className={styles.PickUpInformation_Top}>
                    <h1>Pickup Information</h1>
                    <div className={styles.MyListingCard}>
                        <img src={PlaceholderImage} alt="" className={styles.Image} />
                        <div className={`${styles.Details} ${styles.Purchases}`}>

                            <div className={styles.Detail}>
                                <p className={styles.Heading}>Microsoft Xbox One X 1TB Console</p>
                                <p className={styles.Price}>$ 340.00</p>
                                <p className={styles.Condition}>
                                    <span className={styles.Circle}></span>
                                    Condition - Used</p>
                            </div>
                        </div>
                    </div >

                </div>
                <div className={styles.PickUpInformation_Bottom}>
                    <p>Pick up</p>
                    <div className={styles.SellerInfo}>
                        <div className={styles.SellerInfo_Left}>
                            <div className={styles.Profile}>
                                <h1>M</h1>
                            </div>
                            <div className={styles.ProfileDetails}>
                                <h1>Matt Smith</h1>
                                <p>403-123-4567</p>
                            </div>
                        </div>

                        <div className={styles.SellerInfo_Right}></div>
                    </div>
                    <div className={styles.Address}>
                        <p>Please pick up your purchase at 12 12ave SW, Calgary, Alberta</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PickUpInformation