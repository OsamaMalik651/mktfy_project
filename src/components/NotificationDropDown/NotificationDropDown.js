import React, { useEffect, useState } from 'react'
import styles from "./NotificationDropDown.module.css"
import NotificationIcon from "../../assets/NotificationIcon.svg"
import { useRef } from 'react'
const NotificationDropDown = () => {
    const [newNotification, setNewNotification] = useState(true)
    const [show, setShow] = useState(false);
    const dropDown = useRef(null)

    useEffect(() => {
        document.addEventListener("mousedown", handleOffClick);
        return () => document.removeEventListener("mousedown", handleOffClick);
    }, []);

    const handleOffClick = (e) => {
        if (dropDown.current && !dropDown.current.contains(e.target)) {
            setShow(false);
        }
    };
    const handleShowOptions = () => {
        setShow(!show)
    }

    return (
        <div ref={dropDown} className={styles.NotificationDropDown} onClick={handleShowOptions}>
            {newNotification && <span className={styles.NewNotificationDot}></span>}
            <img src={NotificationIcon} alt="" />
            <div className={show ? styles.NotificationsMenu : styles.NotificationsMenuHide}>
                <div className={styles.Notifications}>
                    <div className={styles.Heading}>
                        <p><b>New for you</b></p>
                    </div>
                    <div className={styles.NotificationCard}>
                        <div className={styles.NotificationCardLeft}>
                            <div className={styles.Avatar}>
                                <h1 className="">MKTFY</h1>
                            </div>
                        </div>
                        <div className={styles.NotificationCardRight}>
                            <p className={styles.Message}>
                                Hey Mark, welcome to MKTFY
                            </p>
                            <p className={styles.Date}>
                                September 07 2020
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.Notifications}>
                    <div className={styles.Heading}>
                        <p><b>Previously Seen</b></p>
                    </div>
                    <div className={styles.NotificationCards}>
                        <div className={styles.NotificationCard}>
                            <div className={styles.NotificationCardLeft}>
                                <div className={styles.Avatar}>
                                    <h1 className="">MKTFY</h1>
                                </div>
                            </div>
                            <div className={styles.NotificationCardRight}>
                                <p className={styles.Message}>
                                    Let’s create your first offer!
                                </p>
                                <p className={styles.Date}>
                                    September 05 2020
                                </p>
                            </div>
                        </div>
                        <div className={styles.NotificationCard}>
                            <div className={styles.NotificationCardLeft}>
                                <div className={styles.Avatar}>
                                    <h1 className="">MKTFY</h1>
                                </div>
                            </div>
                            <div className={styles.NotificationCardRight}>
                                <p className={styles.Message}>
                                    Our Terms of Service has been updated!
                                </p>
                                <p className={styles.Date}>
                                    Our Terms of Service has been updated!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NotificationDropDown