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
    const [filteredListings, setFilteredListings] = React.useState([])

    let { category } = useParams();

    //Pagination state variables
    const [pageNumber, setPageNumber] = React.useState(1)
    const [listingsPerPage, setListingsPerPage] = React.useState(10)


    useEffect(() => {
        let lastPostIndex = pageNumber * listingsPerPage;
        let firstPostIndex = lastPostIndex - listingsPerPage;
        setFilteredListings(listings.slice(firstPostIndex, lastPostIndex))
    }, [listings])

    useEffect(() => {
        getListings(category).then(res => setListings(res))
    }, [category])

    useEffect(() => {
        let lastPostIndex = pageNumber * listingsPerPage;
        let firstPostIndex = lastPostIndex - listingsPerPage;
        setFilteredListings(listings.slice(firstPostIndex, lastPostIndex))
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pageNumber])

    const handlePageChange = (pageNumber) => {
        setPageNumber(pageNumber)
    }

    return (
        <div className={styles.CategoryDetails}>
            <div className={styles.BreadCrumb_Section}>
                <BreadCrumb />
            </div>
            {/* Heading */}
            <div className={styles.Heading_Section}>
                <h1> Popular {category} in Calgary</h1>
                <p>Showing {filteredListings.length * pageNumber} of {listings.length} results</p>
            </div>
            {/* Content */}
            <div className={styles.Content_Section}>
                {/* SideBar */}
                <Sidebar />
                {/* Listings */}
                <Listings listings={filteredListings} />
            </div>
            <div className={styles.PaginationSection}>
                <PaginationComponent
                    total={listings.length}
                    handleChange={handlePageChange}
                    pageNumber={pageNumber}
                />
            </div>

        </div>
    )
}

export default CategoryDetails