import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import styles from "./Dashboard.module.css"
const Dashboard = () => {

    return (
        <div className={styles.Dashboard}>
            <Layout>
                <Outlet />
            </Layout>
        </div>


    )
}

export default Dashboard