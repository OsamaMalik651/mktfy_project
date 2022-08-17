import React, { useEffect } from 'react'
import "./Product.css"
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'

const Product = () => {

    let navigate = useNavigate()
    let location = useLocation()
    let params = useParams()

    // Check if user clicks on Product in BreadCrumb, if so, redirect to correct category page
    useEffect(() => {
        const pathnames = location.pathname.split("/").filter((item) => item);
        if (pathnames[pathnames.length - 1] === "product") {
            navigate(`/home/${Object.values(params)[0]}`)
        }
    }, [params])

    return (
        <>
            <Outlet />
        </>
    )
}

export default Product