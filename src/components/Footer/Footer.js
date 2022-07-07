import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/MKTFY_wordmark.svg";

import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Footer_Content}>
                <div className={styles.Footer_ContentTop}>
                    <div className={styles.Content_Left}>
                        <Logo />
                        <p>Here at MKTFY we are human centric. We believe the stuff we buy, share and give are the backbone of our society — and we hope to ensure that we do this in a conscious way.</p>
                    </div>
                    <div className={styles.Content_Right}>
                        <div className={styles.Links}>
                            <h1>Jump To</h1>
                            <Link to="#">Account Information</Link>
                            <Link to="#">Terms & Services</Link>
                            <Link to="#">Privacy Policy</Link>
                            <Link to="#">FAQ</Link>
                        </div>
                        <div className={styles.Contact}>
                            <h1>MKTFY</h1>
                            <div className={styles.Contact_Details}>
                                <Link to="#">Contact Us</Link>
                                <p>+1 888 345 6789</p>
                                <p>Suite 9, 123 1st Street SW, Calgary, Alberta T2T 7F7</p>
                            </div>


                        </div>
                    </div>
                </div>
                <div className={styles.Footer_ContentBottom}>
                    Copyright @Launchpad by Vog 2022
                </div>
            </div>
        </div>
    )
}

export default Footer