import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Listings from '../Listings/Listings'
import Sidebar from '../Sidebar/Sidebar'

import PaginationComponent from '../Pagination/Pagination'
// import Sidebar from '../Sidebar/Sidebar'
import styles from "./CategoryDetails.module.css"

const CategoryDetails = () => {
    return (
        <div className={styles.CategoryDetails}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            {/* Heading */}
            <div className={styles.Heading_Section}>
                <h1> Popular Cars & Vehicles in Calgary</h1>
                <p>Showing 10 of 100 results</p>
            </div>
            {/* Content */}
            <div className={styles.Content_Section}>
                {/* SideBar */}
                <Sidebar />
                {/* Listings */}
                <Listings />
            </div>
            <div className={styles.PaginationSection}>
                <PaginationComponent />
            </div>

        </div>
    )
}

export default CategoryDetails