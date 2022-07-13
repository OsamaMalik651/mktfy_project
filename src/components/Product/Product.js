import React from 'react'
import "./Product.css"
import { Outlet } from 'react-router-dom'

const Product = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default Product