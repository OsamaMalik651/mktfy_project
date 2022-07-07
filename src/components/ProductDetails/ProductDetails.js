import React from 'react'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import ProductCard from '../ProductCard/ProductCard'
import styles from "./ProductDetails.module.css"
const ProductDetails = () => {
    return (
        <div className={styles.ProductDetails}>
            <BreadCrumb />
            <ProductCard />
        </div>
    )
}

export default ProductDetails