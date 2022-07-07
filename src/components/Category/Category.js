import React from 'react'
import { Outlet } from 'react-router-dom'
import CategoryDetails from '../../components/CategoryDetails/CategoryDetails'
import styles from "./Category.module.css"
const Category = () => {
    return (
        <div className={styles.Category}>
            {/* <CategoryDetails /> */}
            <Outlet />
        </div>
    )
}

export default Category