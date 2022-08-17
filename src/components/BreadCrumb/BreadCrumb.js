import React, { useEffect } from 'react'
import { useLocation, Link, useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import separator from "../../assets/Icon_nav_forward.svg";
import styles from "./BreadCrumb.module.css"
const BreadCrumb = ({ product }) => {
    const location = useLocation();
    const breadCrumbView = () => {
        const pathnames = location.pathname.split("/").filter((item) => item);
        let decodedUrls = product ? pathnames.map((pathname) => {
            //check if pathname is a product. If yes, return the product name
            let decodedUrl = ""
            if (pathname.includes(product.id)) {
                decodedUrl = product.title
            } else {
                //return the pathname in Sentence case and replace %20 with space
                decodedUrl = pathname.replace(/%20/g, " ").charAt(0).toUpperCase() + pathname.replace(/%20/g, " ").slice(1);
            }
            return decodedUrl
        }) : pathnames.map((pathname) => pathname.replace(/%20/g, " ").charAt(0).toUpperCase() + pathname.replace(/%20/g, " ").slice(1))

        return (
            <div>
                <Breadcrumb separator={<img src={separator} className={styles.separator} alt="separator" />
                } className={styles.BreadCrumb}>

                    {decodedUrls.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return (
                            <Breadcrumb.Item key={index}>
                                {isLast ? name : <Link to={`${routeTo}`}>{name}</Link>}
                            </Breadcrumb.Item>
                        );
                    })}
                </Breadcrumb>
            </div>
        );
    };
    return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
