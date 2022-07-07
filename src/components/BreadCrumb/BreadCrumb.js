import React from 'react'
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import separator from "../../assets/Icon_nav_forward.svg";
import styles from "./BreadCrumb.module.css"
const BreadCrumb = () => {
    const location = useLocation();
    const breadCrumbView = () => {
        const pathnames = location.pathname.split("/").filter((item) => item);
        return (
            <div>
                <Breadcrumb separator={
                    <img src={separator} className={styles.separator} alt="separator" />
                } className={styles.BreadCrumb}>
                    {pathnames.length > 0 ? (
                        <Breadcrumb.Item >
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                    ) : (
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    )}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <Breadcrumb.Item key={index}>{name}</Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item >
                                <Link to={`${routeTo}`}>name</Link>
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
