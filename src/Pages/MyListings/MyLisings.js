import React from 'react'
import Layout from '../../components/Layout/Layout'
import styles from "./MyListings.module.css"
import { Outlet } from 'react-router-dom';

const MyListings = () => {

    return (
        <div className={styles.MyListings}>
            <Layout>
                <Outlet />
            </Layout>
        </div>
    )
}

export default MyListings