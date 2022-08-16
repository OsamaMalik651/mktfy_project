import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import Listings from '../Listings/Listings'
import Sidebar from '../Sidebar/Sidebar'
import PaginationComponent from '../Pagination/Pagination'
import styles from "./CategoryDetails.module.css"
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getListings } from '../../services'

const CategoryDetails = () => {
    const [listings, setListings] = React.useState([])
    let { category } = useParams();

    useEffect(() => {
        getListings(category).then(res => setListings(res))
    }, [category])

    return (
        <div className={styles.CategoryDetails}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            {/* Heading */}
            <div className={styles.Heading_Section}>
                <h1> Popular {category} in Calgary</h1>
                <p>Showing 10 of {listings.length} results</p>
            </div>
            {/* Content */}
            <div className={styles.Content_Section}>
                {/* SideBar */}
                <Sidebar />
                {/* Listings */}
                <Listings listings={listings} />
            </div>
            <div className={styles.PaginationSection}>
                <PaginationComponent />
            </div>

        </div>
    )
}

export default CategoryDetails