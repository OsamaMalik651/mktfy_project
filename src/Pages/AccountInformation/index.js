import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import styles from "./Account.module.css"
const Account = () => {
    return (
        <div className={styles.Account}>
            <Outlet />
        </div >

    )
}

export default Account