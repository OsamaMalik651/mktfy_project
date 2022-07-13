import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import MyPurchases from '../../components/MyPurchases/MyPurchases'
import styles from "./MyPurchase.module.css"
const MyPurchase = () => {
    return (
        <div className={styles.MyPurchase}>
            <Layout>
                <Outlet />
            </Layout>
        </div>
    )
}

export default MyPurchase