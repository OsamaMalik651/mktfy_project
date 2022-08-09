import React, { useContext } from 'react'
import { Spin } from 'antd';
import { Outlet } from 'react-router-dom'
import Homepage from '../../components/Homepage/Homepage'
import Layout from '../../components/Layout/Layout'
import styles from "./Dashboard.module.css"
import { AuthContext } from '../../context/auth-context'
const Dashboard = () => {
    const { loading } = useContext(AuthContext)
    return (loading ? <Spin /> :
        <div className={styles.Dashboard}>
            <Layout>
                <Outlet />
            </Layout>
        </div>


    )
}

export default Dashboard