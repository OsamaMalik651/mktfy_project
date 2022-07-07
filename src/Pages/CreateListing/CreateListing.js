import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import styles from "./CreateListing.module.css"
const CreateListing = () => {
    return (
        <div className={styles.CreateListing}>
            <Layout>
                <Outlet />
            </Layout>
        </div>
    )
}

export default CreateListing