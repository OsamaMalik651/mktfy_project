import React from 'react'
import { Outlet } from 'react-router-dom'
import Homepage from '../../components/Homepage/Homepage'
import Layout from '../../components/Layout/Layout'
import styles from "./Dashboard.module.css"
const Dashboard = () => {
    return (
        <div className={styles.Dashboard}>
            <Layout>
                {/* <Homepage /> */}
                <Outlet />
            </Layout>
        </div>
    )
}

export default Dashboard