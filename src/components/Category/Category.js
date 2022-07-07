import React from 'react'
import CategoryDetails from '../../components/CategoryDetails/CategoryDetails'
import styles from "./Category.module.css"
const Category = () => {
    return (
        <div className={styles.Category}>
            <CategoryDetails />
        </div>
    )
}

export default Category