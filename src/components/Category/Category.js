import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./Category.module.css"
const Category = () => {
    return (
        <div className={styles.Category}>
            <Outlet />
        </div>
    )
}

export default Category