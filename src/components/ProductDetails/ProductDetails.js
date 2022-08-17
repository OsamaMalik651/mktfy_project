import React from 'react'
import { useEffect } from 'react'
import { getProduct } from '../../services'
import BreadCrumb from '../BreadCrumb/BreadCrumb'
import ProductCard from '../ProductCard/ProductCard'
import styles from "./ProductDetails.module.css"
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    let { productID } = useParams()

    const [product, setProduct] = React.useState({})
    useEffect(() => {
        window.scrollTo(0, 0)
        getProduct(productID).then(res => setProduct(res))
    }, [])

    return (
        <div className={styles.ProductDetails}>
            <BreadCrumb product={product} />
            <ProductCard product={product} />
        </div>
    )
}

export default ProductDetails